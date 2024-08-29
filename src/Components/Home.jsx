import React from "react";

function Home() {
  return (
    <>
      {/* Home Left Part*/}
      <div className="h-3/5 w-1/2 px-20 bg-green-400 ">
        <h4 className="font-itim font-normal text-base mt-1">Hello</h4>
        <h3 className="font-caveat text-2xl mt-1">I'am Vijay Singh Kadela</h3>
        <h3 className="font-itim text-xl mt-1">Freelance Web</h3>
        <h2 className="font-normal font-mono text-2xl mt-1">
          Full Stack Developer
        </h2>
        <div className="bg-orange-400 w-32 h-8 items-center justify-center flex rounded-md font-semibold font-mono mt-5">
          <a href="">Hire Me</a>
        </div>
      </div>
      {/* Home Right Part*/}
      <div className="main-img">
    <img src="../assets/Images/main-img.jpeg" alt="" />
      </div>
    </>
  );
}

export default Home;
