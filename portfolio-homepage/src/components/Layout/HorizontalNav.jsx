import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HorizontalNav = () => {
  const [isHoveringRight, setIsHoveringRight] = useState(false);
  const [isHoveringLeft, setIsHoveringLeft] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['hero', 'about', 'journey', 'work', 'contact'];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const windowWidth = window.innerWidth;
      
      // Show right arrow when mouse is near right side (within 100px from right edge)
      if (e.clientX > windowWidth - 100) {
        setIsHoveringRight(true);
      } else {
        setIsHoveringRight(false);
      }

      // Show left arrow when mouse is near left side (within 100px from left edge)
      if (e.clientX < 100) {
        setIsHoveringLeft(true);
      } else {
        setIsHoveringLeft(false);
      }
    };

    // Track current section
    const container = document.querySelector('.horizontal-scroll-container');
    const handleScroll = () => {
      if (container) {
        const scrollLeft = container.scrollLeft;
        const sectionWidth = window.innerWidth;
        const section = Math.round(scrollLeft / sectionWidth);
        setCurrentSection(section);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scrollToNext = () => {
    const container = document.querySelector('.horizontal-scroll-container');
    if (container && currentSection < sections.length - 1) {
      const nextSection = document.getElementById(sections[currentSection + 1]);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      }
    }
  };

  const scrollToPrevious = () => {
    const container = document.querySelector('.horizontal-scroll-container');
    if (container && currentSection > 0) {
      const prevSection = document.getElementById(sections[currentSection - 1]);
      if (prevSection) {
        prevSection.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      }
    }
  };

  return (
    <>
      {/* Right Arrow - Next Section */}
      <AnimatePresence>
        {isHoveringRight && currentSection < sections.length - 1 && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50"
          >
            <motion.button
              onClick={scrollToNext}
              className="group relative p-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 blur-xl opacity-50"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Arrow icon */}
              <svg
                className="w-6 h-6 text-white relative z-10 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>

            {/* Section indicator dots */}
            <div className="flex flex-col items-center gap-2 mt-4">
              {sections.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSection
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 w-2 h-6'
                      : 'bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.5 }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left Arrow - Previous Section */}
      <AnimatePresence>
        {isHoveringLeft && currentSection > 0 && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-8 top-1/2 transform -translate-y-1/2 z-50"
          >
            <motion.button
              onClick={scrollToPrevious}
              className="group relative p-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-xl opacity-50"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Arrow icon */}
              <svg
                className="w-6 h-6 text-white relative z-10 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            {/* Section indicator dots */}
            <div className="flex flex-col items-center gap-2 mt-4">
              {sections.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSection
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 w-2 h-6'
                      : 'bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.5 }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HorizontalNav;
