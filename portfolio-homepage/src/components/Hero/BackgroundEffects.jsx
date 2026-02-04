import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BACKGROUND_STYLES, CODE_SNIPPETS } from '../../utils/constants';
import { prefersReducedMotion } from '../../utils/animations';

const BackgroundEffects = ({ style = BACKGROUND_STYLES.MESH, className = '' }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const reducedMotion = prefersReducedMotion();

  // Particle system for interactive background
  useEffect(() => {
    if (style !== BACKGROUND_STYLES.PARTICLES || reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 50;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Mouse interaction
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          this.vx += dx * force * 0.001;
          this.vy += dy * force * 0.001;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    particlesRef.current = particles;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [style, reducedMotion]);

  const renderBackground = () => {
    switch (style) {
      case BACKGROUND_STYLES.MESH:
        return (
          <div className={`absolute inset-0 mesh-gradient ${className}`} />
        );

      case BACKGROUND_STYLES.PARTICLES:
        return (
          <canvas
            ref={canvasRef}
            className={`absolute inset-0 particle-canvas ${className}`}
          />
        );

      case BACKGROUND_STYLES.GLASSMORPHISM:
        return (
          <div className={`absolute inset-0 ${className}`}>
            {/* Multiple glassmorphism layers */}
            <motion.div
              className="absolute top-20 left-20 w-96 h-96 glass rounded-full"
              animate={{ 
                y: reducedMotion ? 0 : [-20, 20, -20],
                rotate: reducedMotion ? 0 : [0, 180, 360] 
              }}
              transition={{ 
                duration: reducedMotion ? 0 : 20, 
                repeat: reducedMotion ? 0 : Infinity, 
                ease: "linear" 
              }}
            />
            <motion.div
              className="absolute top-40 right-32 w-64 h-64 glass-dark rounded-lg"
              animate={{ 
                y: reducedMotion ? 0 : [20, -20, 20],
                rotate: reducedMotion ? 0 : [0, -180, -360] 
              }}
              transition={{ 
                duration: reducedMotion ? 0 : 15, 
                repeat: reducedMotion ? 0 : Infinity, 
                ease: "linear" 
              }}
            />
            <motion.div
              className="absolute bottom-32 left-1/3 w-80 h-80 glass rounded-2xl"
              animate={{ 
                x: reducedMotion ? 0 : [-30, 30, -30],
                y: reducedMotion ? 0 : [-10, 10, -10] 
              }}
              transition={{ 
                duration: reducedMotion ? 0 : 25, 
                repeat: reducedMotion ? 0 : Infinity, 
                ease: "easeInOut" 
              }}
            />
          </div>
        );

      case BACKGROUND_STYLES.CODE:
        return (
          <div className={`absolute inset-0 overflow-hidden ${className}`}>
            {CODE_SNIPPETS.map((snippet, index) => (
              <motion.pre
                key={index}
                className="absolute code-bg text-blue-500/20 font-mono text-sm"
                style={{
                  top: `${Math.random() * 80}%`,
                  left: `${Math.random() * 80}%`,
                }}
                animate={{
                  y: reducedMotion ? 0 : [-50, 50, -50],
                  opacity: reducedMotion ? 0.1 : [0.05, 0.15, 0.05]
                }}
                transition={{
                  duration: reducedMotion ? 0 : 10 + index * 2,
                  repeat: reducedMotion ? 0 : Infinity,
                  ease: "easeInOut"
                }}
              >
                {snippet}
              </motion.pre>
            ))}
          </div>
        );

      default:
        return (
          <div className={`absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 ${className}`} />
        );
    }
  };

  return (
    <>
      {renderBackground()}
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />
    </>
  );
};

export default BackgroundEffects;