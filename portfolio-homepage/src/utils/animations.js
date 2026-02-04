// Animation utilities and helper functions

import { ANIMATION_CONFIG } from './constants.js';

// Get animation speed multiplier based on user preference
export const getAnimationSpeed = (preference = 'normal') => {
  const speeds = {
    slow: 1.5,
    normal: 1,
    fast: 0.7
  };
  return speeds[preference] || 1;
};

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Create magnetic hover effect calculation
export const calculateMagneticOffset = (mouseX, mouseY, elementRect, strength = 0.3) => {
  const elementCenterX = elementRect.left + elementRect.width / 2;
  const elementCenterY = elementRect.top + elementRect.height / 2;
  
  const deltaX = mouseX - elementCenterX;
  const deltaY = mouseY - elementCenterY;
  
  const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  const maxDistance = 100; // Maximum distance for magnetic effect
  
  if (distance > maxDistance) return { x: 0, y: 0 };
  
  const force = (maxDistance - distance) / maxDistance;
  
  return {
    x: deltaX * force * strength,
    y: deltaY * force * strength
  };
};

// Smooth interpolation for animations
export const lerp = (start, end, factor) => {
  return start + (end - start) * factor;
};

// Easing functions
export const easing = {
  easeInOut: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeOut: (t) => t * (2 - t),
  easeIn: (t) => t * t,
  elastic: (t) => {
    if (t === 0 || t === 1) return t;
    const p = 0.3;
    const s = p / 4;
    return Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
  }
};

// Create ripple effect for button clicks
export const createRipple = (event, element) => {
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  const ripple = document.createElement('span');
  ripple.style.cssText = `
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple 0.6s linear;
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    pointer-events: none;
  `;
  
  element.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
};

// Add ripple animation CSS if not already added
export const addRippleStyles = () => {
  if (document.getElementById('ripple-styles')) return;
  
  const style = document.createElement('style');
  style.id = 'ripple-styles';
  style.textContent = `
    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
    
    .ripple-container {
      position: relative;
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);
};

// Throttle function for performance optimization
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Debounce function for performance optimization
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Generate random number within range
export const random = (min, max) => {
  return Math.random() * (max - min) + min;
};

// Generate random color for particles
export const randomColor = () => {
  const colors = [
    '#3b82f6', // blue
    '#8b5cf6', // purple  
    '#06b6d4', // cyan
    '#10b981', // emerald
    '#f59e0b', // amber
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Check if element is in viewport
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};