const JourneySection = () => {
  const experiences = [
    {
      year: '2024',
      title: 'Senior Developer',
      company: 'Tech Company',
      description: 'Leading development of scalable web applications with cutting-edge technologies. Architecting solutions that serve millions of users.',
      skills: ['React', 'Node.js', 'AWS', 'TypeScript', 'Docker'],
      color: 'purple',
      icon: '💼',
      achievements: ['Led team of 5 developers', 'Reduced load time by 60%', 'Implemented CI/CD pipeline']
    },
    {
      year: '2023',
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      description: 'Built modern web solutions from concept to deployment. Collaborated with cross-functional teams to deliver high-quality products.',
      skills: ['TypeScript', 'MongoDB', 'Express', 'React', 'Docker'],
      color: 'cyan',
      icon: '🚀',
      achievements: ['Built 3 major features', 'Improved API performance', 'Mentored junior developers']
    },
    {
      year: '2022',
      title: 'Junior Developer',
      company: 'Digital Agency',
      description: 'Started professional journey building responsive websites and learning industry best practices. Contributed to multiple client projects.',
      skills: ['JavaScript', 'CSS', 'HTML', 'Git', 'REST APIs'],
      color: 'orange',
      icon: '🎨',
      achievements: ['Completed 10+ projects', 'Learned modern frameworks', 'Collaborated with designers']
    }
  ];

  const milestones = [
    { icon: '🎓', label: 'Education', value: 'Computer Science' },
    { icon: '💻', label: 'Projects', value: '50+ Completed' },
    { icon: '🏆', label: 'Awards', value: 'Top Performer' },
    { icon: '👥', label: 'Teams', value: '3 Companies' }
  ];

  return (
    <section 
      id="journey" 
      className="min-h-screen w-screen flex-shrink-0 bg-black px-6 py-20 relative overflow-y-auto"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
              <span className="text-2xl">✨</span>
              <span className="text-purple-400 font-semibold">Career Timeline</span>
            </div>
          </div>
          
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From curious beginner to experienced developer, here's the path that shaped my career
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-300" />
              <div className="relative z-10 text-center">
                <div className="text-5xl mb-3">{milestone.icon}</div>
                <div className="text-sm text-gray-500 mb-1">{milestone.label}</div>
                <div className="text-lg font-bold text-white">{milestone.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 transform -translate-x-1/2" />

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 border-4 border-black z-20 shadow-lg shadow-purple-500/50" />

                {/* Content Card */}
                <div className="w-full md:w-5/12 group">
                  <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-[1.02]">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${
                      exp.color === 'purple' ? 'from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10' :
                      exp.color === 'cyan' ? 'from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10' :
                      'from-orange-500/0 to-red-500/0 group-hover:from-orange-500/10 group-hover:to-red-500/10'
                    } transition-all duration-500`} />

                    <div className="relative z-10">
                      {/* Icon & Year Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                          exp.color === 'purple' ? 'from-purple-500 to-pink-500' :
                          exp.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                          'from-orange-500 to-red-500'
                        } flex items-center justify-center text-3xl shadow-lg`}>
                          {exp.icon}
                        </div>
                        <div className={`px-5 py-2 rounded-full bg-gradient-to-r ${
                          exp.color === 'purple' ? 'from-purple-500 to-pink-500' :
                          exp.color === 'cyan' ? 'from-cyan-500 to-blue-500' :
                          'from-orange-500 to-red-500'
                        } text-white font-bold text-lg shadow-lg`}>
                          {exp.year}
                        </div>
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-3xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className={`text-xl font-semibold mb-4 bg-gradient-to-r ${
                        exp.color === 'purple' ? 'from-purple-400 to-pink-400' :
                        exp.color === 'cyan' ? 'from-cyan-400 to-blue-400' :
                        'from-orange-400 to-red-400'
                      } bg-clip-text text-transparent`}>
                        {exp.company}
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <div className="text-sm font-semibold text-gray-500 mb-3">Key Achievements:</div>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${
                                exp.color === 'purple' ? 'bg-purple-400' :
                                exp.color === 'cyan' ? 'bg-cyan-400' :
                                'bg-orange-400'
                              }`} />
                              <span className="text-gray-300 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <div className="text-sm font-semibold text-gray-500 mb-3">Technologies:</div>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-300 text-sm font-medium hover:border-gray-600 transition-colors"
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
        <div className="mt-24">
          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-12 overflow-hidden">
              {/* Decorative Quotes */}
              <div className="absolute top-6 left-6 text-7xl text-purple-500/20 font-serif leading-none">"</div>
              <div className="absolute bottom-6 right-6 text-7xl text-cyan-500/20 font-serif leading-none">"</div>

              {/* Quote Content */}
              <div className="relative z-10 text-center">
                <p className="text-3xl md:text-4xl font-light italic text-gray-200 mb-6 leading-relaxed">
                  The journey of a thousand miles begins with a single step
                </p>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                </div>
                <p className="text-gray-400 text-lg font-medium">— Lao Tzu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg mb-6">Want to be part of my next chapter?</p>
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300">
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
