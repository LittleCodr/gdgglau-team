import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
  isPixelMode?: boolean;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index, isPixelMode = false }) => {
  const colors = ['google-blue', 'google-red', 'google-yellow', 'google-green'];
  const color = colors[index % colors.length];
  const cardRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Create particles
  useEffect(() => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const particles: HTMLDivElement[] = [];
    
    for (let i = 0; i < 5; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle dark:opacity-100 opacity-0';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      particles.push(particle);
      card.appendChild(particle);
    }

    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  // Voice effect on hover
  const playVoiceEffect = () => {
    const synth = window.speechSynthesis;
    if (synth.speaking) return;

    const utterance = new SpeechSynthesisUtterance(member.name);
    utterance.pitch = 0.5 + (index * 0.2);
    utterance.rate = 0.8;
    synth.speak(utterance);
  };

  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      scale={1.02}
      transitionSpeed={2000}
      gyroscope={true}
    >
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="relative group"
        onHoverStart={playVoiceEffect}
      >
        <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 
                      transform transition-all duration-500 
                      hover:translate-x-4 hover:-translate-y-4
                      border-4 border-black dark:border-[var(--neon-pink)]
                      shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
                      dark:shadow-[8px_8px_0px_0px_var(--neon-blue)]
                      hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]
                      dark:hover:shadow-[16px_16px_0px_0px_var(--neon-green)]
                      overflow-hidden dark:cyberpunk-border`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent 
                       translate-x-[-100%] animate-background-shine group-hover:translate-x-[100%] 
                       transition-transform duration-1000" />
          
          <div className="relative mb-6 overflow-hidden rounded-lg
                       before:absolute before:inset-0 before:bg-gradient-to-r 
                       before:from-transparent before:via-white/20 before:to-transparent 
                       before:translate-x-[-100%] before:animate-background-shine 
                       before:group-hover:translate-x-[100%] before:transition-transform 
                       before:duration-1000">
            <div className={`absolute inset-0 bg-${color} opacity-10 group-hover:opacity-20 
                         transition-opacity duration-300 dark:bg-[var(--neon-blue)] dark:opacity-30`} />
            <img
              src={member.photo}
              alt={member.name}
              className={`w-full h-64 object-cover transform transition-all duration-700 
                       group-hover:scale-110 group-hover:rotate-2 dark:cyberpunk-glow
                       ${isPixelMode ? 'pixelated' : ''}`}
              style={isPixelMode ? {
                imageRendering: 'pixelated',
                filter: 'brightness(1.2) contrast(1.1)'
              } : {}}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10"
          >
            <h3 className={`text-2xl font-bold mb-2 text-${color} dark:cyberpunk-text
                         dark:text-[var(--neon-blue)] transition-all duration-300
                         group-hover:animate-glitch`}>
              {member.name}
            </h3>
            <p className="text-gray-600 dark:text-[var(--neon-pink)] mb-4 font-medium
                       dark:cyberpunk-text transition-all duration-300">
              {member.role}
            </p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center space-x-2 text-${color} 
                       dark:text-[var(--neon-green)]
                       hover:text-black dark:hover:text-white
                       transition-all duration-300 group-hover:translate-x-2
                       dark:cyberpunk-text`}
            >
              <Linkedin className="w-5 h-5" />
              <span>Connect on LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default TeamMemberCard;