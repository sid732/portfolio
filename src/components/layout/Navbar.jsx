import { motion } from 'framer-motion';
import { Home, Clock, Folder, Star, Mail } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: Clock, label: 'Experience' },
  { icon: Folder, label: 'Projects' },
  { icon: Star, label: 'Skills' },
  { icon: Mail, label: 'Contact' },
];

const Navbar = () => {
  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-8 left-0 right-0 flex justify-center"
    >
      <div className="bg-gray-800/40 backdrop-blur-md px-4 py-2 md:px-8 md:py-4 rounded-full flex gap-4 md:gap-8 justify-center">
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

export default Navbar;
