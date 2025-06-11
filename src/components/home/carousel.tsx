"use client";
import Slide from "@/components/Slide";
import Star from "../../../public/assets/icons/star.svg";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useScroll } from "framer-motion";

const Carousel = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <main className="overflow-x-hidden py-20 relative z-50 mt-[-50px] mb-[-200px]">
      <div className="rotate-6 bg-white overflow-hidden">
        <Slide
          src={Star}
          direction={"left"}
          left={"-100%"}
          progress={scrollYProgress}
          speedFactor={5}
        />
      </div>
      <div className="-rotate-6 relative top-[-70px] bg-white overflow-hidden">
        <Slide
          src={Star}
          direction={"right"}
          left={"-100%"}
          progress={scrollYProgress}
          speedFactor={5}
        />
      </div>
    </main>
  );
};

export default Carousel;
