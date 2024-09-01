import React from "react";
import Background from "./Components/Background";
import Navber from "./Components/Navber";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import ServiceSection from "./Components/Services";
import LatestWorks from "./Components/LatestWorks";
import WorkExperiences from "./Components/WorkExperiences";

function App() {
  return (
    <>
      <div>
        <Navber />
        {/* <Background /> */}
        <Home />

        <div className="App bg-white  flex items-center justify-center">
          <AboutMe />
        </div>
        <ServiceSection />
        <LatestWorks />
        <WorkExperiences />
      </div>
    </>
  );
}

export default App;
