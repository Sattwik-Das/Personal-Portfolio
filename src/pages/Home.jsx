import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Achievements from '../sections/Achievements';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  );
};

export default Home;
