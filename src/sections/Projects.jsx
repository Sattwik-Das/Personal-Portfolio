import React from 'react';
import { PROJECTS } from '../data/projects';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative z-10 bg-darker">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle title="Featured Projects" subtitle="A selection of my recent work." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
