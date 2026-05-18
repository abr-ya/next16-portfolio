"use client";

import { sections, SectionConfig } from "@/app/_data/sectionsConfig";

interface SectionNavProps {
  activeSection: string;
}

export const SectionNav = ({ activeSection }: SectionNavProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:block" aria-label="Section navigation">
      <ul className="flex flex-col gap-4">
        {sections.map((section: SectionConfig) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className="group relative flex items-center justify-center cursor-pointer"
              aria-label={`Navigate to ${section.label}`}
              aria-current={activeSection === section.id ? "true" : "false"}
            >
              <span
                className={`block w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-red-400 border-red-400 scale-125"
                    : "bg-transparent border-red-300 hover:border-red-400 hover:scale-110"
                }`}
              />
              <span className="absolute right-6 px-3 py-1 bg-red-400 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {section.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
