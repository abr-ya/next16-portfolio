"use client";

import { useEffect, useRef } from "react";
import { About, Contact, Experience, Hero, PricingPlans, Projects, Questions, Reviews, Skills } from "./components";

const Home = () => {
  const compsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting;
          if (intersecting) {
            const currentSection = entry.target.id;
            console.log(currentSection);
            window.location.hash = currentSection;
          }
        });
      },
      { threshold: 0.3 },
    );

    const compsArr = Array.from(compsRef.current!.children);
    compsArr.forEach((comp) => {
      observer.observe(comp);
    });
  }, []);

  return (
    <div className="w-min" ref={compsRef}>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Reviews />
      <Projects />
      <PricingPlans />
      <Contact />
      <Questions />
    </div>
  );
};

export default Home;
