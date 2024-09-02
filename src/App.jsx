import React from "react";
import AboutMe from "./Components/AboutMe";
import Home from "./Components/Home";
import Navber from "./Components/Navber";
import Projects from "./Components/Projects";
import ServiceSection from "./Components/Services";
import WorkExperiences from "./Components/WorkExperiences";

function App() {
  return (
    <>
      <div>
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
