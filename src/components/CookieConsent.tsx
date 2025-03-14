import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white dark:bg-gray-800 
                   border-t-4 border-google-blue dark:border-[var(--neon-blue)]
                   shadow-lg backdrop-blur-md bg-opacity-95 dark:bg-opacity-95"
        >
          <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Cookie className="w-6 h-6 text-google-blue dark:text-[var(--neon-blue)] animate-bounce-slow" />
              <p className="text-gray-700 dark:text-gray-300">
                We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 
                         dark:hover:text-white transition-colors duration-300"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="px-4 py-2 bg-google-blue dark:bg-transparent text-white
                         rounded-lg transition-all duration-300
                         hover:bg-google-green dark:hover:bg-[var(--neon-blue)]
                         dark:border-2 dark:border-[var(--neon-blue)]
                         dark:text-[var(--neon-blue)] dark:hover:text-white
                         dark:cyberpunk-text"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;