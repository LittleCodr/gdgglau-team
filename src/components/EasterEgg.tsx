import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { devFacts } from '../data';

interface EasterEggProps {
  isVisible: boolean;
  onClose: () => void;
}

const EasterEgg: React.FC<EasterEggProps> = ({ isVisible, onClose }) => {
  const [currentFact, setCurrentFact] = useState(devFacts[0]);

  useEffect(() => {
    if (isVisible) {
      const randomFact = devFacts[Math.floor(Math.random() * devFacts.length)];
      setCurrentFact(randomFact);
    }
  }, [isVisible]);

  const handleNextFact = () => {
    let newFact;
    do {
      newFact = devFacts[Math.floor(Math.random() * devFacts.length)];
    } while (newFact === currentFact);
    setCurrentFact(newFact);
  };

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={handleModalClick}
        >
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            exit={{ y: 50 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl max-w-md mx-4
                     border-4 border-black dark:border-[var(--neon-pink)]
                     dark:cyberpunk-border relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full animate-glitch opacity-50
                          bg-gradient-to-r from-[var(--neon-blue)] via-transparent to-[var(--neon-pink)]" />
            
            <Sparkles className="w-12 h-12 mb-4 text-google-yellow dark:text-[var(--neon-green)]
                               animate-spin-slow mx-auto" />
            
            <h2 className="text-2xl font-bold mb-4 text-center dark:cyberpunk-text">
              🚀 Secret Dev Lounge Discovered! 🎮
            </h2>
            
            <div className="space-y-4">
              <p className="text-center dark:text-[var(--neon-blue)]">
                You found our hidden sanctuary! Here's a dev joke for you:
              </p>
              
              <motion.div
                key={currentFact.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg"
              >
                <p className="text-google-blue dark:text-[var(--neon-pink)] italic">
                  {currentFact.question}
                </p>
                <p className="text-google-green dark:text-[var(--neon-green)] mt-2">
                  {currentFact.answer}
                </p>
              </motion.div>
              
              <div className="text-center mt-6 space-x-3">
                <button
                  onClick={handleNextFact}
                  className="px-6 py-2 bg-google-yellow dark:bg-transparent text-black dark:text-[var(--neon-green)]
                           rounded-lg transition-all duration-300
                           hover:bg-google-green dark:hover:bg-[var(--neon-green)]
                           dark:border-2 dark:border-[var(--neon-green)]
                           dark:hover:text-black
                           dark:cyberpunk-text"
                >
                  Next Fact
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-2 bg-google-blue dark:bg-transparent text-white
                           rounded-lg transition-all duration-300
                           hover:bg-google-green dark:hover:bg-[var(--neon-blue)]
                           dark:border-2 dark:border-[var(--neon-blue)]
                           dark:text-[var(--neon-blue)] dark:hover:text-white
                           dark:cyberpunk-text"
                >
                  Close Portal
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;