import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import "./styles/sections.css";

export default function App() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}