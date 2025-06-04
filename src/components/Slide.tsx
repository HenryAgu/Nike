import { MotionValue, useTransform, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

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
    </motion.div>
  );
};

const Phrase = ({ src }: { src: string | StaticImageData }) => {
  return (
    <div className="px-15 flex gap-x-25 items-center">
      <p className="text-[7.5vw] uppercase font-black">Just do it</p>
      <Image src={src} alt="" width={40} height={40} className="h-10 w-10" />
    </div>
  );
};

export default Slide;
