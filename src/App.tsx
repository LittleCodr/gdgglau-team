import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import TeamMemberCard from './components/TeamMemberCard';
import Footer from './components/Footer';
import SecretButton from './components/SecretButton';
import EasterEgg from './components/EasterEgg';
import TeamTabs from './components/TeamTabs';
import TeamSection from './components/TeamSection';
import CookieConsent from './components/CookieConsent';
import { teamMembers, teams } from './data';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isPixelMode, setIsPixelMode] = useState(false);
  const [isEasterEggVisible, setIsEasterEggVisible] = useState(false);
  const [activeTeam, setActiveTeam] = useState('');
  const [showTeamMembers, setShowTeamMembers] = useState(false);
  const scrollRef = useRef(null);
  
  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');

    // Add ripple effect
    const handleClick = (e: MouseEvent) => {
      const ripple = document.createElement('div');
      ripple.classList.add('ripple');
      const rect = document.body.getBoundingClientRect();
      const x = e.clientX - rect.left - 50; // Center the ripple
      const y = e.clientY - rect.top - 50;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      document.body.appendChild(ripple);

      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.1], [0, -50]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const togglePixelMode = () => {
    setIsPixelMode(!isPixelMode);
  };

  const handleTeamClick = (teamId: string) => {
    setActiveTeam(teamId);
    setShowTeamMembers(true);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`} ref={scrollRef}>
      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        
        <main className="container mx-auto px-4 sm:px-6 pt-32 pb-20">
          <motion.div
            style={{ opacity: titleOpacity, y: titleY }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 
                         bg-gradient-to-r from-google-blue via-google-red to-google-yellow 
                         bg-clip-text text-transparent animate-background-shine 
                         bg-[length:200%_100%] dark:cyberpunk-text">
              Google Developer Group
            </h1>
            <h2 className="text-2xl sm:text-3xl text-google-green dark:text-[var(--neon-green)]
                         dark:cyberpunk-text">
              GLA University Team
            </h2>

            <button
              onClick={togglePixelMode}
              className="mt-4 px-6 py-2 bg-google-blue dark:bg-transparent text-white
                       rounded-lg transition-all duration-300
                       hover:bg-google-green dark:hover:bg-[var(--neon-blue)]
                       dark:border-2 dark:border-[var(--neon-blue)]
                       dark:text-[var(--neon-blue)] dark:hover:text-white
                       dark:cyberpunk-text"
            >
              {isPixelMode ? 'Disable' : 'Enable'} Pixel Mode
            </button>
          </motion.div>

          <TeamTabs
            activeTeam={activeTeam}
            setActiveTeam={handleTeamClick}
            isPixelMode={isPixelMode}
          />

          <AnimatePresence mode="wait">
            {showTeamMembers && activeTeam && (
              <TeamSection
                key={activeTeam}
                team={teams.find(t => t.id === activeTeam)!}
                isPixelMode={isPixelMode}
              />
            )}
          </AnimatePresence>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                member={member}
                index={index}
                isPixelMode={isPixelMode}
              />
            ))}
          </div>
        </main>

        <Footer />
        <SecretButton onClick={() => setIsEasterEggVisible(true)} />
        <EasterEgg 
          isVisible={isEasterEggVisible}
          onClose={() => setIsEasterEggVisible(false)}
        />
        <CookieConsent />
      </div>
    </div>
  );
}

export default App;