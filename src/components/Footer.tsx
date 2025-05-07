import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com/in/ritvik-raj-81b889170",
      label: "LinkedIn"
    },
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/ritvikraj123",
      label: "GitHub"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:ritvikraj71@gmail.com",
      label: "Email"
    }
  ];
  
  return (
    <footer className="bg-gradient-to-b from-navy-800 to-navy-900 text-white py-12 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-700/20 to-navy-800/20 backdrop-blur-sm" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="mb-6 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold font-display">
              Ritvik<span className="text-navy-300"></span>
            </h2>
            <p className="text-navy-300 mt-1">Software Engineer</p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-6 mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="hover:text-navy-300 transition-colors"
                aria-label={link.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
          
          <motion.button 
            onClick={scrollToTop}
            className="bg-navy-700/50 backdrop-blur-sm hover:bg-navy-600/50 p-3 rounded-full transition-all duration-300"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="mt-10 border-t border-navy-700/50 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-navy-300 text-sm">
            &copy; {currentYear} Ritvik Raj. All rights reserved.
          </p>
          <motion.p 
            className="text-navy-400 text-xs mt-1"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Built with React & Tailwind CSS
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
