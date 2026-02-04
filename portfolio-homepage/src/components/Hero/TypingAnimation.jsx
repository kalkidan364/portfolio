import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ANIMATION_CONFIG } from '../../utils/constants';
import { prefersReducedMotion } from '../../utils/animations';

const TypingAnimation = ({ roles, speed = ANIMATION_CONFIG.typing.speed, pauseDuration = ANIMATION_CONFIG.typing.pauseDuration }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const currentRole = roles[currentRoleIndex];
  const reducedMotion = false; // Temporarily disable reduced motion check

  useEffect(() => {
    if (reducedMotion) {
      // If user prefers reduced motion, just show the first role
      setCurrentText(roles[0]);
      setShowCursor(false);
      return;
    }

    let timeout;

    if (isTyping) {
      // Typing effect
      if (currentText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        }, speed);
      } else {
        // Finished typing, pause then start erasing
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, pauseDuration);
      }
    } else {
      // Erasing effect
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, speed / 2); // Erase faster than typing
      } else {
        // Finished erasing, move to next role
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isTyping, currentRole, currentRoleIndex, roles, speed, pauseDuration, reducedMotion]);

  // Cursor blinking effect
  useEffect(() => {
    if (reducedMotion) return;

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, [reducedMotion]);

  return (
    <div className="relative inline-block min-h-[1.2em]">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          className="inline-block typing-text-content"
          style={{ 
            color: '#ffffff',
            fontWeight: 700
          }}
        >
          {currentText || '\u00A0'}
        </motion.span>
      </AnimatePresence>
      
      {/* Typing Cursor */}
      <motion.span
        className="inline-block w-0.5 h-[1em] ml-1"
        style={{
          background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
          opacity: showCursor ? 1 : 0
        }}
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};

export default TypingAnimation;