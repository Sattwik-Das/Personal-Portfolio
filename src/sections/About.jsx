import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../utils/constants';
import SectionTitle from '../components/SectionTitle';
import profileImg from '../assets/images/profile-suit.jpeg';

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10 bg-darker">
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
            className="flex-1 w-full flex justify-center md:justify-end"
          >
            <div className="relative w-72 md:w-80 lg:w-96 rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl hover:border-accent transition-colors duration-300">
              <img 
                src={profileImg} 
                alt="About Me" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
