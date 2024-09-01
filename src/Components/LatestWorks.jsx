import React, { useState } from 'react';
import firstProjectImg from "../../public/Images/task-docs-mini-app.png"
import secondProjectImg from "../../public/Images/ChessGameImg.png"
const projects = [
  {
    id: 1,
    image: firstProjectImg,
    title: 'Task Docs mini App',
    category: 'frontend',
    description: 'This is a frontend project Using React JS and Tailwind css, and Its work is pining the task like an TODO app.',
    link: 'https://quick-react-practice-task-docs-mini-app.vercel.app/',
  },
  {
    id: 2,
    image:secondProjectImg,
    title: 'Chess.com',
    category: 'backend',
    description: 'This is a backend project Using Node Js, Express Js, Chess JS, socket io, for Real-Time connection and Apply Chess properties.',
    link: 'https://chess-com-clone.onrender.com/',
  },
  {
    id: 3,
    title: 'Full-Stack Project',
    category: 'fullstack',
    description: 'This is a full-stack project description.',
    link: '#',
  },
  // Add more projects here
];

const LatestWorks = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Latest Works</h2>
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`${
            selectedCategory === 'all' ? 'text-orange-500' : 'text-gray-600'
          } font-semibold`}
          onClick={() => setSelectedCategory('all')}
        >
          All
        </button>
        <button
          className={`${
            selectedCategory === 'frontend' ? 'text-orange-500' : 'text-gray-600'
          } font-semibold`}
          onClick={() => setSelectedCategory('frontend')}
        >
          Frontend
        </button>
        <button
          className={`${
            selectedCategory === 'backend' ? 'text-orange-500' : 'text-gray-600'
          } font-semibold`}
          onClick={() => setSelectedCategory('backend')}
        >
          Backend
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="bg-black dark:bg-white text-white dark:text-black p-4 rounded-lg shadow-md"
          >
            <img src={project.image} className='rounded-md' alt="" />
            <h3 className="text-xl font-bold mb-2 mt-2">{project.title}</h3>
            <p className="text-sm mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-orange-500 hover:text-orange-400 font-semibold"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestWorks;
