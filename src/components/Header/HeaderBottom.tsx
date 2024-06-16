import React from "react";
import { LuMenu } from "react-icons/lu";

const HeaderBottom = () => {
  return (
    <div
      className="w-full h-10 bg-amazon_light justify-between text-sm text-white px-4 flex
  items-center"
    >
      <p className="flex  items-center gap-1 px-2 cursor-pointer">
        <LuMenu />
        All
      </p>
      <p className="flex  items-center gap-1 px-2 cursor-pointer">
        Todays Deals
      </p>
      <p className="flex  items-center gap-1 px-2 cursor-pointer">
        Amazon MiniTV
      </p>
      <p className="flex  items-center gap-1 px-2 cursor-pointer">
        Best Sellers
      </p>
      <p className="flex  items-center gap-1 px-2 cursor-pointer">Mobiles</p>

      <p className="lg:inline-flex hidden  items-center gap-1 px-2 cursor-pointer">
        Electronics
      </p>
      <p className="flex  items-center gap-1 px-2 cursor-pointer">
        New Releases
      </p>

      <p className="flex  items-center gap-1 px-2 cursor-pointer">Fashion</p>
      <p className="lg:inline-flex hidden   items-center gap-1 px-2 cursor-pointer">
        Books
      </p>
      <p className="lg:inline-flex hidden items-center gap-1 px-2 cursor-pointer">
        Computers
      </p>
      <p className="lg:inline-flex hidden  items-center gap-1 px-2 cursor-pointer">
        Cars
      </p>
      <p className="flex  items-center gap-1 px-2 cursor-pointer">
        Customer Services
      </p>
      <p className="lg:inline items-center gap-1 px-2 cursor-pointer hidden ">
        Gift Ideas
      </p>

      <p className="flex  items-center gap-1 px-2 cursor-pointer">Sell</p>
      <p className="flex  items-center gap-1 px-2 cursor-pointer">
        Amazon Pay{" "}
      </p>
      <p
        className="flex items-center gap-1 h-8 px-2 border border-transparent
        hover:border-red-600 hover:text-red-500 text-amazon_yellow cursor-pointer duration-300"
      >
        SignOut
      </p>
    </div>
  );
};

export default HeaderBottom;
