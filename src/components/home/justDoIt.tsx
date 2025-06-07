import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import starsIcon from "../../../public/assets/icons/stars.svg";

interface Shop {
  path: string;
  title: string;
  image: string;
  color: string;
}

const shop: Shop[] = [
  {
    path: "/",
    title: "men",
    image: "/assets/images/shop.png",
    color: "#FF9900",
  },
  {
    path: "/",
    title: "women",
    image: "/assets/images/shop-2.png",
    color: "#FF00B8",
  },
  {
    path: "/",
    title: "kids",
    image: "/assets/images/shop-3.png",
    color: "#FFB800",
  },
];

// Fonts
const TacticSansBold = localFont({
  src: "../../app/font/TacticSans-Bld.ttf",
});

const JustDoIt = () => {
  return (
    <div
      className="p-30 h-fit bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/background.png')" }}
    >
      <div className="flex flex-col text-center">
        <p
          className={`${TacticSansBold.className} text-black font-normal text-[56px] tracking-[-4%]`}
        >
          Just do it
        </p>
        <span className="text-lg font-normal tracking-[-2%] text-brand-gray-150">
          Captures messages that stands for more than just sport.
        </span>
      </div>
      <Image src={starsIcon} alt="stars_icon" className="absolute right-80 z-50"/>
      <div className="grid grid-cols-3 gap-x-0.5 mt-14">
        {shop.map((item) => (
          <div className=" relative" key={item.title}>
            <Image
              src={item.image}
              alt={`${item.title} image`}
              width={407.9}
              height={407}
            />
            <div className="flex flex-wrap justify-center gap-6 absolute bottom-15 left-1/2 transform -translate-x-1/2">
              <Link className="relative group" href={item.path}>
                <span className="absolute top-0 right-0 mt-2 mr-2 h-full w-full  bg-white border-2 border-black transition-all duration-200 group-hover:mr-0 group-hover:mt-0"></span>
                <span className="absolute top-0 right-0 mt-1 mr-1 h-full w-full  bg-white border-2 border-black transition-all duration-200 group-hover:mr-0 group-hover:mt-0"></span>
                <span
                style={{backgroundColor: item.color}}
                  className={`fold-bold uppercase relative inline-block h-full w-full border-2 border-black px-5 py-2.5 text-lg ${TacticSansBold.className} font-normal text-white transition duration-100`}
                >
                  {`Shop ${item.title}`}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JustDoIt;
