import React from 'react';
import { motion } from 'framer-motion';
import { TeamData } from '../types';

interface TeamSectionProps {
  team: TeamData;
  isPixelMode: boolean;
}

const TeamSection: React.FC<TeamSectionProps> = ({ team, isPixelMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <motion.h2
        className={`text-4xl font-bold mb-4 text-google-${team.color}
                   dark:text-[var(--neon-blue)] transition-all duration-300
                   ${isPixelMode ? 'pixelated' : ''}`}
        whileHover={{ scale: 1.05 }}
      >
        {team.name}
      </motion.h2>
      
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        {team.description}
      </p>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {team.members.map((member, index) => (
          <motion.div
            key={member}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md
                     hover:shadow-xl transition-all duration-300
                     border-2 border-transparent hover:border-google-${team.color}
                     dark:hover:border-[var(--neon-${team.color})]
                     ${isPixelMode ? 'pixelated' : ''}
                     relative overflow-hidden
                     before:absolute before:inset-0 before:bg-gradient-to-r 
                     before:from-transparent before:via-white/20 before:to-transparent 
                     before:translate-x-[-100%] hover:before:translate-x-[100%] 
                     before:transition-transform before:duration-500`}
          >
            <h3 className={`text-xl font-semibold text-google-${team.color}
                         dark:text-[var(--neon-blue)]
                         hover:text-google-${team.color} transition-colors duration-300
                         relative z-10`}>
              {member}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default TeamSection;