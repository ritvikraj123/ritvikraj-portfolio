import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, BarChart, HardDrive, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ExpertiseCard = ({ title, description, icon }: ExpertiseCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="hover:shadow-lg transition-all duration-300 hover:border-navy-300 h-full border-2">
        <CardContent className="p-6 h-full">
          <div className="flex flex-col items-center text-center h-full">
            <motion.div 
              className="mb-4 p-3 rounded-full bg-navy-100 text-navy-700 border border-navy-300"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              {icon}
            </motion.div>
            <motion.h3 
              className="text-xl font-bold text-navy-800 mb-2"
              whileHover={{ scale: 1.05 }}
            >
              {title}
            </motion.h3>
            <p className="text-gray-700 border-t border-navy-200 pt-4 mt-2">{description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TechnicalExpertise = () => {
  const expertiseAreas = [
    {
      title: "Front-End Development",
      description: "Building responsive and interactive user interfaces with modern frameworks and libraries like React, Angular, and TypeScript.",
      icon: <Code className="h-8 w-8" />
    },
    {
      title: "Back-End Development",
      description: "Creating robust server-side applications and APIs using Java, Node.js, and Go with focus on performance and security.",
      icon: <Database className="h-8 w-8" />
    },
    {
      title: "AI & LLM Integration",
      description: "Developing AI-powered applications using Large Language Models (GPTs), implementing natural language processing, and building intelligent automation solutions.",
      icon: <Brain className="h-8 w-8" />
    },
    {
      title: "Data & Analytics",
      description: "Transforming data into actionable insights using statistical analysis, data visualization, and business intelligence tools.",
      icon: <BarChart className="h-8 w-8" />
    },
    {
      title: "Data Engineering",
      description: "Designing and implementing data pipelines and infrastructure using ETL processes, PySpark, and SQL/NoSQL databases.",
      icon: <HardDrive className="h-8 w-8" />
    }
  ];

  return (
    <section id="expertise" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Technical Expertise</h2>
        <div className="section-subtitle text-center mx-auto">
          Areas of specialization and technical knowledge
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-12">
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard
              key={index}
              title={area.title}
              description={area.description}
              icon={area.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;
