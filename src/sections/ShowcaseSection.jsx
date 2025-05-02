import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const evaRef = useRef(null);
  const smartevaRef = useRef(null);
  const aitopiaRef = useRef(null);
  const llappRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [
      evaRef.current,
      smartevaRef.current,
      aitopiaRef.current,
      llappRef.current,
    ];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);
  return (
    <div id="work" ref={sectionRef} className="app-showcase px-4">
      <div className="w-full flex flex-col items-center">
        <div className="grid grid-cols-2 space-y-16 gap-x-10 max-7xl mx-auto w-[90%]">
          {/* Project 1 */}
          <div
            ref={evaRef}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <div className="image-wrapper w-[1000px]">
              <a
                href="https://github.com/Yuvaramesh/KinderGarten"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/48173.jpg"
                  alt="evaRef App"
                  className="w-full h-auto object-contain rounded-4xl cursor-pointer"
                  style={{
                    boxShadow: "-11px 15px 31px -5px rgba(255,255,255,0.75)",
                  }}
                />
              </a>
            </div>
            <div className="text-content px-4">
              <h2 className="text-2xl font-bold mb-4 text-white">
                EVA Handwriting using AI
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>
          <div
            ref={smartevaRef}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <div className="image-wrapper w-[1000px]">
              <a
                href="https://github.com/Yuvaramesh/AITopia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./AiTopia.jpg"
                  alt="evaRef App"
                  className="w-[295px] h-[255px] object-cover rounded-4xl cursor-pointer border-1 border-white"
                  style={{
                    boxShadow: "-9px 13px 31px -5px rgba(255,255,255,0.75)",
                  }}
                />
              </a>
            </div>
            <div className="text-content px-4">
              <h2 className="text-2xl font-bold mb-4 text-white">AITopia!</h2>
              <p className="text-white-50 md:text-xl">
                An app is useful for Kids to Professional, build using nextjs
                for fast, user-friendly experience.
              </p>
            </div>
          </div>

          {/* Project 2 */}
          <div
            ref={aitopiaRef}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <div className="image-wrapper w-[1000px]">
              <a
                href="https://github.com/Yuvaramesh/KinderGarten"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/56388.jpg"
                  alt="evaRef App"
                  className="w-full h-auto object-contain rounded-4xl cursor-pointer"
                  style={{
                    boxShadow: "-11px 15px 31px -5px rgba(255,255,255,0.75)",
                  }}
                />
              </a>
            </div>
            <div className="text-content px-4">
              <h2 className="text-2xl font-bold mb-4 text-white">SMART EVA!</h2>
              <p className="text-white-50 md:text-xl">
                An app built with Bootstrap, Streamlit for a fast, user-friendly
                experience.
              </p>
            </div>
          </div>

          <div
            ref={llappRef}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <div className="image-wrapper w-[1000px]">
              <a
                href="https://github.com/Yuvaramesh/Language-Learning-Chatbot"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/56388.jpg"
                  alt="evaRef App"
                  className="w-full h-auto object-contain rounded-4xl cursor-pointer"
                  style={{
                    boxShadow: "-11px 15px 31px -5px rgba(255,255,255,0.75)",
                  }}
                />
              </a>
            </div>
            <div className="text-content px-4">
              <h2 className="text-2xl font-bold mb-4 text-white">SMART EVA!</h2>
              <p className="text-white-50 md:text-xl">
                A language learning app where users interact through a chatbot
                to improve their language skills.
              </p>
            </div>
          </div>
        </div>

        {/* Button centered below the cards */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://github.com/Yuvaramesh/"
            className="relative inline-block px-6 py-2 text-white font-semibold group"
          >
            {/* Glowing Background Blur */}
            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-900 to-red-700 rounded-lg blur-lg opacity-70 group-hover:opacity-100 transition duration-300"></span>

            {/* Button Body */}
            <span className="relative z-10 flex items-center justify-center px-6 py-2 bg-zinc-900 rounded-lg overflow-hidden">
              <span className="relative z-10">Explore More Projects</span>

              {/* Animated Border */}
              <span className="absolute top-0 left-0 w-full h-full border border-white rounded-lg animate-border-draw pointer-events-none"></span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default AppShowcase;
