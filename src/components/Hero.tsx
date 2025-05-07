
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownCircle, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-800 mb-4">
            Hi, I'm <span className="text-navy-600">Ritvik Raj</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-navy-600 mb-6">
            Software Engineer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mb-8">
            I build exceptional digital experiences with a focus on performance, scalability, and user experience.
            Currently working at ADP as a Software Engineer.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Button 
              variant="default" 
              className="bg-navy-700 hover:bg-navy-800"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              className="border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
          </div>
          
          <div className="flex space-x-4 mb-16">
            <a 
              href="https://linkedin.com/in/ritvik-raj-81b889170" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-navy-700" />
            </a>
            <a 
              href="https://github.com/ritvikraj123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-navy-700" />
            </a>
            <a 
              href="mailto:ritvikraj71@gmail.com" 
              className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-navy-700" />
            </a>
            <a 
              href="tel:7328039804" 
              className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5 text-navy-700" />
            </a>
          </div>
          
          <a 
            href="#about" 
            className="animate-bounce inline-block"
            aria-label="Scroll down"
          >
            <ArrowDownCircle className="w-8 h-8 text-navy-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
