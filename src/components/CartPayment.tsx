import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StoreProduct, stateProps } from "../../type";
import { SiMediamarkt } from "react-icons/si";
import FormattedPrice from "./FormattedPrice";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";

const CartPayment = () => {
  const { productData, userInfo } = useSelector(
    (state: stateProps) => state.next
  );
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let amount = 0;
    productData.map((item: StoreProduct) => {
      amount += item.price * 10 * item.quantity;
      return;
    });
    setTotalAmount(amount);
  }, [productData]);

const stripePromise=loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
)
const {data:session}=useSession();
const handleCheckout=async()=>{
  const stripe=await stripePromise;
  const response=await fetch("/api/checkout",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({items:productData,email:session?.user?.email}),
  });
  const checkoutSession=await response.json();
  const result:any=await stripe?.redirectToCheckout({
    sessionId:checkoutSession.id,
  })
  if(result.error){
    alert(result?.error.message)
  }
}
  return (
    <div className=" p-4 ">
      <div className="flex">
        <div className="flex items-center gap-3 mt-3 ">
          <div
            className="bg-green-600 rounded-full p-1 h-6 w-6 text-sm
         text-white flex items-center justify-center mt-1"
          >
            <SiMediamarkt />
          </div>
          <div className="text-xs whitespace-normal break-words">
            Your order qualifies for FREE Shipping. Continue for more Details
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-12">
        <span className="font-bold">Total Price: </span>
        <span>
          <FormattedPrice amount={totalAmount} />
        </span>
      </div>
   {userInfo?(<div className="flex flex-col items-center">
    <button onClick={handleCheckout} className="w-full h-10 text-sm font-semibold bg-amazon_yellow bg-opacity-50 cursor-pointer text-black rounded-lg hover:bg-amazon_blue hover:text-white duration-300 ">
      Proceed to Checkout
    </button>
   </div>):(<>   <div className="flex flex-col items-center">
        <button className="w-full h-10 text-sm font-semibold bg-amazon_yellow bg-opacity-50 cursor-not-allowed text-white rounded-lg ">
          Proceed to Checkout
        </button>
        <p className="text-sm  text-red-500 font-semibold animate-bounce cursor-pointer hover:underline mt-2">
          Please Login To Continue
        </p>
      </div></>)}
    </div>
  );
};

export default CartPayment;
