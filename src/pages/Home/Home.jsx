import HeroSection from "../../components/HeroSection";
import SkillsSection from "../../components/SkillsSection";
import About from "../About";
import Contact from "../Contact";
import Projects from "../Projects";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <SkillsSection />
      <Projects />
      <Contact />
    </>
  );
};
export default Home;
