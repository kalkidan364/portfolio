import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import profileImage from '../../assets/image.png';

const AboutSection = () => {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="min-h-screen relative overflow-hidden bg-black"
    >
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 py-12"
        style={{ opacity }}
      >
        {/* Section Title */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1 
            className="text-3xl md:text-4xl font-bold mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              About
            </span>
          </motion.h1>
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Hero Header with 3D Effect */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-5 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Profile Image with Advanced Effects */}
            <div className="relative w-32 h-32 mx-auto">
              {/* Rotating Border */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #a855f7, #06b6d4, #f59e0b, #ec4899, #a855f7)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-full blur-2xl"
                style={{
                  background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6), transparent)',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Image Container */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-black bg-gray-900 shadow-2xl">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
              Kalkidan Mengistu
            </span>
          </motion.h2>
          
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-purple-400" />
            <p className="text-lg text-gray-400 font-light tracking-wider">
              Software Engineer
            </p>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400" />
          </motion.div>

          <motion.p 
            className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            I approach software as a system of decisions, not just code.
          </motion.p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          
          {/* Card 1: Working Assumptions - Large */}
          <motion.div
            className="lg:col-span-2 group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="relative h-full p-5 rounded-2xl bg-gradient-to-br from-purple-900/20 to-purple-600/10 border border-purple-500/20 backdrop-blur-xl overflow-hidden hover:border-purple-500/40 transition-all duration-500">
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1), transparent 70%)',
                }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-xl">💡</span>
                  </motion.div>
                  <h3 className="text-lg font-bold text-purple-400">Working Assumptions</h3>
                </div>
                
                <div className="space-y-3">
                  {[
                    'Code should explain itself',
                    'Simplicity beats flexibility by default',
                    'Every abstraction must earn its place',
                    'Tradeoffs should be visible, not hidden'
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 group/item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.div
                        className="mt-2 w-2 h-2 rounded-full bg-purple-400"
                        whileHover={{ scale: 1.5 }}
                      />
                      <p className="text-gray-300 text-sm leading-relaxed group-hover/item:text-white transition-colors">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Skills - Compact */}
          <motion.div
            className="group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative h-full p-5 rounded-2xl bg-gradient-to-br from-cyan-900/20 to-cyan-600/10 border border-cyan-500/20 backdrop-blur-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-500">
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.1), transparent 70%)',
                }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-xl">🛠️</span>
                  </motion.div>
                  <h3 className="text-lg font-bold text-cyan-400">Tech Stack</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'React', 'Tailwind', 'Node.js', 'Express', 'Databases'].map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-medium"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i }}
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Things I Stopped Doing */}
          <motion.div
            className="group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="relative h-full p-5 rounded-2xl bg-gradient-to-br from-pink-900/20 to-pink-600/10 border border-pink-500/20 backdrop-blur-xl overflow-hidden hover:border-pink-500/40 transition-all duration-500">
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.1), transparent 70%)',
                }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-xl">🚫</span>
                  </motion.div>
                  <h3 className="text-lg font-bold text-pink-400">No Longer Do</h3>
                </div>
                
                <div className="space-y-3">
                  {[
                    'Chase patterns first',
                    'Premature optimization',
                    'Hidden complexity',
                    'Hypothetical scale'
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 group/item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.div
                        className="mt-1.5 w-2 h-2 rounded-full bg-pink-400"
                        whileHover={{ scale: 1.5 }}
                      />
                      <p className="text-gray-300 leading-relaxed group-hover/item:text-white transition-colors">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Common Issues - Large */}
          <motion.div
            className="lg:col-span-2 group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative h-full p-5 rounded-2xl bg-gradient-to-br from-orange-900/20 to-orange-600/10 border border-orange-500/20 backdrop-blur-xl overflow-hidden hover:border-orange-500/40 transition-all duration-500">
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(249, 115, 22, 0.1), transparent 70%)',
                }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-xl">⚠️</span>
                  </motion.div>
                  <h3 className="text-lg font-bold text-orange-400">Common Project Issues</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    'Requirements change mid-build',
                    'Code ownership becomes unclear',
                    'Small decisions compound',
                    '"Temporary" solutions stay forever'
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 group/item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.div
                        className="mt-1.5 w-2 h-2 rounded-full bg-orange-400"
                        whileHover={{ scale: 1.5 }}
                      />
                      <p className="text-gray-300 leading-relaxed group-hover/item:text-white transition-colors">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Code Reading Approach */}
          <motion.div
            className="group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="relative h-full p-5 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-emerald-600/10 border border-emerald-500/20 backdrop-blur-xl overflow-hidden hover:border-emerald-500/40 transition-all duration-500">
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.1), transparent 70%)',
                }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-xl">📖</span>
                  </motion.div>
                  <h3 className="text-lg font-bold text-emerald-400">Code Reading</h3>
                </div>
                
                <div className="space-y-3">
                  {[
                    'Identify boundaries',
                    'Trace data flow',
                    'Locate invariants',
                    'Mental refactoring'
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3 group/item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.div
                        className="mt-1.5 w-2 h-2 rounded-full bg-emerald-400"
                        whileHover={{ scale: 1.5 }}
                      />
                      <p className="text-gray-300 leading-relaxed group-hover/item:text-white transition-colors">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Expertise - Full Width Showcase */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Technical Expertise
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'Frontend Development', level: 95, icon: '⚛️' },
              { name: 'Backend Architecture', level: 88, icon: '🔧' },
              { name: 'Database Design', level: 85, icon: '💾' },
              { name: 'System Design', level: 90, icon: '🏗️' },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group relative p-4 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50 backdrop-blur-xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, borderColor: 'rgba(168, 85, 247, 0.5)' }}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <motion.span 
                        className="text-2xl"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {skill.icon}
                      </motion.span>
                      <span className="text-base font-semibold text-white">{skill.name}</span>
                    </div>
                    <motion.span
                      className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{
                        background: `linear-gradient(to right, ${
                          index === 0 ? '#a855f7, #ec4899' :
                          index === 1 ? '#06b6d4, #3b82f6' :
                          index === 2 ? '#10b981, #059669' :
                          '#f97316, #ea580c'
                        })`
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                    />
                    {/* Shimmer */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.3 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          className="text-center pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <p className="text-gray-400 text-base">
            This page explains how I think. My work shows what I build.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
