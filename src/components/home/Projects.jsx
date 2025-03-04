import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    const { scrollYProgress } = useScroll();
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    const projects = [
        {
            title: "Cloud Infrastructure and DevOps Pipeline",
            duration: "Dec 2024 - May 2025",
            association: "Northeastern University",
            overview: "Comprehensive DevOps implementation with cloud infrastructure automation and CI/CD pipeline setup.",
            keyFeatures: [
                "Spring Boot with Hibernate ORM & MySQL deployment",
                "AWS infrastructure automation with Terraform",
                "Custom machine images using Packer",
                "CI/CD pipeline with GitHub Actions"
            ],
            tech: ["AWS", "Terraform", "Docker", "Spring Boot", "GitHub Actions", "Packer"],
            github: "#"
        },
        {
            title: "Lights Trail - Aurora Prediction",
            duration: "Sep 2024 - Dec 2024",
            association: "Northeastern University",
            overview: "Web-based application providing real-time aurora predictions and forecasts, helping users track and experience the Northern Lights.",
            keyFeatures: [
                "Real-time Aurora Forecasting",
                "Interactive Maps",
                "Aurora Alerts",
                "Photo Gallery"
            ],
            tech: ["React", "TypeScript", "Node.js", "MongoDB", "Azure", "Redux"],
            github: "#"
        },
        {
            title: "Finance Management System",
            duration: "Sep 2024 - Dec 2024",
            association: "Northeastern University",
            overview: "A user-friendly Finance Management System to simplify personal finance tracking, budgeting, and spending analysis using JavaFX and PostgreSQL.",
            keyFeatures: [
                "Expense Logging with real-time updates",
                "Budget Tracking with alerts",
                "Visual Spending Analysis",
                "Secure Authentication"
            ],
            tech: ["Java", "JavaFX", "PostgreSQL", "JDBC", "Git", "Eclipse", "MVC"],
            github: "https://github.com/Byte-Budgeters/FinanceManagementSystem"
        },
        {
            title: "Social Network Mental Disorders Detection",
            duration: "Nov 2020 - Mar 2021",
            association: "D. Y. Patil College of Engineering",
            overview: "ML-based application to predict social mental disorders using various algorithms and user interaction patterns.",
            keyFeatures: [
                "Implementation of KNN algorithm",
                "Naive Bayes classification",
                "Random Forest prediction",
                "Windows GUI application"
            ],
            tech: ["Python", "Machine Learning", "KNN", "Tkinter", "Random Forest"],
            github: "https://github.com/sid732/Social-Network-Metal-Disorders-Detection"
        },
        {
            title: "Recession Prediction",
            duration: "Nov 2019 - Mar 2020",
            association: "D. Y. Patil College of Engineering",
            overview: "Machine Learning-based system for predicting economic recession trends using SVM and Linear Regression.",
            keyFeatures: [
                "86% prediction accuracy",
                "Inflation rate analysis",
                "Yield curve prediction",
                "Interactive visualization"
            ],
            tech: ["Python", "SVM", "Linear Regression", "Matplotlib", "Tkinter"],
            github: "https://github.com/sid732/RecessionPrediction"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const projectVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                type: "spring",
                stiffness: 100
            }
        }
    };

    return (
        <div className="mt-20 px-4 min-h-screen bg-light-bg dark:bg-dark-bg">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={containerVariants}
                style={{
                    scale: scaleProgress,
                    opacity: opacityProgress
                }}
            >
                <motion.div className="ml-[10%] md:ml-[5%] mb-16">
                    <motion.p
                        className="text-xl text-light-text dark:text-dark-text"
                        whileHover={{ scale: 1.05, color: "#a855f7" }}
                    >
                        Featured
                    </motion.p>
                    <motion.h1
                        className="text-5xl md:text-7xl font-light text-primary-400 mb-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        Projects
                    </motion.h1>
                </motion.div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={projectVariants}
                            whileHover={{ scale: 1.02 }}
                            className="bg-light-card dark:bg-dark-card rounded-lg p-6 shadow-lg transition-colors duration-300"
                        >
                            <div className="bg-light-header dark:bg-dark-header rounded-t-lg p-2 -mx-6 -mt-6 mb-4 flex items-center justify-between transition-colors duration-300">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="flex gap-4">
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, color: "#a855f7" }}
                                        className="text-dark-muted dark:text-light-muted hover:text-primary-400"
                                    >
                                        <FaGithub size={20} />
                                    </motion.a>
                                </div>
                            </div>

                            <motion.h3
                                className="text-2xl font-semibold text-primary-400 mb-2"
                                whileHover={{ color: "#a855f7" }}
                            >
                                {project.title}
                            </motion.h3>

                            <div className="flex items-center gap-2 mb-2">
                                <p className="text-dark-muted dark:text-light-muted">{project.duration}</p>
                                <span className="text-dark-muted dark:text-light-muted">•</span>
                                <p className="text-dark-muted dark:text-light-muted">{project.association}</p>
                            </div>

                            <p className="text-light-text dark:text-dark-text mb-4">{project.overview}</p>

                            <div className="space-y-2 mb-4">
                                {project.keyFeatures.map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start"
                                    >
                                        <span className="text-primary-400 mr-2">▹</span>
                                        <span className="text-light-text dark:text-dark-text">{feature}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tech.map((tech, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ scale: 1.1 }}
                                        className="px-3 py-1 text-lg rounded-full bg-primary-500/20 text-[#6517b8] dark:text-purple-300"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Projects;