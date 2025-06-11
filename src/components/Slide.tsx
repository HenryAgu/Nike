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
    </motion.div>
  );
};

// Fonts
const TacticSansBlack = localFont({
  src: "../app/font/TacticSans-Blk.ttf",
});

const Phrase = ({ src }: { src: string | StaticImageData }) => {
  return (
    <div className="px-4 py-2.5 flex gap-x-8 items-center bg-[#E5F33C]">
      <p
        className={`${TacticSansBlack.className} text-[40px] uppercase font-normal`}
      >
        Just do it
      </p>
      <Image src={src} alt="" width={40} height={40} className="h-10 w-10 object-contain flex shrink-0" />
    </div>
  );
};

export default Slide;
