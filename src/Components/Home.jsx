


import React from "react";

function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-auto md:h-96 w-full">
      {/* Home Right Part (Image) */}
      <div className="main-img w-full md:w-1/2 px-20 sm:w-full md:w-1/2 lg:w-1/2 order-1 md:order-2 mx-auto">
        <img src="../../public/Images/main_img.png" alt="" className="h-60 md:h-30 sm:h-30 object-cover" />
      </div>
      {/* Home Left Part */}
      <div className="h-auto md:h-3/5 w-full md:w-1/2 px-20 mx-20 order-2 md:order-1 mx-auto">
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
    </div>
  );
}

export default Home;
