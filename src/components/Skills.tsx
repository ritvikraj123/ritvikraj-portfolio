import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Layers, Wrench, BarChart, Database, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillCategory = ({ title, skills, icon }: SkillCategoryProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="hover:shadow-lg transition-all duration-300 hover:border-navy-300 border-2">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <motion.div 
              className="p-2 rounded-full bg-navy-100 text-navy-700 border border-navy-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {icon}
            </motion.div>
            <h3 className="text-xl font-bold text-navy-800">{title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge 
                  className="bg-navy-50 text-navy-800 hover:bg-navy-100 py-1.5 px-3 cursor-pointer transition-colors duration-200 border border-navy-300 shadow-sm"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Skills = () => {
  const languages = [
    "Python", "Java", "JavaScript", "TypeScript", 
    "HTML/CSS", "SQL", "Golang",
  ];

  const frameworks = [
    "Node.js", "React", "Angular", "Spring Boot", "Express.js",
  ];

  const tools = [
    "Git", "Jira", "AWS", "Docker", "CI/CD", "REST APIs",
  ];

  const aiAndLLM = [
    "GPT Integration", "LLM Development", "NLP", "Machine Learning",
    "AI Automation", "Prompt Engineering",
  ];

  const dataAnalytics = [
    "Data Visualization", "Statistical Analysis", "Business Intelligence", 
    "Reporting", "Dashboards",
  ];

  const dataEngineering = [
    "Pandas", "PySpark", "ETL", "SQL", "MongoDB", "MySQL",
  ];

  return (
    <section id="skills" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Skills</h2>
        <div className="section-subtitle text-center mx-auto">
          Technical skills and technologies I've worked with
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
          <SkillCategory 
            title="Programming Languages" 
            skills={languages} 
            icon={<Code className="h-5 w-5" />}
          />
          <SkillCategory 
            title="Frameworks & Libraries" 
            skills={frameworks}
            icon={<Layers className="h-5 w-5" />}
          />
          <SkillCategory 
            title="Tools & Technologies" 
            skills={tools}
            icon={<Wrench className="h-5 w-5" />}
          />
          <SkillCategory 
            title="AI & LLM" 
            skills={aiAndLLM}
            icon={<Brain className="h-5 w-5" />}
          />
          <SkillCategory 
            title="Data & Analytics" 
            skills={dataAnalytics}
            icon={<BarChart className="h-5 w-5" />}
          />
          <SkillCategory 
            title="Data Engineering" 
            skills={dataEngineering}
            icon={<Database className="h-5 w-5" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
