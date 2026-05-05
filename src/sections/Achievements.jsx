import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';
import { ACHIEVEMENTS } from '../data/achievements';
import SectionTitle from '../components/SectionTitle';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-darker">
      <div className="container mx-auto px-6 md:px-12">
        <SectionTitle title="Achievements" subtitle="Milestones and recognitions I've received." />
        
        <div className="mt-12 max-w-4xl mx-auto">
          {ACHIEVEMENTS.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 mb-8 bg-dark p-6 rounded-2xl border border-slate-800 hover:border-accent-cyan/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-accent-red shrink-0">
                <FaTrophy className="text-xl" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-200 mt-2">{achievement}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
