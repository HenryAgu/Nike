import Image from "next/image";
import RaysIcon from "../../../public/assets/icons/rays.svg";
import latestShoe from "../../../public/assets/images/latest.png";
import localFont from "next/font/local";
import React from "react";

// Font
const TacticSansMed = localFont({
  src: "../../app/font/TacticSans-Med.ttf",
});

const TacticSansBold = localFont({
  src: "../../app/font/TacticSans-Bld.ttf",
});

interface LatestKicks {
  name: string;
  image: string;
}

const latestKicks: LatestKicks[] = [
  {
    name: "Air Jordan retro SB",
    image: "/assets/images/latest-1.png",
  },
  {
    name: "Jordan Retro MN",
    image: "/assets/images/latest-2.png",
  },
  {
    name: "Air Alpha Low PB",
    image: "/assets/images/latest-3.png",
  },
  {
    name: "Air Alpha Low R8",
    image: "/assets/images/latest-4.png",
  },
];

const LatestCollection = () => {
  return (
    <section className="py-20 px-40">
      <div className="flex items-start justify-center">
        <Image src={RaysIcon} alt="rays" className="relative bottom-3" />
        <h3
          className={`${TacticSansBold.className} text-[40px] font-normal text-white text-center uppercase text-stroke`}
        >
          FROM THE latest collection of kicks
        </h3>
      </div>
      <div className="bg-[#FF00000D] my-16 h-fit pr-20 rounded-tl-[231px] rounded-bl-[231px] rounded-tr-[98px] rounded-br-[98px] flex justify-between items-stretch">
        <div className="relative w-[429px]">
          <Image src={latestShoe} alt="latest-shoe" className="absolute" />
          <div className="bg-[#FF0000] h-full w-full rounded-[231px]"></div>
        </div>
        <div className="flex flex-col items-end text-right gap-y-5  py-12">
          <p
            className={`${TacticSansBold.className} font-normal text-5xl text-black leading-14`}
          >
            AIR JORDAN <br /> Retro 7
          </p>
          <div className="flex items-center gap-x-3.5">
            <span className="bg-brand-gray-250 text-brand-gray-300 px-2 text-[22px] font-normal">
              Men’s Shoes
            </span>
            <span className="text-[22px] text-black font-normal">2 Colors</span>
          </div>
          <p
            className={`${TacticSansBold.className} text-[#4B4B4B] text-[38px] font-normal`}
          >
            MRP: $229.99
          </p>
          <button
            type="button"
            className="bg-[#FE0101] text-white py-2 px-3.5 text-lg font-normal cursor-pointer"
          >
            Add to bag +
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-10">
        {latestKicks.map((item) => (
          <div className="flex flex-col gap-y-2" key={item.name}>
            <div className="">
              <Image
                src={item.image}
                alt={item.name}
                width={247}
                height={247}
                className="h-full w-full aspect-square"
              />
            </div>
            <div
              className={`${TacticSansMed.className} border-2 border-black text-center p-2 text-black text-sm font-normal`}
            >
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestCollection;
