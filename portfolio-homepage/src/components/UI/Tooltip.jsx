import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Tooltip = ({ 
  content, 
  children, 
  position = 'top',
  delay = 0.5 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const showTooltip = () => {
    const id = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);
    setTimeoutId(id);
  };

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsVisible(false);
  };

  const getPositionStyles = () => {
    switch (position) {
      case 'top':
        return {
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginBottom: '8px'
        };
      case 'bottom':
        return {
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginTop: '8px'
        };
      case 'left':
        return {
          right: '100%',
          top: '50%',
          transform: 'translateY(-50%)',
          marginRight: '8px'
        };
      case 'right':
        return {
          left: '100%',
          top: '50%',
          transform: 'translateY(-50%)',
          marginLeft: '8px'
        };
      default:
        return {
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginBottom: '8px'
        };
    }
  };

  const getArrowStyles = () => {
    const arrowSize = '6px';
    switch (position) {
      case 'top':
        return {
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          borderLeft: `${arrowSize} solid transparent`,
          borderRight: `${arrowSize} solid transparent`,
          borderTop: `${arrowSize} solid rgba(0, 0, 0, 0.9)`,
        };
      case 'bottom':
        return {
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          borderLeft: `${arrowSize} solid transparent`,
          borderRight: `${arrowSize} solid transparent`,
          borderBottom: `${arrowSize} solid rgba(0, 0, 0, 0.9)`,
        };
      case 'left':
        return {
          left: '100%',
          top: '50%',
          transform: 'translateY(-50%)',
          borderTop: `${arrowSize} solid transparent`,
          borderBottom: `${arrowSize} solid transparent`,
          borderLeft: `${arrowSize} solid rgba(0, 0, 0, 0.9)`,
        };
      case 'right':
        return {
          right: '100%',
          top: '50%',
          transform: 'translateY(-50%)',
          borderTop: `${arrowSize} solid transparent`,
          borderBottom: `${arrowSize} solid transparent`,
          borderRight: `${arrowSize} solid rgba(0, 0, 0, 0.9)`,
        };
      default:
        return {
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          borderLeft: `${arrowSize} solid transparent`,
          borderRight: `${arrowSize} solid transparent`,
          borderTop: `${arrowSize} solid rgba(0, 0, 0, 0.9)`,
        };
    }
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      
      <AnimatePresence>
        {isVisible && content && (
          <motion.div
            className="absolute z-50 pointer-events-none"
            style={getPositionStyles()}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Tooltip content */}
            <div className="bg-black/90 backdrop-blur-sm text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap border border-white/10 shadow-xl">
              {content}
            </div>
            
            {/* Arrow */}
            <div
              className="absolute"
              style={getArrowStyles()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;