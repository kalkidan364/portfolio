import { motion } from 'framer-motion';
import { useState } from 'react';

const CTAButtons = ({ adaptedContent, onHover }) => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const buttons = [
    { 
      text: adaptedContent?.ctaText?.work || 'View Work', 
      href: '#work', 
      primary: true,
      interest: 'work'
    },
    { 
      text: adaptedContent?.ctaText?.cv || 'Download CV', 
      href: '/cv.pdf', 
      primary: false,
      interest: 'cv'
    },
    { 
      text: adaptedContent?.ctaText?.contact || 'Contact', 
      href: '#contact', 
      primary: false,
      interest: 'contact'
    }
  ];

  return (
    <div className="flex gap-4 justify-start">
      {buttons.map((button, index) => (
        <motion.a
          key={button.text}
          href={button.href}
          className={`
            relative px-6 py-3 rounded-lg border transition-all duration-200 flex items-center gap-2
            ${button.primary 
              ? 'border-purple-400 text-purple-400 hover:bg-purple-400/10 hover:border-purple-300' 
              : 'border-gray-600 text-gray-300 hover:border-gray-400 hover:bg-gray-800/50'
            }
            focus:outline-none focus:ring-2 focus:ring-purple-400/50
          `}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + index * 0.1 }}
          onMouseEnter={() => {
            setHoveredButton(index);
            onHover?.(button.interest);
          }}
          onMouseLeave={() => {
            setHoveredButton(null);
            onHover?.(null);
          }}
        >
          <motion.span
            key={button.text} // Re-animate when text changes
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {button.text}
          </motion.span>
          
          {/* Navigation Arrow Icon */}
          <motion.svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            initial={{ opacity: 0, x: -10 }}
            animate={{ 
              opacity: hoveredButton === index ? 1 : 0,
              x: hoveredButton === index ? 0 : -10
            }}
            transition={{ duration: 0.2 }}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M13 7l5 5m0 0l-5 5m5-5H6" 
            />
          </motion.svg>
        </motion.a>
      ))}
    </div>
  );
};

export default CTAButtons;