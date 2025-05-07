
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section id="education" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">Education</h2>
          <div className="section-subtitle text-center mx-auto">
            Academic background that shaped my professional journey
          </div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-navy-100 rounded-full text-navy-700">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-800">Rutgers University</h3>
                  <p className="text-gray-600">New Brunswick, NJ</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-4">
                  <div>
                    <p className="text-navy-700 font-medium">Bachelor of Science (B.S.): Computer Science</p>
                    <p className="text-navy-700 font-medium">Bachelor of Science (B.S.): Finance</p>
                  </div>
                  <p className="text-gray-500 md:text-right">2018 - 2022</p>
                </div>
                
                <div className="mt-4">
                  <div className="flex gap-2 flex-wrap">
                    <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 transition-colors">Computer Science</Badge>
                    <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 transition-colors">Finance</Badge>
                    <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 transition-colors">Data Structures</Badge>
                    <Badge className="bg-navy-100 text-navy-700 hover:bg-navy-200 transition-colors">Algorithms</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          

        </div>
      </div>
    </section>
  );
};

export default Education;
