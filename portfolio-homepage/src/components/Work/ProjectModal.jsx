import { useEffect } from 'react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-700 shadow-2xl animate-modalSlideIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-110 group"
        >
          <svg className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header Section */}
        <div className={`relative p-8 md:p-12 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="relative z-10">
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-5xl mb-6 shadow-lg">
              {project.icon}
            </div>

            {/* Category Badge */}
            <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-4">
              {project.category}
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12">
          {/* Tech Stack */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">🛠️</span>
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className={`px-5 py-2.5 rounded-full bg-gradient-to-r ${project.gradient} text-white font-semibold text-sm shadow-lg hover:scale-110 transition-transform duration-300`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">✨</span>
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'User Authentication & Authorization',
                'Responsive Design for All Devices',
                'Real-time Data Updates',
                'Advanced Search & Filtering',
                'Secure Payment Integration',
                'Performance Optimized'
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Stats */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-3xl">📊</span>
              Project Stats
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Duration', value: '3 Months' },
                { label: 'Team Size', value: '5 People' },
                { label: 'Lines of Code', value: '10K+' },
                { label: 'Status', value: 'Completed' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-700/80 border border-gray-700/50 text-center hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className={`flex-1 min-w-[200px] px-8 py-4 rounded-full bg-gradient-to-r ${project.gradient} text-white font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Live Demo
            </button>
            <button className="flex-1 min-w-[200px] px-8 py-4 rounded-full bg-gray-800 border-2 border-gray-700 text-white font-semibold text-lg hover:bg-gray-700 hover:border-gray-600 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </button>
          </div>
        </div>
      </div>

      {/* Inline Styles for Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-modalSlideIn {
          animation: modalSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;
