import "../App.css";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Experience from "./Experience";
import Education from "./Resume";

export default function Display() {
  return (
    <div className="lg:pl-[25%]    w-screen back text-white  ">
      <Home />
      <About />
      <Experience/>
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}
