import React from 'react';

function WorkExperiences() {
  const experiences = [
    { id: 1, title: "Javascript / React JS", duration: "Oct 2023 - Jun 2024", color: "bg-orange-400" },
    { id: 2, title: "Node JS / Express JS", duration: "July 2024 - Pengrent", color: "bg-purple-400" },
    { id: 3, title: "MongoDB", duration: "July 2024 - Pengrent", color: "bg-green-400" },
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

      {/* Footer */}
      <div className="bg-orange-500 text-center p-4 mt-8">
        <p className="text-white text-lg">Have any Projects in mind?</p>
        <button className="mt-4 px-4 py-2 bg-white text-black font-bold rounded">Hire Me</button>
        <div className="mt-4 flex justify-center space-x-4">
          {/* Icons here */}
          <div>Home</div>
          <div>About Me</div>
          <div>Services</div>
          <div>Projects</div>
          <div>Works</div>
        </div>
        <p className="mt-4 text-white text-sm">©2024 Copyright by VijaySingh</p>
      </div>
    </div>
  );
}

export default WorkExperiences;
