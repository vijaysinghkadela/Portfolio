import React from "react";
import Contact from "./Contact";

function WorkExperiences() {
  const experiences = [
    {
      id: 1,
      title: "Javascript / React JS",
      duration: "Oct 2023 - Present",
      color: "bg-blue-400",
    },
    {
      id: 2,
      title: "Node JS / Express JS",
      duration: "July 2024 - Present",
      color: "bg-purple-400",
    },
    {
      id: 3,
      title: "MongoDB",
      duration: "July 2024 - Present",
      color: "bg-green-400",
    },
  ];

  return (
    <div className="App">
      {/* Heading */}
      <div className="text-center my-8">
        <h1 className="text-2xl md:text-2xl font-bold">Works Experiences</h1>
      </div>

      {/* Experience Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className={`${experience.color} text-white p-4 rounded-lg shadow-lg`}
          >
            <p className="font-bold">{experience.duration}</p>
            <h3 className="text-xl mt-2">{experience.title}</h3>
          </div>
        ))}
      </div>
      <Contact />

      {/* Footer */}
      <div className="bg-orange-400 text-center p-8 mt-8">
        <p className="text-white text-lg">Have any Projects in mind?</p>
        <button className="mt-4 px-4 py-2 bg-white text-black font-bold rounded">
          Hire Me
        </button>
      </div>

      <div className="mt-4 flex justify-center space-x-4 sm:w-screen sm:flex sm:justify-center sm:space-x-4 md:w-screen lg:w-screen lg:flex lg:justify-center lg:space-x-4 md:flex md:justify-center md:space-x-4 ">
        {/* Icons here */}
        <div className=" px-2 py-1 rounded-md text-white font-semibold hover:bg-orange-500 hover:cursor-pointer">
          Home
        </div>
        <div className=" px-2 py-1 rounded-md text-white font-semibold hover:bg-orange-500 hover:cursor-pointer">
          About Me
        </div>
        <div className=" px-2 py-1 rounded-md text-white font-semibold hover:bg-orange-500 hover:cursor-pointer">
          Services
        </div>
        <div className=" px-2 py-1 rounded-md text-white font-semibold hover:bg-orange-500 hover:cursor-pointer">
          Projects
        </div>
        <div className="px-2 py-1 rounded-md text-white font-semibold hover:bg-orange-500 hover:cursor-pointer">
          Works
        </div>
      </div>
      <p className="mt-4 text-black dark:text-white text-sm flex justify-center">
        ©2024 Copyright by VijaySingh
      </p>
    </div>
  );
}

export default WorkExperiences;
