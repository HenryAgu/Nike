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
          className="absolute right-5 z-100 top-[-100px]"
        />
        <div className="absolute bottom-[-80px] right-5">
          <Image src={ShoeImage} alt="shoe" />
        </div>
        <Image src={SemiCircleIcon} alt="semi_circle" />
      </div>
    </section>
  );
};

export default Shoe;
