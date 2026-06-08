import HeroSection from "../../components/HeroSection";
import SkillsSection from "../../components/SkillsSection";
import About from "../About";
import Contact from "../Contact";
import Projects from "../Projects";

import { SectionWave } from "../../assets/Icons";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SectionWave className="about-wave" />
      <About />
      <SectionWave className="skills-wave" />
      <SkillsSection />
      <SectionWave className="projects-wave" />
      <Projects />
      <SectionWave className="contact-wave" />
      <Contact />
    </>
  );
};
export default Home;
