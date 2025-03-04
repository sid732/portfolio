import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/sid732",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin size={24} />,
      url: "https://linkedin.com/in/siddharth-nashikkar",
      label: "LinkedIn"
    },
    {
      icon: <FaEnvelope size={24} />,
      url: "mailto:nashikkar.siddharth@gmail.com",
      label: "Email"
    }
  ];

  return (
    <motion.footer 
      className="w-full bg-[#1e1e1e] py-8 mt-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.2, color: "#a855f7" }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          
          <motion.p 
            className="text-gray-400 text-sm"
            whileHover={{ color: "#a855f7" }}
          >
            Built with React & Framer Motion
          </motion.p>
          
          <motion.p 
            className="text-gray-500 text-sm"
            whileHover={{ color: "#a855f7" }}
          >
            © {new Date().getFullYear()} Siddharth Nashikkar. All rights reserved.
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;