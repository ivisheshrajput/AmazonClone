import { resetCart } from "@/store/nextSlice";
import React from "react";
import { useDispatch } from "react-redux";

const ResetCart = () => {
  const dispatch = useDispatch();
  const handleResetCart = () => {
    const confirmResetCart = window.confirm(
      "Are you sure, you want to reset the cart?"
    );
    if (confirmResetCart) {
      dispatch(resetCart());
    }
  };
  return (
    <button
      onClick={handleResetCart}
      className="w-44 h-10 font-semibold cursor-pointer bg-gray-200 rounded-lg hover:bg-red-600 hover:text-white duration-300"
    >
      Reset Cart
    </button>
  );
};

export default ResetCart;
