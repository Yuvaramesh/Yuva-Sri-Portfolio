import React, { useEffect, useState, useRef } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        scrollerRef.current.appendChild(item.cloneNode(true));
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const getSpeed = () => {
    const duration =
      speed === "fast" ? "20s" : speed === "normal" ? "250s" : "110s";
    containerRef.current?.style.setProperty("--animation-duration", duration);
  };

  return (
    <div
      ref={containerRef}
      className={`scroller relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap items-center ${
          start ? "animate-scroll" : ""
        } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
      >
        {items.map((item) => (
          <li key={item.id} className="w-[20vw] max-w-full flex-shrink-0">
            <div className="flex flex-col items-center">
              <div className="relative w-full h-64 rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="object-contain w-full h-full"
                  style={{ background: "transparent" }}
                />
              </div>
              <p className="mt-3 text-center text-sm text-white/80 max-w-[80%]">
                {item.caption}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
