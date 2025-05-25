import React, { useState } from "react";

const AchievementCard = ({ image, title, theme, project, date, venue }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      className="relative w-full flex flex-col justify-center items-center gap-3 cursor-pointer rounded-lg shadow-lg"
      onClick={() => setShowInfo(!showInfo)}
    >
      <img
        src="./cert/Hack3.jpg"
        alt="Achievement"
        className="w-[1000px] h-auto rounded-xl shadow-xl flex-shrink-0"
      />
      {/* Scroll container with full width and default scrollbar */}
      <div className="w overflow-x-auto flex justify-center gap-x-2">
        <div className="flex flex-col gap-2 items-center  min-w-max">
          <div className="inline-flex gap-4">
            <img
              src="./cert/Hack1.jpg"
              alt="Achievement"
              className="w-[500px] h-auto rounded-xl shadow-xl flex-shrink-0"
            />
          </div>
          <div className="inline-flex gap-4">
            <img
              src="./cert/Hack4.jpg"
              alt="Achievement"
              className="w-[500px] h-auto rounded-xl shadow-xl flex-shrink-0"
            />
          </div>
        </div>
        <img
          src="./cert/Gold.jpg"
          alt="Achievement"
          className="w-[500px] h-auto rounded-xl shadow-xl flex-shrink-0"
        />
      </div>

      {showInfo && (
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-4 transition-all duration-300 text-sm">
          <h3 className="text-xl font-bold mb-1">
            🏆 {title} 🏆 Hack Odyssey 2K24 – 1st Prize (₹50K)
          </h3>
          <p>
            <strong>Theme:</strong> Equal Education and Quality Resources{" "}
            {theme}
          </p>
          <p>
            <strong>Project:</strong> AICademy – An AI-powered assessment
            platform accessible to both students and teachers. {project}
          </p>
          <p className="text-sm mt-2">
            <strong>Date:</strong> March 26–27, 2024 {date}
          </p>
          <p className="text-sm">
            <strong>Venue:</strong> Kalasalingam Academy of Research and
            Education {venue}
          </p>
        </div>
      )}
    </div>
  );
};

export default AchievementCard;
