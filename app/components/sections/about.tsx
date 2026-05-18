"use client";

import Image from "next/image";
import { aboutData } from "@/app/_data/aboutData";
import { Achievement } from "../blocks/about/achievement";

export const About = () => {
  return (
    <section id="about" className="h-screen">
      <div className="w-full flex items-center justify-between md:justify-center">
        <Image src={"/about.png"} alt="About Image" width={400} height={400} className="w-75 lg:w-[200px]" />
      </div>
      <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
        {aboutData.map((item, i) => (
          <Achievement key={i} title={item.title} amount={item.amount}>
            {item.icon}
          </Achievement>
        ))}
      </div>
    </section>
  );
};
