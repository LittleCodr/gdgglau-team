import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

interface SecretButtonProps {
  onClick: () => void;
}

const SecretButton: React.FC<SecretButtonProps> = ({ onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-4 right-4 w-12 h-12 rounded-full
                bg-gradient-to-r from-google-blue to-google-green
                dark:from-[var(--neon-blue)] dark:to-[var(--neon-pink)]
                flex items-center justify-center
                shadow-lg hover:shadow-xl
                transition-all duration-300
                opacity-20 hover:opacity-100"
      onClick={onClick}
    >
      <Code2 className="w-6 h-6 text-white animate-spin-slow" />
    </motion.button>
  );
};

export default SecretButton;