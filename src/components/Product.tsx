import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { ColorRing } from "react-loader-spinner";
import { ProductAll } from "../../type";
import { useDispatch } from "react-redux";
import FormattedPrice from "./FormattedPrice";
import { addToCart, addToFavorite } from "@/store/nextSlice";

interface ProductProps {
  products: ProductAll[];
}

const Product = ({ products }: ProductProps) => {
  const dispatch = useDispatch();

  // Infinite Scroll
  const [visibleProducts, setVisibleProducts] = useState(6); // Initially display 6 products
  const [isFetching, setIsFetching] = useState(false);

  // Function to load more products when user scrolls to the bottom
  const loadMoreProducts = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", loadMoreProducts);
    return () => window.removeEventListener("scroll", loadMoreProducts);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    // Fetch more products here, e.g., from an API
    // For now, let's simulate a delay
    setTimeout(() => {
      setVisibleProducts(
        (prevVisibleProducts: number) => prevVisibleProducts + 6
      );
      setIsFetching(false);
    }, 3000); // Simulated delay of 3 seconds
  }, [isFetching]);

  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {products
        .slice(0, visibleProducts)
        .map(({ id, title, price, description, category, image }) => (
          <div
            key={id}
            className="w-full bg-white text-black p-4 border border-gray-300  z-50
            rounded-lg group overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="w-full h-[250px] relative">
                <Image
                  className="w-full h-full object-cover scale-90 hover:scale-100
                transition-transform duration-300"
                  width={200}
                  height={200}
                  src={image}
                  alt="productImg"
                />
                <div
                  className="w-12 h-12 absolute bottom-20 right-0 border-[1px] 
                border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0
                transition-transform duration-300"
                >
                  <span
                    className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center 
                    text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300
                    "
                  >
                    <HiShoppingCart />
                  </span>
                  <span
                    className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center 
                    text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300
                    "
                    onClick={() =>
                      dispatch(
                        addToFavorite({
                          id: id,
                          title: title,
                          price: price,
                          category: category,
                          image: image,
                          quantity: 1,
                        })
                      )
                    }
                  >
                    <FaHeart />
                  </span>
                </div>
              </div>
              <hr />
              <div className="px-4 py-3 flex flex-col gap-1">
                <p className="text-xs text-gray-500 tracking-wide">
                  {category}
                </p>
                <p className="text-base font-medium">{title}</p>
                <p className="flex items-center">
                  <span className="text-amazon_blue font-bold">
                    <FormattedPrice amount={price * 10} />
                  </span>
                </p>
                <p className="text-xs text-gray-600 text-justify">
                  {description.substring(0, 200)}
                </p>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: id,
                    title: title,
                    price: price,
                    category: category,
                    image: image,
                    quantity: 1,
                  })
                )
              }
              className="h-10 font-medium bg-amazon_blue text-white round-md hover:bg-amazon_yellow 
                    hover:text-black duration-300 mt-2"
            >
              Add to cart
            </button>
          </div>
        ))}
      {isFetching && (
        <div className="flex items-center justify-center">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperStyle={{}}
            wrapperClass="color-ring-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      )}
    </div>
  );
};

export default Product;
