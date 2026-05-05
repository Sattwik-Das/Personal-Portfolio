import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../data/skills';
import SectionTitle from '../components/SectionTitle';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-darker relative">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle title="Skills & Expertise" subtitle="Technologies and concepts I work with." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {SKILLS.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-dark p-8 rounded-2xl border border-slate-800 hover:border-accent-red/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-accent rounded-full"></span>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-slate-900 text-slate-300 rounded-full text-sm font-medium border border-slate-800 hover:text-accent-cyan transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
