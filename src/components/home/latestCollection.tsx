import Image from "next/image";
import localFont from "next/font/local";
import React from "react";


// Font
const TacticSansMed = localFont({
  src: "../../app/font/TacticSans-Med.ttf",
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
      <div className="grid grid-cols-4 gap-x-10">
        {latestKicks.map((item) => (
          <div className="flex flex-col gap-y-2" key={item.name}>
            <div className="">
                <Image src={item.image} alt={item.name} width={247} height={247} className="h-full w-full aspect-square"/>
            </div>
            <div className={`${TacticSansMed.className} border-2 border-black text-center p-2 text-black text-sm font-normal`}>{item.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestCollection;
