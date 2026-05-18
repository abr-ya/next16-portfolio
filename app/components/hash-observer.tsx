"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { SectionNav } from "./navigation/section-nav";

type HashObserverProps = {
  children: ReactNode;
};

export const HashObserver = ({ children }: HashObserverProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const sections = Array.from(container.children);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            window.location.hash = sectionId;
            setActiveSection(sectionId);
          }
        });
      },
      { threshold: 0.3 },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <SectionNav activeSection={activeSection} />
      <div className="w-full snap-container" ref={containerRef}>
        {children}
      </div>
    </>
  );
};
