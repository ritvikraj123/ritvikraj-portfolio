import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-navy-700" />,
      label: "Email",
      value: "ritvikraj71@gmail.com",
      href: "mailto:ritvikraj71@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-navy-700" />,
      label: "Phone",
      value: "(732) 803-9804",
      href: "tel:7328039804"
    },
    {
      icon: <MapPin className="h-6 w-6 text-navy-700" />,
      label: "Location",
      value: "Hillsborough, NJ"
    },
    {
      icon: <Linkedin className="h-6 w-6 text-navy-700" />,
      label: "LinkedIn",
      value: "linkedin.com/in/ritvik-raj-81b889170",
      href: "https://linkedin.com/in/ritvik-raj-81b889170"
    },
    {
      icon: <Github className="h-6 w-6 text-navy-700" />,
      label: "GitHub",
      value: "github.com/ritvikraj123",
      href: "https://github.com/ritvikraj123"
    }
  ];

  return (
    <section id="contact" className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">Get In Touch</h2>
          <div className="section-subtitle text-center mx-auto">
            Let's connect! Feel free to reach out for opportunities, collaborations, or just to say hello.
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-navy-800 mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <CardContent className="flex items-center gap-4 p-4">
                      <motion.div 
                        className="p-2 bg-navy-100 rounded-full"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {info.icon}
                      </motion.div>
                      <div>
                        <p className="text-gray-500 text-sm">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-navy-700 hover:text-navy-500 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-navy-700">{info.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-navy-800 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input 
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  className="bg-white/50 backdrop-blur-sm border-navy-200 focus:border-navy-500 transition-colors"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input 
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                  className="bg-white/50 backdrop-blur-sm border-navy-200 focus:border-navy-500 transition-colors"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input 
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="bg-white/50 backdrop-blur-sm border-navy-200 focus:border-navy-500 transition-colors"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  required
                  className="bg-white/50 backdrop-blur-sm border-navy-200 focus:border-navy-500 transition-colors"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <Button 
                  type="submit"
                  className="w-full bg-navy-700 hover:bg-navy-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
