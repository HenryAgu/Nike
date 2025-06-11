import Image from "next/image";
import ShoeImage from "../../../public/assets/images/Shoe.png";
import SemiCircleIcon from "../../../public/assets/icons/semi-circle.svg";
import ShoeTag from "../../../public/assets/icons/tag.svg";
import React from "react";




const Shoe = () => {
  return (
    <section className="flex">
      <div className="">
        <Image
          src={ShoeTag}
          alt="shoe-tag"
          className="absolute right-[25px] lg:right-5 z-100 top-[-50px] lg:top-[-100px] lg:w-[116px] lg:h-[116px] h-6.5 w-6.5"
        />
        <div className="absolute bottom-[-20px] lg:bottom-[-80px] right-5">
          <Image src={ShoeImage} alt="shoe" className="lg:h-[671px] lg:w-[711px] h-[180px] w-[450px]"/>
        </div>
        <Image src={SemiCircleIcon} alt="semi_circle" />
      </div>
    </section>
  );
};

export default Shoe;
