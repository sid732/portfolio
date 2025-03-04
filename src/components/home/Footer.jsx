const Footer = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <motion.footer 
      className={`w-full ${
        isDarkMode ? 'bg-secondary' : 'bg-gray-100'
      } py-8 mt-20`}
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
                className={`${
                  isDarkMode ? 'text-gray-400 hover:text-accent' : 'text-gray-600 hover:text-primary'
                } transition-colors`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          
          <motion.p 
            className={`${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            } text-sm`}
            whileHover={{ color: isDarkMode ? '#6e56cf' : '#1a1625' }}
          >
            Built with React & Framer Motion
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};