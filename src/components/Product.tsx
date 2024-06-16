import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { ColorRing } from "react-loader-spinner";

interface ProductAll {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductProps {
  products: ProductAll[];
}

const Product = ({ products }: ProductProps) => {
  //Infinite Scroll
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
    }, 3000); // Simulated delay of 2 seconds
  }, [isFetching]);

  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {products
        .slice(0, visibleProducts)
        .map(({ id, title, price, description, category, image }) => (
          <div
            key={id}
            className="w-full bg-white text-black p-4 border border-gray-300
            rounded-lg group overflow-hidden"
          >
            <div className="w-full h-[260px] relative">
              <Image
                className="w-full h-full object-cover scale-90 hover:scale-100
                transition-transform duration-300"
                width={300}
                height={300}
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
                >
                  <FaHeart />
                </span>
              </div>
            </div>
            <hr />
            <div className="px-4 py-3 flex flex-col gap-1">
              <p className="text-xs text-gray-500 tracking-wide">{category}</p>
              <p className="text-base font-medium">{title}</p>
              <p className="flex items-center">
                <span className="text-amazon_blue font-bold">
                  amount={price * 10}
                </span>
              </p>
              <p className="text-xs text-gray-600 text-justify">
                {description.substring(0, 200)}
              </p>
              <button
                className="h-10 font-medium bg-amazon_blue text-white round-md hover:bg-amazon_yellow 
                    hover:text-black duration-300 mt-2"
              >
                Add to cart
              </button>
            </div>
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
