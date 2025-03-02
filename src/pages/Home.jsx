import { motion, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Hero from '../components/home/Hero';
import TechStack from '../components/home/TechStack';
import WorkExperience from '../components/home/WorkExperiance';
import Navbar from '../components/layout/Navbar';
import Projects from '../components/home/Projects';
import Footer from '../components/home/Footer';

const HomePage = () => {
  const footerRef = useRef(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-white relative">
      {/* Main Content Container */}
      <main className="flex flex-col w-full">
        <section className="w-full">
          <Hero />
        </section>

        <section className="w-full">
          <TechStack />
        </section>

        <section className="w-full">
          <WorkExperience />
        </section>

        <section className="w-full">
          <Projects />
        </section>

        <section 
          ref={footerRef}
          className="w-full"
        >
          <Footer />
        </section>
      </main>

      {/* Fixed Navigation Bar */}
      <motion.div
        className="fixed left-0 right-0 z-50"
        animate={{
          bottom: isFooterVisible ? 'auto' : '0',
          top: isFooterVisible ? '85%' : 'auto'
        }}
        transition={{ duration: 0.3 }}
      >
        <Navbar />
      </motion.div>
    </div>
  );
};

export default HomePage;