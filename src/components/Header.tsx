import React, { useState, useEffect } from 'react';
import { navLinks } from '../data';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
      ${isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg' 
        : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md'}`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-google-blue via-google-red to-google-yellow"></div>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-google-blue to-google-green rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src="https://yt3.googleusercontent.com/ytc/AIdro_mQRyioMUO4VBrlP-jILdsU6_wMf1KSU9syWtUN4hmK1hg=s900-c-k-c0x00ffffff-no-rj"
                alt="GDG Logo"
                className="w-12 h-12 rounded-full relative z-10 transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
              GDG - GLA University
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-gray-600 dark:text-gray-300 hover:text-google-blue dark:hover:text-google-blue
                         transition-all duration-300 font-medium relative
                         after:content-[''] after:absolute after:-bottom-1 after:left-0 
                         after:w-0 after:h-0.5 after:bg-google-blue
                         after:transition-all after:duration-300
                         hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 
                       hover:bg-gray-200 dark:hover:bg-gray-700
                       transition-colors duration-300"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-google-yellow" />
              ) : (
                <Moon className="w-5 h-5 text-google-blue" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 
                       hover:bg-gray-200 dark:hover:bg-gray-700
                       transition-colors duration-300"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-google-yellow" />
              ) : (
                <Moon className="w-5 h-5 text-google-blue" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-google-blue dark:hover:text-google-blue
                       bg-gray-100 dark:bg-gray-800 rounded-lg
                       hover:bg-gray-200 dark:hover:bg-gray-700
                       transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[73px] bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-40
                     border-t border-gray-200 dark:border-gray-800"
          >
            <div className="container mx-auto px-6 py-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="flex flex-col space-y-6"
              >
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    className={`text-2xl font-bold text-gray-800 dark:text-white
                             hover:text-google-${['blue', 'red', 'yellow', 'green'][index % 4]}
                             dark:hover:text-[var(--neon-${['blue', 'pink', 'green'][index % 3]})]
                             transition-colors duration-300
                             flex items-center space-x-2
                             relative pl-4 py-2 rounded-lg
                             hover:bg-gray-100 dark:hover:bg-gray-800/50`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8
                                  bg-google-${['blue', 'red', 'yellow', 'green'][index % 4]}
                                  dark:bg-[var(--neon-${['blue', 'pink', 'green'][index % 3]})]
                                  rounded-full opacity-50`} />
                    <span>{link.name}</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;