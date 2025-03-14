import React from 'react';
import { motion } from 'framer-motion';
import { teams } from '../data';

interface TeamTabsProps {
  activeTeam: string;
  setActiveTeam: (id: string) => void;
  isPixelMode: boolean;
}

const TeamTabs: React.FC<TeamTabsProps> = ({ activeTeam, setActiveTeam, isPixelMode }) => {
  return (
    <div className="w-full overflow-x-auto pb-4 mb-8">
      <div className="flex space-x-2 min-w-max px-4">
        {teams.map((team) => (
          <motion.button
            key={team.id}
            onClick={() => setActiveTeam(team.id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300
                     ${activeTeam === team.id 
                       ? 'bg-google-blue text-white scale-105 shadow-lg dark:bg-[var(--neon-blue)]' 
                       : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'}
                     ${isPixelMode ? 'pixelated' : ''}
                     hover:transform hover:scale-105
                     relative overflow-hidden
                     before:absolute before:inset-0 before:bg-gradient-to-r 
                     before:from-transparent before:via-white/20 before:to-transparent 
                     before:translate-x-[-100%] hover:before:translate-x-[100%] 
                     before:transition-transform before:duration-500`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className={`${isPixelMode ? 'font-pixel' : 'font-sans'} relative z-10`}>
              {team.name}
            </span>
          </motion.button>
        ))}
      </div>
      {!activeTeam && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-4 text-gray-600 dark:text-gray-300"
        >
          👆 Click on a team to see its members
        </motion.p>
      )}
    </div>
  );
};

export default TeamTabs;