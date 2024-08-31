import React from "react";
import Background from "./Components/Background";
import Navber from "./Components/Navber";
import Home from "./Components/Home";
import AboutMe from "./Components/AboutMe";
import ServiceSection from "./Components/Services";

function App() {
  return (
    <>
      <div>
        <Navber />
        {/* <Background /> */}
        <Home />

        <div className="App bg-white min-h-screen flex items-center justify-center">
          <AboutMe />
        </div>
        <ServiceSection />
      </div>
    </>
  );
}

export default App;
