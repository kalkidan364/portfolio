import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../About/AboutSection.css';
import logo from '../../assets/download.png';
import TypingAnimation from './TypingAnimation';

const HeroSection = () => {
  // Split name into individual letters for animation
  const firstName = "Kalkidan".split("");
  const lastName = "Mengistu".split("");
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Mark animation as complete after all letters have animated
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1200); // After last letter animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-orb floating-orb-1"></div>
        <div className="floating-orb floating-orb-2"></div>
        <div className="floating-orb floating-orb-3"></div>
      </div>

      {/* Logo - Positioned on the left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-4 left-4 z-20"
      >
        <motion.img 
          src={logo} 
          alt="Logo" 
          className="w-12 h-12 md:w-14 md:h-14 object-contain mix-blend-screen"
          style={{ 
            filter: 'brightness(1.2) contrast(1.1)',
            backgroundColor: 'transparent'
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <div className="text-center relative z-10">

        {/* Name - Centerpiece with Ultra-Enhanced Dynamics */}
        <div className={`name-hover ${animationComplete ? 'animation-complete' : ''}`}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl name-typography-unique text-white leading-tight tracking-tight relative">
            {/* First Name - Advanced letter by letter animation */}
            <span className="inline-block mr-2 md:mr-4 first-name-container">
              {firstName.map((letter, index) => (
                <span
                  key={`first-${index}`}
                  className="name-letter-advanced"
                  style={{ 
                    animationDelay: `${0.2 + index * 0.08}s`,
                    '--letter-index': index 
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>
            
            {/* Last Name - Ultra-special animation with gradient and effects */}
            <span className="inline-block lastname-container">
              {lastName.map((letter, index) => (
                <span
                  key={`last-${index}`}
                  className="lastname-letter-advanced"
                  style={{ 
                    animationDelay: `${0.8 + index * 0.06}s`,
                    '--letter-index': index 
                  }}
                >
                  {letter}
                </span>
              ))}
            </span>

            {/* Decorative elements */}
            <div className="name-decoration name-decoration-left"></div>
            <div className="name-decoration name-decoration-right"></div>
          </h1>
        </div>

        {/* Enhanced tagline with typing effect - Ultra Beautiful Design */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.8, duration: 1, ease: "easeOut" }}
          className="mt-4 md:mt-5"
        >
          <div className="role-badge-container">
            {/* Animated background glow */}
            <div className="role-badge-glow"></div>
            <div className="role-badge-glow-2"></div>
            
            {/* Main badge content */}
            <div className="role-badge-inner">
              {/* Decorative corner accents */}
              <div className="role-corner role-corner-tl"></div>
              <div className="role-corner role-corner-tr"></div>
              <div className="role-corner role-corner-bl"></div>
              <div className="role-corner role-corner-br"></div>
              
              {/* Prefix with icon */}
              <span className="role-badge-prefix">
                <svg className="role-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>I'm a</span>
              </span>
              
              {/* Animated divider */}
              <div className="role-divider">
                <div className="role-divider-line"></div>
              </div>
              
              {/* Typing animation with enhanced styling */}
              <span className="role-badge-text">
                <TypingAnimation 
                  roles={["Senior Developer", "Full Stack Developer", "Junior Developer", "Intern Developer"]}
                  speed={80}
                  pauseDuration={2500}
                />
              </span>
            </div>
            
            {/* Animated border particles */}
            <div className="role-particle role-particle-1"></div>
            <div className="role-particle role-particle-2"></div>
            <div className="role-particle role-particle-3"></div>
            <div className="role-particle role-particle-4"></div>
          </div>
        </motion.div>

        {/* Floating accent elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="mt-4 flex justify-center space-x-2"
        >
          <div className="accent-dot accent-dot-1"></div>
          <div className="accent-dot accent-dot-2"></div>
          <div className="accent-dot accent-dot-3"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;