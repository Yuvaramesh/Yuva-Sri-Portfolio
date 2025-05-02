"use client";

import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "../components/MagicButton"; // adjust the import path as needed

const ResumeCard = () => {
  const handleView = () => {
    window.open(
      "https://drive.google.com/file/d/1qZQm7rz3rV6coAxh945W6O9Nmc-BGAY7/view?usp=sharing",
      "_blank"
    );
  };

  const certificatesView = () => {
    window.open(
      "https://drive.google.com/file/d/1XAnf1jr9mVlw99DJzw5qgiZGww7FE5SJ/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div className="w-full flex flex-col items-center mt-12 space-y-6">
      {/* Image Centered Above */}
      <img
        src="./aigirl-removebg-preview.png"
        alt="Animated Girl"
        className="w-[220px] h-auto animate-pulse rounded-full border-2 border-dotted border-white"
      />

      {/* Card Below Image */}
      <div
        id="resume"
        className="rounded-3xl p-6 text-center bg-gradient-to-br z-50 from-purple-800 via-fuchsia-900 to-blue-900 text-white shadow-lg max-w-md mx-auto backdrop-blur-3xl border border-purple-500/20 hover:shadow-purple-500/10 hover:shadow-lg transition-all"
        style={{ boxShadow: "8px 9px 30px 17px rgba(120,51,172,0.55)" }}
      >
        <h2 className="text-lg lg:text-xl font-semibold mb-4">
          Discover How I Add Value To Your Team
        </h2>

        <div className="flex justify-center gap-4">
          <MagicButton
            title="View Resume"
            icon={<IoCopyOutline />}
            position="left"
            handleClick={handleView}
            otherClasses="w-full md:w-auto flex-1 justify-center"
          />
          <MagicButton
            title="Certificates"
            icon={<IoCopyOutline />}
            position="left"
            handleClick={certificatesView}
            otherClasses="w-full md:w-auto flex-1 justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
