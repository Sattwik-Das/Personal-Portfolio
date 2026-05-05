import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { PERSONAL_INFO } from '../utils/constants';
import Button from '../components/Button';
import profileImg from '../assets/images/profile.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            Hi, <br className="hidden md:block" />
            I'm <span className="text-accent">{PERSONAL_INFO.name}</span>
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl text-slate-300 font-medium mb-6 h-10"
          >
            <Typewriter
              words={[PERSONAL_INFO.role, PERSONAL_INFO.tagline]}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-10"
          >
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href="/assets/resume.pdf" variant="outline">
              Download Resume
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex gap-6 justify-center md:justify-start text-2xl text-slate-400"
          >
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent-red transition-colors">
              <FaGithub />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent-red transition-colors">
              <FaLinkedin />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-accent-red transition-colors">
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 relative w-full flex justify-center md:justify-end"
        >
          <div className="relative z-10 w-80 md:w-96 lg:w-[500px] xl:w-[475px] drop-shadow-2xl">
            <img 
              src={profileImg} 
              alt={PERSONAL_INFO.name} 
              className="w-full h-auto object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
