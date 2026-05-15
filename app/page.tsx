import {
  About,
  Contact,
  Experience,
  HashObserver,
  Hero,
  PricingPlans,
  Projects,
  Questions,
  Reviews,
  Skills,
} from "./components";

const HomePage = () => {
  return (
    <HashObserver>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Reviews />
      <Projects />
      <PricingPlans />
      <Contact />
      <Questions />
    </HashObserver>
  );
};

export default HomePage;
