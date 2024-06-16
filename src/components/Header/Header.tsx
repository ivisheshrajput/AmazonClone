import Image from "next/image";
import React from "react";
import logo from "../../Images/logo.png";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineSearch } from "react-icons/hi";
import { BiCaretDown } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 md:gap-3 px-4">
        {/* Logo */}
        <Link className="cursor-pointer " href={"/"}>
          <Image
            src={logo}
            alt="logo of amazon"
            className="w-28 object-cover"
          />
        </Link>
        {/* Location */}
        <div className="flex justify-center items-center space-x-2 cursor-pointer h-[70%]">
          <CiLocationOn size={20} />
          <div className="text-xs">
            <p>Delivery to</p>
            <p className="text-white font-bold uppercase">India</p>
          </div>
        </div>
        {/* Input */}
        <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative ">
          <input
            className="w-full h-full rounded-md px-2 placeholder:text-sm text-base focus-visible:border-amazon_yellow text-black border-[2px] border-transparent outline-none"
            type="text"
            placeholder="Search amazon products"
          />
          <span
            className="w-12 h-full bg-amazon_yellow text-black text-xl flex
                items-center justify-center absolute right-0 rounded-md rounded-br-md"
          >
            <HiOutlineSearch />
          </span>
        </div>
        {/* Sign In */}
        <div
          className="text-xs text-gray-100 flex flex-col justify-center px-2
           cursor-pointer h-[70%]"
        >
          <p>Hello SignIn</p>
          <p className="text-white font-bold flex items-center">
            Accounts & Lists
            <span>
              <BiCaretDown />
            </span>
          </p>
        </div>
        {/* Favorites */}
        <div
          className="text-xs text-gray-100 flex flex-col justify-center px-2
           cursor-pointer h-[70%]"
        >
          <p>Marked</p>
          <p className="text-white font-bold">& Favorites</p>
        </div>
        {/* cart */}
        <Link
          className="text-xs text-gray-100 flex items-center justify-center px-2
           cursor-pointer h-[70%] space-x-1"
          href={"/cart"}
        >
          <FiShoppingCart size={30} />
          <div>
            <div className=" text-amazon_yellow text-sm font-semibold mb-2">
              0
            </div>
            <p className="text-xs text-white font-bold  -mt-2">Cart</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
