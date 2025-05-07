
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  imageSrc?: string;
}

const ProjectCard = ({ title, description, technologies, githubLink, demoLink, imageSrc }: ProjectProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card 
        className="project-card h-full flex flex-col group shadow-md hover:shadow-xl transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {imageSrc && (
          <div className="h-48 overflow-hidden rounded-t-lg">
            <img 
              src={imageSrc} 
              alt={title} 
              className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
            />
          </div>
        )}
        <CardHeader>
          <h3 className="text-xl font-bold text-navy-800 group-hover:text-navy-600 transition-colors">{title}</h3>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="bg-navy-100 text-navy-700 group-hover:bg-navy-200 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-3">
          {githubLink && (
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2 group-hover:border-navy-600 transition-colors" 
              onClick={() => window.open(githubLink, '_blank')}
            >
              <Github className="h-4 w-4" /> Code
            </Button>
          )}
          {demoLink && (
            <Button 
              variant="default" 
              size="sm" 
              className="flex items-center gap-2 bg-navy-700 hover:bg-navy-800 transition-all" 
              onClick={() => window.open(demoLink, '_blank')}
            >
              <ExternalLink className="h-4 w-4" /> Demo
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Live Financial Data Hub",
      description: "A financial data hub in React to display real-time cryptocurrency and stock market data, integrating CryptoRanker and Yahoo Finance APIs.",
      technologies: ["React", "React Router", "Axios", "React Hooks", "API Integration", "React Testing Library"],
      githubLink: "https://github.com/ritvikraj123/financial-data-hub",
      demoLink: "#",
      imageSrc: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Taxi Ride ETL Data Pipeline",
      description: "An ETL pipeline in Python to ingest, transform, and load taxi ride data into a PostgreSQL database using SQLAlchemy, implementing star-schema design.",
      technologies: ["Python", "SQLAlchemy", "PostgreSQL", "Pandas", "ETL", "Data Engineering"],
      githubLink: "https://github.com/ritvikraj123/taxi-etl-pipeline",
      imageSrc: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "AI-Powered Resume Screening Tool",
      description: "A Streamlit-based AI application that evaluates resumes against job descriptions using Google Gemini AI, with ATS-style percentage matching.",
      technologies: ["Streamlit", "Python", "Google Gemini AI", "PyMuPDF", "NLP", "Machine Learning"],
      githubLink: "https://github.com/ritvikraj123/resume-screening-ai",
      demoLink: "#",
      imageSrc: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Maze Runner",
      description: "An application that leverages AI and machine learning algorithms to analyze the efficiency of BFS, DFS, and A* algorithms in maze-solving.",
      technologies: ["AI", "Machine Learning", "Graph Algorithms", "BFS", "DFS", "A*", "Manhattan Distance"],
      githubLink: "https://github.com/ritvikraj123/maze-runner",
      imageSrc: "https://images.unsplash.com/photo-1519146392663-52022807ebe1?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="projects" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">Projects</h2>
          <div className="section-subtitle text-center mx-auto mb-12">
            A collection of my recent work and personal projects
          </div>
        </motion.div>
        
        <div className="hidden md:block">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubLink={project.githubLink}
                demoLink={project.demoLink}
                imageSrc={project.imageSrc}
              />
            ))}
          </motion.div>
        </div>

        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      githubLink={project.githubLink}
                      demoLink={project.demoLink}
                      imageSrc={project.imageSrc}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-4">
              <CarouselPrevious className="static transform-none mx-0" />
              <CarouselNext className="static transform-none mx-0" />
            </div>
          </Carousel>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" className="group">
            View More Projects <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
