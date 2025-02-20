// components/layout/Navbar.jsx
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-8  -translate-x-1/2"
    >
      <div className=" bg-gray-800/40 backdrop-blur-md px-8 py-4 rounded-full flex gap-8">
        {navItems.map((item, index) => (
          <motion.button
            key={item.label}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hover:text-pink-500 transition-colors"
          >
            <item.icon size={24} />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};
