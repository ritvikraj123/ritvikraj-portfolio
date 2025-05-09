import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  location: string;
  tags?: string[];
}

const ExperienceItem = ({ title, company, period, location, tags }: ExperienceItemProps) => {
  return (
    <motion.div 
      className="timeline-item relative pl-12 pb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="timeline-dot absolute left-0 top-2 w-4 h-4 bg-navy-600 rounded-full"
        whileHover={{ scale: 1.2, backgroundColor: "#2563eb" }}
        transition={{ duration: 0.2 }}
      />
      <div className="timeline-line absolute left-2 top-6 w-[1px] h-[calc(100%-24px)] bg-gradient-to-b from-navy-300 to-transparent"></div>
      
      <Card className="experience-card hover:border-navy-300 border-2 transition-all duration-300 backdrop-blur-sm bg-white/80 hover:bg-white/90 shadow-lg hover:shadow-xl">
        <CardHeader className="pb-2">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
            <div>
              <motion.h3 
                className="text-xl font-bold text-navy-800"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {title}
              </motion.h3>
              <motion.div 
                className="text-navy-600 font-medium"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {company}
              </motion.div>
            </div>
            <div className="text-right">
              <div className="text-gray-500 font-medium">{period}</div>
              <div className="text-gray-500">{location}</div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Badge 
                    className="bg-navy-50/80 backdrop-blur-sm text-navy-800 hover:bg-navy-100 py-1.5 px-3 cursor-pointer transition-all duration-300 border border-navy-300/50 shadow-sm hover:shadow-md hover:border-navy-400"
                  >
                    {tag}
                  </Badge>
                </motion.div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Journey
        </motion.h2>
        <motion.div 
          className="section-subtitle text-center mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My professional experience and contributions in the tech industry
        </motion.div>
        
        <div className="max-w-4xl mx-auto mt-12">
          <div className="timeline relative">
            <ExperienceItem
              title="Software Engineer"
              company="ADP"
              period="July 2022 - Current"
              location="New York City, NY"
              tags={["REST API", "TypeScript", "Node.js", "MySQL", "AWS", "CI/CD", "Go", "UI Design"]}
            />
            
            <ExperienceItem
              title="TDP Software Engineer Intern"
              company="AT&T"
              period="June 2021 - August 2021"
              location="Middletown, NJ"
              tags={["API Development", "UX Design", "Power BI", "PySpark", "Palantir Foundry"]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
