const JourneySection = () => {
  const experiences = [
    {
      year: '2025',
      title: '3rd Year Student',
      company: 'University',
      description: 'Currently in my third year, building full-stack web applications and expanding my knowledge in modern web technologies. Working on personal projects to apply what I learn.',
      skills: ['React', 'Node.js', 'Tailwind', 'JavaScript', 'Supabase'],
      color: 'purple',
      icon: '🎓',
      achievements: ['Building full-stack projects', 'Learning backend development', 'Mastering React & Node.js']
    },
    {
      year: '2024',
      title: 'Learning Web Development',
      company: 'Self-Study & Projects',
      description: 'Started my journey into web development before my 3rd year. Learned the fundamentals of frontend and backend development through online courses and hands-on projects.',
      skills: ['JavaScript', 'HTML', 'CSS', 'SQL', 'Git'],
      color: 'cyan',
      icon: '💻',
      achievements: ['Built first web applications', 'Learned JavaScript fundamentals', 'Started with React']
    },
    {
      year: '2023',
      title: 'Beginning the Journey',
      company: 'University Studies',
      description: 'Started my computer science education and discovered my passion for web development. Began learning programming fundamentals and problem-solving skills.',
      skills: ['Programming Basics', 'Problem Solving', 'Algorithms', 'Data Structures'],
      color: 'orange',
      icon: '🌱',
      achievements: ['Discovered passion for coding', 'Built strong foundations', 'Started university journey']
    }
  ];

  const milestones = [
    { icon: '🎓', label: 'Education', value: '3rd Year Student' },
    { icon: '💻', label: 'Projects', value: 'Learning & Building' },
    { icon: '📚', label: 'Technologies', value: '6+ Learned' },
    { icon: '🚀', label: 'Journey', value: '2+ Years' }
  ];

  return (
    <section 
      id="journey" 
      className="min-h-screen w-screen flex-shrink-0 bg-black px-6 py-12 relative overflow-y-auto"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
              <span className="text-xl">✨</span>
              <span className="text-purple-400 font-semibold text-sm">Career Timeline</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From curious beginner to aspiring developer, here's my learning journey in web development
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-xl p-4 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:to-cyan-500/10 rounded-xl transition-all duration-300" />
              <div className="relative z-10 text-center">
                <div className="text-3xl mb-2">{milestone.icon}</div>
                <div className="text-xs text-gray-500 mb-1">{milestone.label}</div>
                <div className="text-sm font-bold text-white">{milestone.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 transform -translate-x-1/2" />

          {/* Experience Cards */}
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 border-3 border-black z-20 shadow-lg shadow-purple-500/50" />

                {/* Content Card */}
                <div className="w-full md:w-5/12 group">
                  <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-5 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-[1.02]">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${
                      exp.color === 'purple' ? 'from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10' :
                      exp.color === 'cyan' ? 'from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10' :
                      'from-orange-500/0 to-red-500/0 group-hover:from-orange-500/10 group-hover:to-red-500/10'
                    } transition-all duration-500`} />

                    <div className="relative z-10">
                      {/* Icon & Year Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                          exp.color === 'purple' ? 'from-purple-500 to-pink-500' :
                          exp.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                          'from-orange-500 to-red-500'
                        } flex items-center justify-center text-2xl shadow-lg`}>
                          {exp.icon}
                        </div>
                        <div className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${
                          exp.color === 'purple' ? 'from-purple-500 to-pink-500' :
                          exp.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                          'from-orange-500 to-red-500'
                        } text-white font-bold text-base shadow-lg`}>
                          {exp.year}
                        </div>
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className={`text-base font-semibold mb-3 bg-gradient-to-r ${
                        exp.color === 'purple' ? 'from-purple-400 to-pink-400' :
                        exp.color === 'cyan' ? 'from-cyan-400 to-blue-400' :
                        'from-orange-400 to-red-400'
                      } bg-clip-text text-transparent`}>
                        {exp.company}
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <div className="text-xs font-semibold text-gray-500 mb-2">Key Achievements:</div>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${
                                exp.color === 'purple' ? 'bg-purple-400' :
                                exp.color === 'cyan' ? 'bg-cyan-400' :
                                'bg-orange-400'
                              }`} />
                              <span className="text-gray-300 text-xs">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <div className="text-xs font-semibold text-gray-500 mb-2">Technologies:</div>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-300 text-xs font-medium hover:border-gray-600 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="mt-16">
          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 overflow-hidden">
              {/* Decorative Quotes */}
              <div className="absolute top-4 left-4 text-5xl text-purple-500/20 font-serif leading-none">"</div>
              <div className="absolute bottom-4 right-4 text-5xl text-cyan-500/20 font-serif leading-none">"</div>

              {/* Quote Content */}
              <div className="relative z-10 text-center">
                <p className="text-xl md:text-2xl font-light italic text-gray-200 mb-4 leading-relaxed">
                  Every expert was once a beginner. Every master was once a student.
                </p>
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
                  <div className="h-px w-12 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                </div>
                <p className="text-gray-400 text-base font-medium">— Keep Learning, Keep Growing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-base mb-4">Interested in collaborating or connecting?</p>
          <a href="#contact">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold text-base hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300">
              Let's Connect
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
