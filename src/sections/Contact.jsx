import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { PERSONAL_INFO } from '../utils/constants';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative z-10 bg-darker overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-red opacity-5 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <SectionTitle title="Get In Touch" subtitle="I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!" />
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
            <Button href={`mailto:${PERSONAL_INFO.email}`} variant="primary" className="py-4 px-8 text-lg">
              <FaEnvelope /> Say Hello
            </Button>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-800/50 flex justify-center gap-8">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent-cyan transition-colors flex flex-col items-center gap-2">
              <FaGithub className="text-3xl" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
