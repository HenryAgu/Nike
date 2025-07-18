import Link from "next/link";
import React from "react";
import Logo from "../../../public/assets/icons/Logo.svg";
import SearchIcon from "../../../public/assets/icons/search.svg";
import HeartIcon from "../../../public/assets/icons/heart.svg";
import ShopIcon from "../../../public/assets/icons/shop.svg";
import Image from "next/image";

interface NavbarLink {
  title: string;
  path: string;
}

const navMenu: NavbarLink[] = [
  {
    title: "New Releases",
    path: "",
  },
  {
    title: "Men",
    path: "",
  },
  {
    title: "Woman",
    path: "",
  },
  {
    title: "Kids",
    path: "",
  },
  {
    title: "Sale",
    path: "",
  },
];

const Navbar = () => {
  return (
    <nav className="">
      <div className="bg-brand-gold-200 py-2 lg:py-4 px-4 lg:px-10 flex items-end justify-end gap-x-3.5 lg:gap-x-5 font-sansation">
        <Link href="" className="text-xs text-black font-normal">
          Sign In
        </Link>
        <Link href="" className="text-xs text-black font-normal">
          Join Us
        </Link>
        <Link href="" className="text-xs text-black font-normal">
          Help
        </Link>
      </div>
      <div className="flex max-h-[65px]">
        <div className="basis-[10%] lg:basis-[10%] text-center border border-x-0  border-brand-gray-100 flex items-center justify-center">
          <Image src={Logo} alt="Logo" className=" mx-auto" />
        </div>
        <div className="basis-[65%] lg:basis-[80%] text-center border  border-brand-gray-100 flex items-center py-2.5 justify-center gap-x-2.5 lg:gap-x-5">
          {navMenu.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              className="text-[10px] lg:text-base text-black font-normal font-sansation transition duration-200 ease-in-out hover:underline"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="basis-[25%] lg:basis-[10%] border border-x-0 flex justify-between border-brand-gray-100">
          <button className="w-full flex items-center justify-center cursor-pointer">
            <span>
              <Image src={SearchIcon} alt="icon" className="lg:h-6 lg:w-6 h-3 w-3 aspect-square"/>
            </span>
          </button>
          <button className="border border-y-0 border-x-brand-gray-100 cursor-pointer w-full flex items-center justify-center">
            <span>
              <Image src={HeartIcon} alt="icon" className="lg:h-6 lg:w-6 h-3 w-3 aspect-square"/>
            </span>
          </button>
          <button className="w-full flex items-center justify-center cursor-pointer">
            <span>
              <Image src={ShopIcon} alt="icon" className="lg:h-6 lg:w-6 h-3 w-3 aspect-square"/>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
