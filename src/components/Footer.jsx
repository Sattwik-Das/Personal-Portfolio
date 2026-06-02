import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { PERSONAL_INFO } from '../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-darker relative z-10 py-8 border-t border-slate-800 mt-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-400 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-xl">
            <FaGithub />
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-white transition-colors text-xl">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
