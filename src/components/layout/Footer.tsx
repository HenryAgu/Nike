import Image from "next/image";
import Link from "next/link";
import TwitterIcon from "../../../public/assets/icons/eva_twitter-fill.svg";
import FacebookIcon from "../../../public/assets/icons/eva_facebook-fill.svg";
import EmailIcon from "../../../public/assets/icons/eva_email-fill.svg";
import React from "react";

interface FooterLink {
  title: string;
  path: string;
}

const menuLinks: FooterLink[] = [
  {
    title: "find a store",
    path: "",
  },
  {
    title: "become a member",
    path: "",
  },
  {
    title: "sign up for email",
    path: "",
  },
  {
    title: "students discounts",
    path: "",
  },
  {
    title: "send us feedback",
    path: "",
  },
];

const helpDesk: FooterLink[] = [
  {
    title: "Order Status",
    path: "",
  },
  {
    title: "delivery",
    path: "",
  },
  {
    title: "returns",
    path: "",
  },
  {
    title: "payment options",
    path: "",
  },
  {
    title: "contact us",
    path: "",
  },
];

const aboutNike: FooterLink[] = [
  {
    title: "news",
    path: "",
  },
  {
    title: "careers",
    path: "",
  },
  {
    title: "investors",
    path: "",
  },
  {
    title: "sustainability",
    path: "",
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white lg:px-20 xl:px-24 py-18 font-poppins flex items-center justify-between">
      <div className="flex gap-x-14">
        <div className="flex flex-col gap-y-5">
          <p className="text-base font-semibold text-white tracking-[-2%]">
            MENU
          </p>
          <ul className="flex flex-col gap-y-3.5">
            {menuLinks.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.path}
                  className="uppercase text-sm font-normal text-white tracking-[-2%]"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-y-5">
          <p className="text-base font-semibold text-white tracking-[-2%]">
            HELPDESK
          </p>
          <ul className="flex flex-col gap-y-3.5">
            {helpDesk.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.path}
                  className="uppercase text-sm font-normal text-white tracking-[-2%]"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-y-5">
          <p className="text-base font-semibold text-white tracking-[-2%]">
            ABOUT NIKE
          </p>
          <ul className="flex flex-col gap-y-3.5">
            {aboutNike.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.path}
                  className="uppercase text-sm font-normal text-white tracking-[-2%]"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-end gap-y-5">
        <div className="text-right">
          <p className="font-normal text-sm text-white tracking-[-2%]">
            <span className="font-semibold">Primary Address</span> <br /> One
            Bowerman Drive <br /> Beaverton, OR 97005-6453 <br /> USA
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          <Link href="">
            <Image
              src={TwitterIcon}
              alt="twitter_icon"
              className="aspect-square"
            />
          </Link>{" "}
          <Link href="">
            <Image
              src={FacebookIcon}
              alt="twitter_icon"
              className="aspect-square"
            />
          </Link>{" "}
          <Link href="">
            <Image
              src={EmailIcon}
              alt="twitter_icon"
              className="aspect-square"
            />
          </Link>
        </div>
        <p className="text-sm font-normal text-white tracking-[-2%]">
          © 2022 Nike, Inc. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
