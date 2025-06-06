import React from "react";
import localFont from "next/font/local";
import Image from "next/image";
import FeaturedImage1 from "../../../public/assets/images/featured-1.png";
import FeaturedImage2 from "../../../public/assets/images/featured-2.png";
import FeaturedImage3 from "../../../public/assets/images/featured-3.png";
import FeaturedImage4 from "../../../public/assets/images/featured-4.png";

const TacticSansBold = localFont({
  src: "../../app/font/TacticSans-Bld.ttf",
});

const featuredImages = [
  FeaturedImage1,
  FeaturedImage2,
  FeaturedImage3,
  FeaturedImage4,
];

const Featured = () => {
  return (
    <section className="bg-brand-purple-100 p-20 pt-10">
      <div className="flex flex-col items-center">
        <p
          className={`${TacticSansBold.className} font-normal text-[56px] text-black`}
        >
          Featured
        </p>
        <p className="text-[#6C6C6C] text-lg font-normal">
          There are newest style of the season.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-x-5 mt-10">
        {featuredImages.map((image,index) => (
          <div className="rounded-lg overflow-hidden" key={index}>
            <Image
              src={image}
              alt="featured-image"
              className="w-full h-full transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
