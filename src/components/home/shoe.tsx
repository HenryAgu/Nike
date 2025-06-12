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
          className="absolute right-[25px] lg:right-3 z-100 top-[-20px] lg:top-[-40px] xl:top-[-50px] lg:w-[100px] lg:h-[100px] h-6.5 w-6.5"
        />
        <div className="absolute bottom-[-20px] lg:bottom-[-50px] right-5">
          <Image src={ShoeImage} alt="shoe" className="lg:h-[400px] lg:w-[711px] xl:h-[500px] h-[150px] w-[450px]"/>
        </div>
        <Image src={SemiCircleIcon} alt="semi_circle" />
      </div>
    </section>
  );
};

export default Shoe;
