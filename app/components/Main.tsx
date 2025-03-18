import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

export default function Main() {
  return (
    <main className="w-full">
      <div className="p-5 flex item-center justify-center w-full gradient-section" id="about">
        <About />
      </div>
      <div className="p-5 flex item-center justify-center w-full" id="skills">
        <Skills />
      </div>
      <div className="p-5 flex item-center justify-center w-full gradient-section" id="experiences">
        <Experience />
      </div>
      <div className="p-5 flex item-center justify-center w-full" id="education">
        <Education />
      </div>
    </main>
  );
}
