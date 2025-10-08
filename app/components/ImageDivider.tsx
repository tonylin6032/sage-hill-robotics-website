"use client";
import { motion } from "framer-motion";

type Props = {
  images: string[];
  height?: number;
  gap?: number;
  duration?: number;
  reverse?: boolean;
  brightness?: number;
};

export default function ImageDivider({
  images,
  height = 220,
  gap = 12,
  duration = 18,
  reverse = false,
  brightness = 0.95,
}: Props) {
  const travel = reverse ? ["-50%", "0%"] : ["0%", "-50%"];

  return (
    <div
      className="relative w-full overflow-hidden mb-12"
      style={{ height }}
    >
      {/* subtle backdrop */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/20" />
      
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/40 to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/40 to-transparent z-20" />

      <motion.div
        className="absolute top-0 left-0 flex h-full"
        style={{ gap }}
        animate={{ x: travel }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Strip images={images} gap={gap} brightness={brightness} />
        <Strip images={images} gap={gap} brightness={brightness} />
      </motion.div>
    </div>
  );
}

function Strip({
  images,
  gap,
  brightness,
}: {
  images: string[];
  gap: number;
  brightness: number;
}) {
  return (
    <div className="flex h-full" style={{ gap }}>
      {images.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="relative h-full aspect-[16/9] overflow-hidden"
        >
          {/* background image */}
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url(${src})`,
              filter: `brightness(${brightness})`,
              transform: "scale(1.02)",
            }}
          />
          
          {/* black overlay */}
          <div className="absolute inset-0 bg-black/50 z-10" />

          {/* optional divider line */}
          <div className="absolute inset-y-0 right-0 w-px bg-white/15 z-20" />
        </div>
      ))}
    </div>
  );
}
