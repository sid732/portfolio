import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import TechStack from '../components/home/TechStack';
import WorkExperience from '../components/home/WorkExperiance';
import Navbar from '../components/layout/Navbar';

const HomePage = () => {
  return (
    <div className="min-h-screen text-white flex flex-col relative">
      {/* Main Name */}
      <Hero />

      {/* Tech Stack */}
      <TechStack />

      {/* Work Experience */}
      <WorkExperience />

      {/* Navigation Bar */}
      <Navbar />
    </div>
  );
};

export default HomePage;