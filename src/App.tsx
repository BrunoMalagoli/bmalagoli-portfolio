import "./App.css";
import AboutSection from "./components/AboutSection";
import Contact from "./components/Contact";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <Contact />
    </>
  );
}

export default App;
