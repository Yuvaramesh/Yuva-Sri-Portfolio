// AchievementsSection.jsx
import React from "react";
import AchievementCard from "./AchievementCard";

const AchievementsSection = () => {
  return (
    <div className="px-4 py-8 bg-gray-900 text-white">
      <h2 className="text-4xl font-extrabold text-center mb-8">
        My Achievements
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        <AchievementCard
          image="/hack-odyssey.png"
          title="Hack Odyssey 2K25 – 1st Prize (₹15K)"
          theme="Quality Education & Lifelong Learning (SDG 4)"
          project="AI-Vita – An AI-powered learning companion using Deepseek-r1 LLM, RAG, and Stable Diffusion"
          date="March 13–14, 2025"
          venue="Kalasalingam Academy of Research and Education"
        />
        {/* You can add more cards similarly */}
      </div>
    </div>
  );
};

export default AchievementsSection;
