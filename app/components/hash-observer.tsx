"use client";

import { useEffect, useRef, type ReactNode } from "react";

type HashObserverProps = {
  children: ReactNode;
};

export const HashObserver = ({ children }: HashObserverProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

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
            window.location.hash = entry.target.id;
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
    <div className="w-full" ref={containerRef}>
      {children}
    </div>
  );
};
