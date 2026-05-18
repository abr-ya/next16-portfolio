export interface SectionConfig {
  id: string;
  label: string;
}

export const sections: SectionConfig[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "reviews", label: "Reviews" },
  { id: "projects", label: "Projects" },
  { id: "pricing-plans", label: "Pricing" },
  { id: "contact", label: "Contact" },
  { id: "questions", label: "FAQ" },
];
