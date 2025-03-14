import React from 'react';
import { socialLinks } from '../data';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Instagram':
        return <Instagram className="w-6 h-6" />;
      case 'Linkedin':
        return <Linkedin className="w-6 h-6" />;
      case 'MessageCircle':
        return <MessageCircle className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <footer className="relative bg-white dark:bg-gray-900 border-t-4 border-black dark:border-white mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-google-blue via-google-red to-google-yellow opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-r from-google-blue via-google-red to-google-yellow opacity-10 
                    animate-background-shine bg-[length:200%_100%]" />
      
      <div className="container mx-auto px-6 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6 group">
              <img
                src="https://json.commudle.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeTNzQWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--8ff3de2d21b4c8371909ad52eca0bc60b3eb8d03/anu-framed.jpeg"
                alt="Anubhav Singh"
                className="w-16 h-16 rounded-full transform transition-transform group-hover:scale-110 group-hover:rotate-6"
              />
              <div>
                <h3 className="text-xl font-bold text-google-blue group-hover:text-google-red transition-colors duration-300">
                  Anubhav Singh
                </h3>
                <p className="text-google-green">
                  Organizer, GDG GLAU Chapter
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 relative 
                       before:content-[''] before:absolute before:-left-4 before:top-0 before:bottom-0 
                       before:w-1 before:bg-gradient-to-b before:from-google-blue before:to-google-green">
              GLA University, Mathura, UP, India
              <br />
              Email: gdg@gla.ac.in
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-google-blue mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Events', 'Resources', 'Contact'].map((link, index) => (
                <li key={link}>
                  <a
                    href="#"
                    className={`text-gray-600 hover:text-google-${['blue', 'red', 'yellow', 'green'][index % 4]} 
                             dark:text-gray-300 transition-all duration-300 
                             hover:translate-x-2 inline-block transform`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-google-red mb-4">
              Connect With Us
            </h4>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-google-${['blue', 'red', 'green'][index % 3]} 
                           hover:text-black dark:hover:text-white
                           transition-all duration-300 transform hover:scale-125 
                           hover:rotate-12`}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;