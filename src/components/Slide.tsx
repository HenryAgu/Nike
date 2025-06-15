import { MotionValue, useTransform, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import localFont from "next/font/local";

interface slideProps {
  src: string | StaticImageData;
  left: string;
  direction: "left" | "right";
  progress: MotionValue<number>;
  speedFactor?: number;
}

const Slide = ({
  src,
  left,
  direction,
  progress,
  speedFactor = 1,
}: slideProps) => {
  const dir = direction == "left" ? -1 : 1;
  const translateX = useTransform(
    progress,
    [0, 1],
    [150 * dir * speedFactor, -250 * dir * speedFactor]
  );
  return (
    <motion.div
      style={{ left: left, x: translateX }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
            <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
            <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
            <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
    </motion.div>
  );
};

// Fonts
const TacticSansBlack = localFont({
  src: "../app/font/TacticSans-Blk.ttf",
});

const Phrase = ({ src }: { src: string | StaticImageData }) => {
  return (
    <div className="px-2 lg:px-4 py-1 lg:py-2.5 flex gap-x-4 lg:gap-x-8 items-center bg-[#E5F33C]">
      <p
        className={`${TacticSansBlack.className} lg:text-[40px] md:text-3xl text-xl uppercase font-normal`}
      >
        Just do it
      </p>
      <Image src={src} alt="" width={40} height={40} className="lg:h-10 lg:w-10 md:h-5 md:w-5 w-3 h-3 object-contain flex shrink-0" />
    </div>
  );
};

export default Slide;
