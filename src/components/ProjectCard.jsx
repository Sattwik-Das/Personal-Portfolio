import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Button from './Button';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="bg-dark border border-slate-800 rounded-2xl overflow-hidden group hover:border-accent-cyan/50 transition-colors"
    >
      <div className="h-48 bg-slate-900 flex items-center justify-center border-b border-slate-800 relative overflow-hidden">
        {project.svg ? (
          <div 
            className="w-full h-full" 
            dangerouslySetInnerHTML={{ __html: project.svg }} 
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-accent opacity-10 group-hover:opacity-20 transition-opacity" />
            <span className="text-slate-500 font-medium">Coming Soon</span>
          </>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-accent-cyan transition-colors">{project.title}</h3>
        <p className="text-slate-400 mb-6 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech, i) => (
            <span key={i} className="text-xs font-medium px-3 py-1 bg-slate-800 text-slate-300 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          <Button variant="disabled" className="flex-1 py-2 text-sm">
            <FaGithub /> GitHub
          </Button>
          <Button variant="disabled" className="flex-1 py-2 text-sm">
            <FaExternalLinkAlt /> Demo
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
