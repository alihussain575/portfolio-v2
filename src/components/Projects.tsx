import React from 'react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store built with React and Node.js.',
    image: 'https://via.placeholder.com/300x200.png?text=E-commerce+Platform',
  },
  {
    title: 'Task Management App',
    description: 'A productivity app for managing tasks and projects.',
    image: 'https://via.placeholder.com/300x200.png?text=Task+Management+App',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center glow">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card p-6">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;