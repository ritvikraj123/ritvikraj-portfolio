
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulating form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Get In Touch</h2>
        <div className="section-subtitle text-center mx-auto">
          Let's connect! Feel free to reach out for opportunities, collaborations, or just to say hello.
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
          <div>
            <h3 className="text-2xl font-bold text-navy-800 mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <Card className="bg-white hover:shadow-md transition-all duration-300">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="p-2 bg-navy-100 rounded-full">
                    <Mail className="h-6 w-6 text-navy-700" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <a href="mailto:ritvikraj71@gmail.com" className="text-navy-700 hover:text-navy-500 transition-colors">
                      ritvikraj71@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white hover:shadow-md transition-all duration-300">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="p-2 bg-navy-100 rounded-full">
                    <Phone className="h-6 w-6 text-navy-700" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Phone</p>
                    <a href="tel:7328039804" className="text-navy-700 hover:text-navy-500 transition-colors">
                      (732) 803-9804
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white hover:shadow-md transition-all duration-300">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="p-2 bg-navy-100 rounded-full">
                    <MapPin className="h-6 w-6 text-navy-700" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Location</p>
                    <p className="text-navy-700">Hillsborough, NJ</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white hover:shadow-md transition-all duration-300">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="p-2 bg-navy-100 rounded-full">
                    <Linkedin className="h-6 w-6 text-navy-700" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/ritvik-raj-81b889170" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-navy-700 hover:text-navy-500 transition-colors"
                    >
                      linkedin.com/in/ritvik-raj-81b889170
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white hover:shadow-md transition-all duration-300">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="p-2 bg-navy-100 rounded-full">
                    <Github className="h-6 w-6 text-navy-700" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">GitHub</p>
                    <a 
                      href="https://github.com/ritvikraj123" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-navy-700 hover:text-navy-500 transition-colors"
                    >
                      github.com/ritvikraj123
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-2xl font-bold text-navy-800 mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input 
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-navy-700 hover:bg-navy-800"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
