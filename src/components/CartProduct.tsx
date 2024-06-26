import React from "react";
import { CartProductItem } from "../../type";
import { IoMdClose } from "react-icons/io";
import { LuMinus, LuPlus } from "react-icons/lu";
import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "@/store/nextSlice";
interface cartProductItemProps {
  item: CartProductItem;
}
const CartProduct = ({ item }: cartProductItemProps) => {
  const dispatch = useDispatch();
  return (
    <div className="flex  rounded-lg justify-between items-center p-4">
      <div className="flex justify-between items-center gap-4">
        <div className="relative w-[150px] h-[100px]">
          <div className="absolute inset-0">
            <Image
              className="object-contain"
              layout="fill"
              src={item.image}
              alt="productImage"
            />
          </div>
        </div>
        <div className="flex items-center px-2 gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-md font-semibold text-amazon_blue">
              {item.title}
            </p>
            <p className="text-sm text-gray-600">{item.description}</p>
            <p className="text-sm text-gray-600">
              Unit Price{" "}
              <span className="font-semibold text-amazon_blue">
                <FormattedPrice amount={item.price * 10} />
              </span>
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center mt-1 justify-between border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300">
                <span
                  onClick={() =>
                    dispatch(
                      increaseQuantity({
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        description: item.description,
                        category: item.category,
                        image: item.image,
                        quantity: 1,
                      })
                    )
                  }
                  className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
                >
                  <LuPlus />
                </span>
                <span>{item.quantity}</span>
                <span
                  onClick={() =>
                    dispatch(
                      decreaseQuantity({
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        description: item.description,
                        category: item.category,
                        image: item.image,
                        quantity: 1,
                      })
                    )
                  }
                  className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
                >
                  <LuMinus />
                </span>
              </div>
              <div
                onClick={() => dispatch(deleteProduct(item.id))}
                className="flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300"
              >
                <MdDeleteOutline className="mt-[2px]" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-lg font-semibold text-amazon_blue mr-16">
        <FormattedPrice amount={item.price * 10 * item.quantity} />
      </div>
    </div>
  );
};

export default CartProduct;
