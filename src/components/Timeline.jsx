import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

// const data = [
//   {
//     title: "Graduation",
//     content: (
//       <>
//         <p className="text-neutral-600 text-2xl dark:text-neutral-200">
//           B.Tech Artificial Intelligence and Data Science Honors with
//           Specialization in Cognitive Analytics
//         </p>

//         <h2 className="text-lg text-neutral-500 dark:text-neutral-300 mt-10">
//           Year : 2021 - 2025
//         </h2>

//         <h1 className="text-lg text-neutral-500 dark:text-neutral-300 mt-3">
//           College : Kamaraj College Of Engineering And Technology
//         </h1>
//         <h5 className="text-lg text-neutral-500 dark:text-neutral-300 mt-3">
//           Location : Virudhunagar, Tamil Nadu, India.
//         </h5>
//       </>
//     ),
//   },
//   {
//     title: "HSC",
//     content: (
//       <>
//         <p className="text-neutral-600 text-2xl dark:text-neutral-200">
//           Specialized in Biology and Mathematics, building a strong foundation.
//         </p>
//         <h2 className="text-lg text-neutral-500 dark:text-neutral-300 mt-10">
//           Year : 2019 - 2021
//         </h2>
//         <h5 className="text-lg text-neutral-500 dark:text-neutral-300 mt-3">
//           School : K.C.A.D.C.G.Matric.Higher.Secondary.School
//         </h5>
//         <h5 className="text-lg text-neutral-500 dark:text-neutral-300 mt-3">
//           Location : Sattur , Virudhunagar District, Tamil Nadu, India.
//         </h5>
//       </>
//     ),
//   },
//   {
//     title: "SSLC",
//     content: (
//       <>
//         <p className="text-neutral-600 text-2xl dark:text-neutral-200">
//           Foundational education with distinction across all subjects including
//           Science, Mathematics, and English.
//         </p>
//         <h2 className="text-lg text-neutral-500 dark:text-neutral-300 mt-10">
//           Year : 2018 - 2019
//         </h2>
//         <h5 className="text-lg text-neutral-500 dark:text-neutral-300 mt-3">
//           School : K.C.A.D.C.G.Matric.Higher.Secondary.School
//         </h5>
//         <h5 className="text-lg text-neutral-500 dark:text-neutral-300 mt-3">
//           Location : Sattur , Virudhunagar District, Tamil Nadu, India.
//         </h5>
//       </>
//     ),
//   },
// ];

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 40%", "end 55%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      ref={containerRef}
      className=" w-full h-full flex items-center justify-center"
    >
      <div className="w-[80%] bg-transparent font-sans">
        <div ref={ref} className="relative max-w-7xl mx-auto">
          {data.map((item, index) => (
            <div key={index} className="flex justify-start pt-10 md:pt-16 ">
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-purple-500 border border-purple-300 dark:border-purple-700 p-2" />
                </div>
                <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl font-bold text-purple-500 dark:text-purple-400">
                  {item.title}
                </h3>
              </div>

              <div className="relative pr-4  w-full">
                <h3 className="md:hidden block text-xl mb-4 text-left font-bold text-purple-500 dark:text-purple-400">
                  {item.title}
                </h3>
                {item.content}
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
