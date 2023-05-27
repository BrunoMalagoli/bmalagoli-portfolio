import "./App.css";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutSection />
      <EducationSection />
    </>
  );
}

export default App;
