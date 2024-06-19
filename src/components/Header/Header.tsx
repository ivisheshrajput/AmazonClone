import Image from "next/image";
import React, { useEffect } from "react";
import logo from "../../../public/images/logo.png";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineSearch } from "react-icons/hi";
import { BiCaretDown } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { stateProps } from "../../../type";
import { useSession, signIn, signOut } from "next-auth/react";
import { addUser } from "@/store/nextSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { productData, favoriteData, userInfo } = useSelector(
    (state: stateProps) => state.next
  );
  const { data: session } = useSession();
  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    }
  }, [session]);

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
        {userInfo ? (
          <div
            className="px-2
           cursor-pointer h-[70%] flex items-center"
          >
            <img
              src={userInfo.image}
              alt="user image"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="text-xs text-gray-100 flex flex-col justify-between">
              <p className="text-white font-bold">{userInfo.name}</p>
              <p>{userInfo.email}</p>
            </div>
          </div>
        ) : (
          <>
            <div
              onClick={() => signIn()}
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
          </>
        )}

        {/* Favorites */}
        <div
          className="text-xs text-gray-100 flex flex-col justify-center px-2
           cursor-pointer h-[70%] relative"
        >
          <p>Marked</p>
          <p className="text-white font-bold">& Favorites</p>
          {favoriteData.length > 0 && (
            <span className="absolute right-2 top-2 w-4 h-4  flex items-center justify-center text-amazon_yellow  ">
              {favoriteData.length}
            </span>
          )}
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
              {productData ? productData.length : 0}
            </div>
            <p className="text-xs text-white font-bold  -mt-2">Cart</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
