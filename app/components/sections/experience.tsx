"use client";

import Image from "next/image";
import { useRef } from "react";
import ArrowLeftSFillIcon from "remixicon-react/ArrowLeftSFillIcon";

export const Experience = () => {
  const date = new Date().getFullYear();

  const containerRef = useRef(null);

  const experienceData = [
    {
      title: "Software Engineer at XYZ Company",
      education: "Bachelor's Degree in Computer Science from ABC University",
      experience: [
        "Developed and maintained web applications using React and Node.js.",
        "Collaborated with cross-functional teams to design and implement new features.",
        "Optimized application performance, resulting in a 20% increase in speed.",
      ],
    },
  ];

  return (
    <section id="experience" className="h-screen relative py-20">
      {/* todo: Heading Experience & Education */}
      <Image
        src={"/education.png"}
        alt={"Experience Image"}
        width={400}
        height={400}
        className="absolute -top-4 right-0 z-0 opacity-70"
      />
      <div
        ref={containerRef}
        className="relative w-full h-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10"
      >
        {experienceData.map((data, i) => (
          <div
            key={`id-${i}`}
            className={`w-150 xl:w-120 sm:w-full px-12 sm:px-0 relative -left-[300p ${
              i % 2 === 0 ? "-left-75 xl:-left-60 lg:left-0" : "left-75 xl:left-60 lg:left-0"
            }`}
          >
            {/* todo: Animate it! */}
            <div className="relative flex flex-col gap-y-3 rounded-md border border-red-300 bg-white p-4 tracking-wide sm:text-sm dark:bg-zinc-700 transition-colors z-20">
              <h1 className="text-xl sm:text-lg font-light text-gray-700 dark:text-white">{data.title}</h1>
              <p className="text-gray-800 dark:text-gray-100">
                <span className="block font-light">Education:</span>
                <span className="block pl-2 font-extralight">{data.education}</span>
              </p>
              <div className="text-gray-800 dark:text-gray-200 transition-colors">
                <span className="font-light">Experience:</span>
                <ul className="pl-2">
                  {data.experience.map((exp, j) => (
                    <li key={j} className="my-1 font-extralight">
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>
              <span
                className={`absolute top-20 text-red-300 -translate-y-1/2 lg:hidden ${
                  i % 2 === 0 ? "left-full rotate-180" : "right-full"
                }`}
              >
                <ArrowLeftSFillIcon />
              </span>
            </div>
            <div
              className={`w-14 absolute top-20 border border-gray-300 rounded-full aspect-square grid place-items-center text-red-400 font-light -translate-y-1/2 z-10 bg-white ${
                i % 2 === 0 ? "left-full -translate-x-1/2 lg:left-1/2" : "right-full translate-x-1/2 lg:right-1/2"
              }`}
            >
              {date - experienceData.length + i + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
