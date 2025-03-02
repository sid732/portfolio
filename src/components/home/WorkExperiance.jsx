import { motion } from 'framer-motion';

const WorkExperience = () => {
  const experiences = [
    {
      role: 'Software Engineer',
      company: 'Tech Company',
      duration: 'Jan 2020 - Present',
      description: 'Developed and maintained web applications using React and Node.js.',
    },
    {
      role: 'Frontend Developer',
      company: 'Web Solutions',
      duration: 'Jun 2018 - Dec 2019',
      description: 'Built responsive user interfaces with HTML, CSS, and JavaScript.',
    },
    {
      role: 'Intern',
      company: 'Startup Inc.',
      duration: 'Jan 2018 - May 2018',
      description: 'Assisted in developing mobile applications using React Native.',
    },
  ];

  return (
    <div className="mt-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="ml-[10%] md:ml-[20%] mb-16 mt-10">
          <p className="text-xl text-white">My</p>
          <h1 className="text-5xl md:text-7xl font-light text-purple-400 mb-4">
            Work
          </h1>
          <p className="text-2xl md:text-3xl text-purple-600">Experience</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line - visible only on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-700" />
          
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`mb-8 bg-[#1e1e1e] rounded-lg shadow-lg 
                w-full md:w-[45%] relative
                ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
            >
              {/* Terminal Window Header */}
              <div className="bg-[#2d2d2d] rounded-t-lg p-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              {/* Timeline dot - visible only on desktop */}
              <div className={`hidden md:block absolute top-1/2 w-4 h-4 rounded-full bg-purple-500
                ${index % 2 === 0 ? 'right-0 translate-x-[200%]' : 'left-0 -translate-x-[200%]'}`}
              />
              
              {/* Terminal Window Content */}
              <div className="p-6 font-mono">
                <div className="flex items-center mb-2">
                  <span className="text-green-400">❯</span>
                  <h2 className="ml-2 text-xl md:text-2xl font-semibold text-white">{experience.role}</h2>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg md:text-xl text-gray-400">{experience.company}</h3>
                  <p className="text-sm text-gray-500">{experience.duration}</p>
                  <p className="mt-2 text-gray-300">{experience.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WorkExperience;