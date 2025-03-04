const Navbar = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-8 left-0 right-0 flex justify-center"
    >
      <div className={`${
        isDarkMode ? 'bg-secondary/40' : 'bg-gray-200/40'
      } backdrop-blur-md px-4 py-2 md:px-8 md:py-4 rounded-full flex gap-4 md:gap-8 justify-center`}>
        {navItems.map((item, index) => (
          <motion.button
            key={item.label}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`${
              isDarkMode ? 'hover:text-accent' : 'hover:text-primary'
            } transition-colors`}
          >
            <item.icon size={24} />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};