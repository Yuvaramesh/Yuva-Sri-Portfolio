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

  return (
<div
  className="rounded-3xl p-6 text-center bg-gradient-to-br z-50 from-purple-800 via-fuchsia-900 to-blue-900 text-white shadow-lg max-w-md mx-auto backdrop-blur-3xl border border-purple-500/20 hover:shadow-purple-500/10 hover:shadow-lg transition-all"
  style={{ boxShadow: "8px 9px 30px 7px rgba(120,51,172,0.55)" }}
>
      <h2 className="text-lg lg:text-xl font-semibold mb-4">
        Discover How I Add Value To Your Team
      </h2>
      <MagicButton
        title="View Resume"
        icon={<IoCopyOutline />}
        position="left"
        handleClick={handleView}
        otherClasses="w-full justify-center"
      />
    </div>
  );
};

export default ResumeCard;
