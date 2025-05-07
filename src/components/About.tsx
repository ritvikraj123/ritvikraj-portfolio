import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto">
        <h2 className="section-title text-center">About Me</h2>
        <div className="section-subtitle text-center mx-auto">
          A passionate software engineer with experience in building robust, scalable applications
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto px-4">
          <div className="space-y-6 text-gray-700">
            <p className="text-lg">
              I'm Ritvik Raj, a Software Engineer at ADP with a dual degree in Computer Science and Finance from Rutgers University. 
              I specialize in developing robust, efficient, and user-friendly software solutions that solve real business problems.
            </p>
            
            <p className="text-lg">
              I develop AI-powered applications using GPTs and other Large Language Models (LLMs). 
              My work includes implementing natural language processing solutions, building intelligent automation systems, and creating AI-driven tools that enhance productivity and user experience.
            </p>
            
            <p className="text-lg">
              My technical expertise spans across full-stack development, database optimization, and system design. 
              I've successfully built REST APIs, optimized SQL queries, and engineered features that improved platform scalability and workflow efficiency.
            </p>
            
            <p className="text-lg">
              I enjoy tackling complex problems and transforming them into simple, elegant solutions. 
              My background in both computer science and finance gives me a unique perspective that bridges technical implementation with business value.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center mt-12 space-x-4">
            <div className="text-center p-5">
              <h3 className="text-4xl font-bold text-navy-700">3+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            {/* <div className="text-center p-5">
              <h3 className="text-4xl font-bold text-navy-700">10+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="text-center p-5">
              <h3 className="text-4xl font-bold text-navy-700">15+</h3>
              <p className="text-gray-600">Technologies</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
