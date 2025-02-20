// components/home/TechStack.jsx
import { motion } from 'framer-motion';

const technologies = [
  { name: 'Java', icon: '☕' },
  { name: 'React', icon: '⚛️' },
  { name: 'Spring Boot', icon: '🍃' },
  { name: 'AWS', icon: '☁️' },
  { name: 'PostgreSQL', icon: '🐘' }
];

const TechStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="mt-20 text-center"
    >
      <h2 className="text-2xl bg-gradient-to-r from-[#ff2764] to-[#00d0ff] bg-clip-text text-transparent">
        Full-Stack Software Engineer
      </h2>
      <div className="flex justify-center gap-6 mt-8 flex-wrap">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="px-6 py-3 bg-gray-800/40 rounded-full backdrop-blur-sm"
          >
            <span className="mr-2">{tech.icon}</span>
            {tech.name}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
export default TechStack;