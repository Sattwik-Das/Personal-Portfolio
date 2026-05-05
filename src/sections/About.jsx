import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../utils/constants';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle title="About Me" />
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-lg text-slate-300 leading-relaxed"
          >
            <p className="mb-6">{PERSONAL_INFO.aboutText}</p>
            
            <div className="bg-dark p-6 rounded-2xl border border-slate-800 inline-block">
              <h3 className="text-xl font-bold text-white mb-2">Education</h3>
              <p className="text-accent-cyan font-medium">{PERSONAL_INFO.university}</p>
              <p className="text-slate-400">Class of {PERSONAL_INFO.graduationYear}</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 w-full grid grid-cols-2 gap-4"
          >
            <div className="bg-dark p-6 rounded-2xl border border-slate-800 text-center">
              <h4 className="text-4xl font-bold text-accent mb-2">2+</h4>
              <p className="text-slate-400 text-sm">Years Coding</p>
            </div>
            <div className="bg-dark p-6 rounded-2xl border border-slate-800 text-center">
              <h4 className="text-4xl font-bold text-accent mb-2">10+</h4>
              <p className="text-slate-400 text-sm">Projects</p>
            </div>
            <div className="bg-dark p-6 rounded-2xl border border-slate-800 text-center">
              <h4 className="text-4xl font-bold text-accent mb-2">3</h4>
              <p className="text-slate-400 text-sm">Hackathons</p>
            </div>
            <div className="bg-dark p-6 rounded-2xl border border-slate-800 text-center">
              <h4 className="text-4xl font-bold text-accent mb-2">100%</h4>
              <p className="text-slate-400 text-sm">Dedication</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
