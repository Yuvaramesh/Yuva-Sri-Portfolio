"use client";

import React from "react";
import { Timeline } from "../components/Timeline";
import { FaGraduationCap, FaSchool, FaChild } from "react-icons/fa";
import { GiSchoolBag } from "react-icons/gi";

const Education = () => {
  const educationData = [
    {
      title: "2021 - 2025",
      content: (
        <div
          section="education"
          className="p-4 rounded-xl border border-purple-500/20 bg-gradient-to-b from-black/10 to-black/5 dark:from-white/5 dark:to-white/10 hover:shadow-purple-500/10 hover:shadow-lg transition-all"
        >
          <div className="flex items-start gap-3">
            <FaGraduationCap className="text-purple-500 text-xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white">
                Kamaraj College of Engineering & Technology
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mt-2">
                Bachelor&apos;s Degree in Artificial Intelligence & Data Science
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2009 - 2021",
      content: (
        <div className="p-4 rounded-xl border border-purple-500/20 bg-gradient-to-b from-black/10 to-black/5 dark:from-white/5 dark:to-white/10 hover:shadow-purple-500/10 hover:shadow-lg transition-all">
          <div className="flex items-start gap-3">
            <FaSchool className="text-purple-500 text-xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white">
                K.C.A.D C.G.Matric Hr Sec School
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mt-2">
                1st to 12th Standard
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2006 - 2009",
      content: (
        <div className="p-4 rounded-xl border border-purple-500/20 bg-gradient-to-b from-black/10 to-black/5 dark:from-white/5 dark:to-white/10 hover:shadow-purple-500/10 hover:shadow-lg transition-all">
          <div className="flex items-start gap-3">
            <GiSchoolBag className="text-purple-500 text-xl mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white">
                Bharath Nursery & Primary School
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mt-2">
                PreKG - UKG
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="education" className="w-full py-20">
      <h1 className="heading text-center mb-10 text-4xl md:text-5xl font-bold">
        <span className="text-purple">Education Details</span>
      </h1>
      <div className="mt-10">
        <Timeline data={educationData} />
      </div>
    </section>
  );
};

export default Education;
