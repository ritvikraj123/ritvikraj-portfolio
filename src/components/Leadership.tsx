import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Leadership = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section id="leadership" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">Leadership Experience</h2>
          <div className="section-subtitle text-center mx-auto">
            Leadership roles and community involvement
          </div>
        </motion.div>
        
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-navy-100 rounded-full text-navy-700">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-800">Rutgers PBL (Phi Beta Lambda)</h3>
                  <p className="text-gray-600">New Brunswick, NJ</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-4">
                  <p className="text-navy-700 font-medium">Public Relations Committee Chair</p>
                  <p className="text-gray-500 md:text-right">2019 - 2020</p>
                </div>
                <p className="text-gray-700">
                  Planned and organized events while promoting professional conferences and initiatives to enhance member engagement.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-navy-100 rounded-full text-navy-700">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-800">Boy Scouts of America</h3>
                  <p className="text-gray-600">Hillsborough, NJ</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-4">
                  <p className="text-navy-700 font-medium">Eagle Scout</p>
                  <p className="text-gray-500 md:text-right">2012 - 2018</p>
                </div>
                <p className="text-gray-700">
                  Guided aspiring Eagle Scouts and led a community project constructing benches for a local after school program.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-navy-100 rounded-full text-navy-700">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy-800">AIM2Flourish</h3>
                  <p className="text-gray-600">Rutgers University, NJ</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-4">
                  <p className="text-navy-700 font-medium">Published Writer</p>
                  <p className="text-gray-500 md:text-right">2019</p>
                </div>
                <p className="text-gray-700">
                  Authored and published an article on corporate sustainability initiatives through AIM2Flourish.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
