import React from "react";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import { FaGithub, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="w-full h-20 bg-amazon_light text-gray-400 flex items-center justify-center gap-4">
      <Image className="w-24" src={logo} alt="Logo" />
      <div className="text-center ">
        <p className="text-sm">All rights reserved </p>
        <p className="inline-flex gap-2 items-center">
          {" "}
          <a
            className="hover:text-white hover:underline decoration-[1px]
            cursor-pointer duration-250 text-sm"
            href="https://www.ivisheshrajput.com/"
            target="_blank"
          >
            @Vishesh Rajput
          </a>
          <a
            className="hover:text-white hover:underline decoration-[1px]
            cursor-pointer duration-250 text-sm"
            href="mailto:ivisheshrajput@gmail.com"
            target="_blank"
          >
            <IoIosMail size={20} />
          </a>
          <a
            className="hover:text-white hover:underline decoration-[1px]
            cursor-pointer duration-250 text-sm"
            href="https://github.com/ivisheshrajput"
            target="_blank"
          >
            {" "}
            <FaGithub size={16} />
          </a>
          <a
            className="hover:text-white hover:underline decoration-[1px]
            cursor-pointer duration-250 text-sm"
            href="tel:+919205025645"
            target="_blank"
          >
            <FaPhoneAlt size={16} />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
