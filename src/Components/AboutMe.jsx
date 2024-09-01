import React from "react";

const AboutMe = () => {
  return (
    <div className="max-w-screen-md mx-auto p-6 md:p-10 lg:p-16 text-center shadow-lg rounded-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">About Me</h2>
      <p className="text-base md:text-lg leading-relaxed mb-6 ">
        As a passionate Full Stack Developer, I have honed my skills in both
        frontend and backend technologies, including HTML, CSS, JavaScript,
        React.js, Node.js, Express.js, and MongoDB. With a strong foundation in
        these core technologies, I am equipped to build dynamic and responsive
        web applications. I am proficient in using essential development tools
        like VS Code, Git & GitHub, Postman, and MongoDB Compass to streamline
        my workflow. Additionally, I have experience in UI design using Figma,
        which allows me to create visually appealing and user-friendly
        interfaces. My journey in full-stack development has been driven by a
        continuous desire to learn and improve, and I am always eager to take on
        new challenges and contribute to meaningful projects.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-600 transition duration-300">
          View Projects
        </button>
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-400 transition duration-300">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
