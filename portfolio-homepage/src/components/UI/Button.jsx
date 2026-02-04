import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BUTTON_VARIANTS, USER_CONFIG } from '../../utils/constants';
import { createRipple, addRippleStyles, calculateMagneticOffset } from '../../utils/animations';

const Button = ({ 
  variant = BUTTON_VARIANTS.PRIMARY, 
  children, 
  onClick, 
  className = '', 
  disabled = false,
  ...props 
}) => {
  const buttonRef = useRef(null);
  const magneticRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    addRippleStyles();
  }, []);

  const getVariantStyles = () => {
    const baseStyles = "relative px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform ripple-container";
    
    switch (variant) {
      case BUTTON_VARIANTS.PRIMARY:
        return `${baseStyles} bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500 hover:scale-105 hover:shadow-2xl glow-primary`;
      
      case BUTTON_VARIANTS.SECONDARY:
        return `${baseStyles} bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white hover:scale-105 hover:shadow-xl`;
      
      case BUTTON_VARIANTS.TERTIARY:
        return `${baseStyles} bg-transparent text-gray-300 hover:text-white hover:bg-white/10 hover:scale-105`;
      
      default:
        return baseStyles;
    }
  };

  const handleClick = (e) => {
    if (disabled) return;
    
    // Create ripple effect
    createRipple(e, buttonRef.current);
    
    // Play sound if enabled
    if (USER_CONFIG.preferences.enableSounds) {
      playClickSound();
    }
    
    // Call the onClick handler
    if (onClick) onClick(e);
  };

  const playClickSound = () => {
    try {
      // Create a simple click sound using Web Audio API
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
      // Silently fail if Web Audio API is not supported
      console.log('Audio not supported');
    }
  };

  const handleMouseMove = (e) => {
    if (!buttonRef.current || disabled) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const offset = calculateMagneticOffset(e.clientX, e.clientY, rect, 0.3);
    magneticRef.current = offset;
  };

  const handleMouseLeave = () => {
    magneticRef.current = { x: 0, y: 0 };
  };

  return (
    <motion.button
      ref={buttonRef}
      className={`${getVariantStyles()} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      animate={{
        x: magneticRef.current.x,
        y: magneticRef.current.y,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
      whileHover={{
        scale: disabled ? 1 : 1.05,
      }}
      whileTap={{
        scale: disabled ? 1 : 0.95,
      }}
      {...props}
    >
      {/* Glow effect overlay */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: variant === BUTTON_VARIANTS.PRIMARY 
            ? 'linear-gradient(45deg, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))'
            : 'rgba(59, 130, 246, 0.2)',
          filter: 'blur(8px)',
        }}
        whileHover={{
          scale: 1.2,
        }}
      />
      
      {/* Button content */}
      <span className="relative z-10">
        {children}
      </span>
    </motion.button>
  );
};

export default Button;