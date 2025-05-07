import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDownCircle, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      x.set(e.clientX);
      y.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/ritvikraj123", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/ritvik-raj-81b889170", label: "LinkedIn" },
    { icon: <Mail className="h-5 w-5" />, href: "mailto:ritvikraj71@gmail.com", label: "Email" },
    { icon: <Phone className="h-5 w-5" />, href: "tel:7328039804", label: "Phone" },
  ];

  // Particle animation
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 10,
  }));

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Cursor trail */}
      <motion.div
        className="fixed w-8 h-8 rounded-full bg-navy-500/20 pointer-events-none z-50"
        style={{
          x: useTransform(x, (value) => value - 16),
          y: useTransform(y, (value) => value - 16),
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-navy-500/10"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-800 mb-4">
              Hi, I'm <span className="text-navy-600">Ritvik Raj</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-navy-600 mb-6">
              Software Engineer
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg text-gray-600 max-w-2xl mb-8">
              I build exceptional digital experiences with a focus on performance, scalability, and user experience.
              With expertise in AI and LLM integration, I develop intelligent applications that leverage the power of Large Language Models.
              Currently working at ADP as a Software Engineer.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <Button 
              variant="default" 
              className="bg-navy-700 hover:bg-navy-800 transform hover:scale-105 transition-all duration-300 relative group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">Contact Me</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-navy-600 to-navy-400 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                whileHover={{ scale: 1.05 }}
              />
            </Button>
            <Button 
              variant="outline" 
              className="border-navy-700 text-navy-700 hover:bg-navy-700 hover:text-white transform hover:scale-105 transition-all duration-300 relative group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10">View Projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-navy-600 to-navy-400 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                whileHover={{ scale: 1.05 }}
              />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-4"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-navy-50 text-navy-700 hover:bg-navy-100 transition-colors duration-300 relative group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              >
                <span className="relative z-10">{link.icon}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-navy-600 to-navy-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                  whileHover={{ scale: 1.1 }}
                />
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative group"
            >
              <ArrowDownCircle className="h-8 w-8 text-navy-600 relative z-10" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-navy-600 to-navy-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                whileHover={{ scale: 1.1 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
