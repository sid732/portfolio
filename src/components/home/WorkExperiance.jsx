import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WorkExperience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const { scrollYProgress } = useScroll();
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const experiences = [
    {
      role: 'Senior Software Engineer',
      company: 'Persistent Systems Limited',
      duration: 'Sep 2023 - Aug 2024',
      description: [
        'Led development of Tax Accelerator integrating Oracle ERP Cloud with Vertex O-Series tax engine in a team of 10.',
        'Streamlined customer onboarding process, resulting in 5 new customer integrations.',
        'Optimized 25+ BI Publisher reports, achieving 30% increase in reporting accuracy.',
        'Designed and implemented uplifted onboarding process for Oracle customers.'
      ],
      tech: ['Java', 'Spring Boot', 'React', 'AWS', 'Oracle', 'Cloud']
    },
    {
      role: 'Software Engineer',
      company: 'Persistent Systems Limited',
      duration: 'Jun 2021 - Sep 2023',
      description: [
        'Built 100+ REST APIs using Java/Spring Boot microservices with React/Redux Saga frontend.',
        'Improved data engineering efficiency by 45% through SQL, Oracle, PostgreSQL integration.',
        'Achieved 40% increase in customer satisfaction through custom Oracle ERP-Vertex integrations.',
        'Managed tax accruals for US and 50+ VAT countries in Oracle Inventory systems.'
      ],
      tech: ['Spring Boot', 'React', 'PostgreSQL', 'Microservices', 'Redux', 'SQL']
    },
    {
      role: 'Software Engineering Intern',
      company: 'Persistent Systems Limited',
      duration: 'Jan 2021 - Jul 2021',
      description: [
        'Developed full-stack applications using React, Redux, TypeScript, and Spring Boot.',
        'Built appointment booking system improving service accessibility.',
        'Gained expertise in Git, DevOps, Agile, Testing, and Cloud technologies.',
        'Implemented unit tests and CI/CD pipelines for automated deployments.'
      ],
      tech: ['React', 'TypeScript', 'Git', 'DevOps', 'Testing', 'CI/CD']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    visible: index => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="mt-20 px-4 min-h-screen bg-light-bg dark:bg-dark-bg relative transition-colors duration-300">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-500 origin-left z-50"
        style={{ scaleX: springProgress }}
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        ref={ref}

      >
        <motion.div className="ml-[10%] md:ml-[8%] mb-16 mt-10">
          <motion.p
            className="text-xl text-light-text dark:text-dark-text transition-colors duration-300"
            whileHover={{ scale: 1.05, color: "#a855f7" }}
          >
            My
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-light text-primary-400 mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Work
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl text-primary-600"
            whileHover={{ scale: 1.05 }}
          >
            Experience
          </motion.p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-light-muted dark:border-dark-muted"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5 }}
            style={{ scaleY: springProgress }}
          />

          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              className={`mb-12 bg-light-card dark:bg-dark-card rounded-lg shadow-lg 
                w-full md:w-[48%] relative transition-colors duration-300
                ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
            >
              <motion.div
                className="bg-light-header dark:bg-dark-header rounded-t-lg p-2 flex items-center gap-2 transition-colors duration-300"
              >
                <motion.div
                  className="w-3 h-3 rounded-full bg-red-500"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full bg-yellow-500"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
                <motion.div
                  className="w-3 h-3 rounded-full bg-green-500"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              </motion.div>

              <motion.div
                className={`hidden md:block absolute top-1/2 w-4 h-4 rounded-full bg-primary-500
                  ${index % 2 === 0 ? 'right-0 translate-x-[50%]' : 'left-0 -translate-x-[50%]'}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.3 }}
                whileHover={{ scale: 1.5, backgroundColor: "#a855f7" }}
                style={{
                  transform: `translate(${index % 2 === 0 ? '50%' : '-50%'}, -50%)`,
                  zIndex: 10
                }}
              />

              <motion.div className="p-6 font-mono">
                <div className="flex items-center mb-2">
                  <motion.span
                    className="text-green-400"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                  >
                    ❯
                  </motion.span>
                  <motion.h2
                    className="ml-2 text-xl md:text-4xl font-semibold text-light-text dark:text-dark-text transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    whileHover={{ color: "#a855f7" }}
                  >
                    {experience.role}
                  </motion.h2>
                </div>
                <div className="ml-4">
                  <motion.h3
                    className="text-lg md:text-2xl text-primary-400"
                    whileHover={{ scale: 1.02 }}
                  >
                    {experience.company}
                  </motion.h3>
                  <motion.p className="text-xl text-light-muted dark:text-dark-muted">
                    {experience.duration}
                  </motion.p>
                  <motion.ul className="text-xl mt-4 space-y-2">
                    {experience.description.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.1 * i }}
                        className="text-light-text dark:text-dark-text flex items-start"
                        whileHover={{ x: 10 }}
                      >
                        <motion.span
                          className="text-xl text-primary-400 mr-2"
                          whileHover={{ scale: 1.2, rotate: 180 }}
                        >
                          ▹
                        </motion.span>
                        <span className="text-light-text dark:text-dark-text">{point}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-xl rounded-full bg-primary-500/20 text-[#6517b8] dark:text-purple-300"
                        whileTap={{ scale: 0.95 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WorkExperience;