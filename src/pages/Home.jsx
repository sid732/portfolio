// pages/Home.jsx
import { motion } from 'framer-motion';
import { Home, Clock, Folder, Star, Mail } from 'lucide-react';
import Hero from '../components/home/Hero'
import TechStack from '../components/home/TechStack';

const HomePage = () => {
    return (
        <div className="min-h-screen text-white flex flex-col relative">

            {/* Main Name */}
            <Hero />
           

            

            {/* Tech Stack */}
            <TechStack/>

            {/* Navigation Bar */}
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="fixed bottom-8 left-[37%] -translate-x-1/2"
            >
                <div className="bg-gray-800/40 backdrop-blur-md px-8 py-4 rounded-full flex gap-8">
                    {[
                        { icon: Home, label: 'Home' },
                        { icon: Clock, label: 'Experience' },
                        { icon: Folder, label: 'Projects' },
                        { icon: Star, label: 'Skills' },
                        { icon: Mail, label: 'Contact' }
                    ].map(({ icon: Icon, label }) => (
                        <motion.button
                            key={label}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="hover:text-pink-500 transition-colors"
                        >
                            <Icon size={24} />
                        </motion.button>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default HomePage;