import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-entry").forEach((entry) => {
      gsap.from(entry, {
        xPercent: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: entry,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Experience"
          sub="💼 My Career Overview"
        />

        <div className="flex items-center justify-center">
          <div className="mt-32  w-[80%] relative">
            <div className="relative z-50 space-y-20">
              {expCards.map((card, index) => (
                <div
                  key={index}
                  className="flex items-start gap-8 timeline-entry"
                >
                  {/* Timeline Line (moved left) */}
                  <div className="relative flex flex-col items-center">
                    <div className="w-1 bg-white h-full timeline" />
                    <div className="w-4 h-4 bg-white rounded-full absolute top-0" />
                  </div>

                  {/* Content */}
                  <div className="flex gap-5 items-start">
                    {/* Logo */}
                    <img
                      src={card.logoPath}
                      alt="logo"
                      className="w-12 h-12 object-contain"
                    />

                    {/* Text */}
                    <div>
                      <h1 className="font-semibold text-3xl">{card.title}</h1>
                      <p className="my-3 text-white-50">🗓️ {card.date}</p>
                      <p className="text-[#839CB5] italic mb-3">
                        Responsibilities
                      </p>
                      <ul className="list-disc ms-5 mt-2 flex flex-col gap-3 text-white-50">
                        {card.responsibilities.map((item, i) => (
                          <li key={i} className="text-lg">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
