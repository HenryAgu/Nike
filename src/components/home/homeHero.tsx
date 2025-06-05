import React from "react";
import localFont from "next/font/local";
import Shoe from "./shoe";

const TacticSansBold = localFont({
  src: "../../app/font/TacticSans-Bld.ttf",
});

const HomeHero = () => {
  return (
    <section className="border-2 border-black pt-10 h-[884px] bg-brand-gold-100 relative">
      <div className="flex flex-col items-center text-center gap-y-5">
        <p className="tracking-[12%] uppercase font-medium text-5xl text-brand-brown-100">
          The ALL NEW
        </p>
        <h1
          className={`${TacticSansBold.className} text-[105px] uppercase font-black leading-32 tracking-[2%] text-brand-gold-150 text-shadow-lg text-shadow-black`}
        >
          NIKE Air Force 1 <br /> West Indies
        </h1>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <Shoe />
      </div>
    </section>
  );
};

export default HomeHero;
