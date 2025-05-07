
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Leadership from '@/components/Leadership';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import TechnicalExpertise from '@/components/TechnicalExpertise';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <TechnicalExpertise />
      <Skills />
      <Projects />
      <Education />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
