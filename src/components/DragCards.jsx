import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-neutral-950">
      <h2 className="relative z-0 text-[13vw] font-black text-neutral-800 md:text-[130px]">
        ACHIEVEMENTS
      </h2>

      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="/cert/Hack1.jpg"
        alt="Example image"
        rotate="-12deg"
        top="35%"
        left="15%"
        className="w-72"
      />
      <Card
        containerRef={containerRef}
        src="/cert/Hack3.jpg"
        alt="Example image"
        rotate="20deg"
        top="52%"
        left="60%"
        className="w-80"
      />

      <Card
        containerRef={containerRef}
        src="/cert/qsek.jpg"
        alt="Example image"
        rotate="-3deg"
        top="55%"
        left="25%"
        className="w-56"
      />
      <Card
        containerRef={containerRef}
        src="/cert/Hack4.jpg"
        alt="Example image"
        rotate="-6deg"
        top="12%"
        left="35%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="/cert/Gold.jpg"
        alt="Example image"
        rotate="8deg"
        top="30%"
        left="37%"
        className="w-80"
      />
      <Card
        containerRef={containerRef}
        src="/cert/iit.jpg"
        alt="Example image"
        rotate="18deg"
        top="25%"
        left="65%"
        className="w-40 md:w-64"
      />
      <Card
        containerRef={containerRef}
        src="/cert/iit2.jpg"
        alt="Example image"
        rotate="-9deg"
        top="10%"
        left="23%"
        className="w-56"
      />
      <Card
        containerRef={containerRef}
        src="/cert/mepco1.jpg"
        alt="Example image"
        rotate="9deg"
        top="14%"
        left="57%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="/cert/iit3.jpg"
        alt="Example image"
        rotate="19deg"
        top="14%"
        left="68%"
        className="w-24 md:w-48"
      />
    </div>
  );
};

const Card = ({ containerRef, src, alt, top, left, rotate, className }) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      let zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      // Uncomment below and remove dragElastic to remove movement after release
      //   dragMomentum={false}
      dragElastic={0.65}
    />
  );
};
