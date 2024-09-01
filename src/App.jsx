import React from "react";
import Background from "./Components/Background";
import Navber from "./Components/Navber";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import ServiceSection from "./Components/Services";
import Projects from "./Components/Projects";
import WorkExperiences from "./Components/WorkExperiences";
import ThemeToggle from "./Components/ThemeToggle";

function App() {
  return (
    <>
      <div>
        {/* <Background /> */}
        <div className=" bg-white dark:bg-gray-900 text-black dark:text-white">
          <Navber />
          <Home />
          <div className="App flex items-center justify-center">
            <AboutMe />
          </div>
          <ServiceSection />
          <Projects />
          <WorkExperiences />
        </div>
      </div>
    </>
  );
}

export default App;
