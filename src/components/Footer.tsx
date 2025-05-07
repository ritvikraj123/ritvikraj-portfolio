
import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold font-display">
              Ritvik<span className="text-navy-300">.</span>
            </h2>
            <p className="text-navy-300 mt-1">Software Engineer</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://linkedin.com/in/ritvik-raj-81b889170" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-navy-300 transition-colors transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/ritvikraj123" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-navy-300 transition-colors transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="mailto:ritvikraj71@gmail.com" 
              className="hover:text-navy-300 transition-colors transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="bg-navy-700 hover:bg-navy-600 p-3 rounded-full transition-colors transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
        
        <div className="mt-10 border-t border-navy-700 pt-8 text-center">
          <p className="text-navy-300 text-sm">
            &copy; {currentYear} Ritvik Raj. All rights reserved.
          </p>
          <p className="text-navy-400 text-xs mt-1">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
