import React from "react";
import localFont from "next/font/local";
import Shoe from "./shoe";
import CurvedBlackArrow from "../../../public/assets/icons/curved-black-arrow.svg";
import Image from "next/image";
import Link from "next/link";

const TacticSansMed = localFont({
  src: "../../app/font/TacticSans-Med.ttf",
});

const TacticSansBold = localFont({
  src: "../../app/font/TacticSans-Bld.ttf",
});

const HomeHero = () => {
  return (
    <section className="border-2 border-black pt-10 h-[884px] bg-brand-gold-100 relative  mx-11 mt-7">
      <div className="flex flex-col items-center text-center gap-y-5">
        <p className="tracking-[12%] uppercase font-medium text-5xl text-brand-brown-100">
          The ALL NEW
        </p>
        <h1
          className={`${TacticSansBold.className} text-[105px] uppercase font-black leading-32 tracking-[2%] text-brand-gold-150 text-shadow-lg text-stroke`}
        >
          NIKE Air Force 1 <br /> West Indies
        </h1>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <Shoe />
      </div>
      <div className="flex items-center w-fit absolute top-120 left-30 gap-x-15">
        <div className="flex flex-col gap-y-2.5 max-w-full">
          <p
            className={`${TacticSansMed.className} text-2xl leading-10 font-normal text-brand-gray-200 line-through`}
          >
            $199.00
          </p>
          <h4 className={`${TacticSansBold.className} text-brand-gold-250 leading-10 font-normal text-[38px]`}>
            $129.99 Only
          </h4>
          <div className="mt-8 flex items-center gap-x-5">
            <Link href="" className="bg-brand-gold-250 py-3.5 px-5 text-white font-normal text-lg">Add to bag +</Link>
            <Link href="" className="text-sm font-normal text-brand-dark-100">View More</Link>
          </div>
        </div>
        <Image src={CurvedBlackArrow} alt="arrow" />
      </div>
    </section>
  );
};

export default HomeHero;
