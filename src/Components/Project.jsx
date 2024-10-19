import React from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'Project with relatate Car parking management system which helps to reduce the conjection in the road.',
    // link: '#'
  },
  {
    title: 'Project 2',
    description: 'An awesome website with a sleek of candidates under E-recruitment System.',
    // link: '#'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-200 text-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-300 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-600 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
