import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
import { ACHIEVEMENTS } from '../data/achievements';
import SectionTitle from '../components/SectionTitle';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative z-10 bg-darker">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle title="Achievements & Awards" subtitle="Milestones and recognitions I've received." />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Achievements List */}
          <div className="flex flex-col">
            {ACHIEVEMENTS.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 mb-8 bg-dark p-6 rounded-2xl border border-slate-800 hover:border-accent-cyan/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-accent-red shrink-0 overflow-hidden">
                  {achievement.image ? (
                    <img src={achievement.image} alt={achievement.title || "Achievement"} className="w-full h-full object-contain p-2" />
                  ) : (
                    <FaTrophy className="text-xl" />
                  )}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-200 mt-2">{achievement.title || achievement}</h4>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Right Side: Pictures Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center w-full h-full min-h-[400px] bg-dark rounded-2xl border-2 border-slate-800 border-dashed"
          >
            <p className="text-slate-500 font-medium">Achievement Pictures Place</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
