import { useState } from 'react';
import ProjectModal from './ProjectModal';
import netflixImage from '../../assets/10001.png';
import amazonImage from '../../assets/ama.png';
import uniImage from '../../assets/uni.png';
import abeImage from '../../assets/abe.png';
import webImage from '../../assets/web.png';
import evanImage from '../../assets/evan.png';

const WorkSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    console.log('Opening modal for project:', project.title);
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const projects = [
    {
      id: 1,
      title: 'Netflix Clone',
      category: 'Streaming Platform',
      description: 'Full-stack Netflix clone with user authentication, movie browsing, and video streaming capabilities',
      tech: ['React', 'Node.js', 'API'],
      gradient: 'from-red-500 to-pink-600',
      icon: '🎬',
      image: netflixImage
    },
    {
      id: 2,
      title: 'Amazon Clone',
      category: 'E-Commerce',
      description: 'Complete e-commerce platform with shopping cart, payment integration, and order management',
      tech: ['React', 'Firebase', 'Stripe', 'Redux'],
      gradient: 'from-orange-500 to-yellow-500',
      icon: '🛒',
      image: amazonImage
    },
    {
      id: 3,
      title: 'University Website',
      category: 'Educational Platform',
      description: 'Modern university website with course management, student portal, and administrative features',
      tech: ['React', 'JavaScript', 'Tailwind', 'API'],
      gradient: 'from-blue-500 to-cyan-500',
      icon: '🎓',
      image: uniImage
    },
    {
      id: 4,
      title: 'Abegaraj',
      category: 'Web Application',
      description: 'Custom web application with advanced features and modern user interface',
      tech: ['React', 'Node.js', 'Express', 'MySQL'],
      gradient: 'from-purple-500 to-indigo-600',
      icon: '🚗',
      image: abeImage
    },
    {
      id: 5,
      title: 'Evangadi Forum',
      category: 'Community Platform',
      description: 'Interactive forum platform for Q&A, discussions, and community engagement',
      tech: ['React', 'Node.js', 'MySQL', 'JWT'],
      gradient: 'from-green-500 to-emerald-600',
      icon: '💬',
      image: evanImage
    },
    {
      id: 6,
      title: 'Blog Platform',
      category: 'Content Management',
      description: 'Modern blogging platform with rich text editor, categories, and user management',
      tech: ['React', 'MySql', 'Express', 'Node.js'],
      gradient: 'from-pink-500 to-rose-600',
      icon: '📝',
      image: webImage
    }
  ];

  return (
    <section 
      id="work" 
      className="min-h-screen w-screen flex-shrink-0 bg-black px-8 py-12 relative overflow-y-auto"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full py-6">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-base">Projects that showcase my skills</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-gray-700 hover:transform hover:scale-105">
                {/* Background Image (for Netflix and Amazon) */}
                {project.image && (
                  <div className="absolute inset-0">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-gray-900/40" />
                  </div>
                )}
                
                {/* Gradient Glow on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10 p-4 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl mb-3 transform group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>

                  {/* Category Badge */}
                  <div className="mb-2">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs leading-relaxed mb-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-300 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button - Shows on Hover */}
                  <div className={`mt-4 transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    <button 
                      onClick={() => openModal(project)}
                      className={`w-full py-1.5 rounded-lg bg-gradient-to-r ${project.gradient} text-white text-sm font-semibold hover:shadow-lg transition-shadow duration-300`}
                    >
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-400 mb-3 text-sm">Want to see more?</p>
          <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default WorkSection;
