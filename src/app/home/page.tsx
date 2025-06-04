"use client";
import Slide from "@/components/Slide";
import Star from "../../../public/assets/star.svg";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useScroll } from "framer-motion";

export default function Home() {
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
    <main className="overflow-x-hidden">
      <div className="h-[80vh]"/>
      <div className="rotate-10 bg-white border border-x-0 overflow-hidden">
        <Slide
          src={Star}
          direction={"left"}
          left={"-100%"}
          progress={scrollYProgress}
          speedFactor={5}
        />
      </div>
      <div className="-rotate-6 relative top-[-150px] bg-white border border-x-0 overflow-hidden">
        <Slide
          src={Star}
          direction={"right"}
          left={"-100%"}
          progress={scrollYProgress}
          speedFactor={5}
        />
      </div>
      <div className="h-[80vh]"/>
    </main>
  );
}
