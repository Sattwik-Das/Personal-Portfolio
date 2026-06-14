import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, EDUCATION } from '../utils/constants';
import SectionTitle from '../components/SectionTitle';
import profileImg from '../assets/images/profile-suit.jpeg';
import adamasLogo from '../assets/images/adamas-logo.png';
import { FaUniversity, FaSchool } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 relative z-10 bg-darker rounded-t-[2.5rem] md:rounded-t-[4rem] border-t-[3px] md:border-t-[5px] border-accent-red">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle title="About Me" />
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 xl:gap-12 items-start mb-8">
          {/* Left Column: Text & Education */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-[65%] xl:w-2/3 flex flex-col"
          >
            <p className="text-lg text-slate-300 leading-relaxed mb-10">{PERSONAL_INFO.aboutText}</p>
            
            {/* Education Section */}
            <div className="w-full">
              <h3 className="text-2xl font-bold text-white mb-6 tracking-wide">Education</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EDUCATION.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="bg-[#111111] border border-zinc-800/80 rounded-3xl p-4 flex flex-col justify-between gap-4 hover:border-zinc-700/50 transition-all duration-300 shadow-lg group relative overflow-hidden"
                  >
                    {/* Top: Logo + Text */}
                    <div className="flex items-start gap-3">
                      {/* Logo Container */}
                      <div className="w-12 h-12 bg-[#181818] border border-zinc-800 rounded-xl p-2 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300">
                        {edu.logoId === 'adamas' ? (
                          <img 
                            src={adamasLogo} 
                            alt={edu.school} 
                            className="w-full h-full object-contain"
                          />
                        ) : edu.logoId === 'hvm' ? (
                          <div className="text-zinc-600">
                            <FaSchool size={18} />
                          </div>
                        ) : (
                          <div className="text-zinc-600">
                            <FaUniversity size={18} />
                          </div>
                        )}
                      </div>
                      
                      {/* Text Information */}
                      <div className="pt-0.5">
                        <h4 className="text-sm font-bold text-white tracking-tight leading-snug">
                          {edu.degree}
                        </h4>
                        <p className="text-zinc-400 font-medium mt-1 text-[11px] leading-tight">
                          {edu.school}
                        </p>
                      </div>
                    </div>

                    {/* Bottom: Year Badge */}
                    <div className="self-end mt-1">
                      <div className="bg-[#181818] border border-zinc-800 px-3 py-1 rounded-full text-zinc-400 text-[10px] font-semibold tracking-wider font-mono shadow-md">
                        {edu.years}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Right Column: Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-[35%] xl:w-1/3 flex justify-center lg:justify-end items-start shrink-0"
          >
            <div className="relative w-72 md:w-80 lg:w-full max-w-sm rounded-2xl overflow-hidden border-2 border-slate-800 shadow-2xl hover:border-accent-cyan transition-colors duration-300">
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
