import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FaJava,
    FaReact,
    FaAws,
    FaDocker,
    FaPython,
    FaNodeJs,
    FaGithub
} from "react-icons/fa";
import {
    DiMongodb,
    DiPostgresql
} from "react-icons/di";
import {
    SiSpring,
    SiTypescript,
    SiOracle
} from "react-icons/si";

const TechStack = () => {
    const [titleRef, titleInView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const [terminalRef, terminalInView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const [techGridRef, techGridInView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const technologies = [
        { name: 'Java', Icon: FaJava, color: '#007396' },
        { name: 'Spring', Icon: SiSpring, color: '#6DB33F' },
        { name: 'React', Icon: FaReact, color: '#61DAFB' },
        { name: 'AWS', Icon: FaAws, color: '#FF9900' },
        { name: 'Docker', Icon: FaDocker, color: '#2496ED' },
        { name: 'Python', Icon: FaPython, color: '#3776AB' },
        { name: 'PostgreSQL', Icon: DiPostgresql, color: '#336791' },
        { name: 'Node.js', Icon: FaNodeJs, color: '#339933' },
        { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
        { name: 'Oracle', Icon: SiOracle, color: '#F80000' },
        { name: 'MongoDB', Icon: DiMongodb, color: '#47A248' },
        { name: 'GitHub', Icon: FaGithub, color: '#2088FF' }
    ];

    const codeSnippet = `$ whoami
> Siddharth Nashikkar
$ education
> MS in Software Engineering
> Northeastern University      
> GPA: 3.78/4.0
$ focus
> Cloud-native solutions
> Distributed systems
> Full-stack development`;

    return (
        <div className="mt-20 px-4 bg-light-bg dark:bg-dark-bg transition-colors duration-300">
            <motion.div
                ref={titleRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: titleInView ? 1 : 0,
                    y: titleInView ? 0 : 20
                }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto"
            >
                <div className="  mb-16 mt-10">
                    <p className="text-xl text-light-text dark:text-dark-text">A</p>
                    <motion.h1
                        className="text-5xl md:text-7xl font-light text-primary-400 mb-4"
                        animate={{
                            scale: titleInView ? 1 : 0.8,
                            opacity: titleInView ? 1 : 0
                        }}
                        transition={{ delay: 0.2 }}
                    >
                        Fullstack
                    </motion.h1>
                    <motion.p
                        className="text-2xl md:text-3xl text-primary-600"
                        animate={{
                            x: titleInView ? 0 : -50,
                            opacity: titleInView ? 1 : 0
                        }}
                        transition={{ delay: 0.4 }}
                    >
                        Engineer
                    </motion.p>
                </div>

                {/* Terminal Window */}

                <motion.div
                    ref={terminalRef}
                    className="mx-auto max-w-4xl bg-light-card dark:bg-dark-card rounded-lg shadow-lg mb-12 
              relative transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{
                        opacity: terminalInView ? 1 : 0,
                        scale: terminalInView ? 1 : 0.95
                    }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="bg-light-header dark:bg-dark-header rounded-t-lg p-2 flex items-center gap-2 
                  transition-colors duration-300">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="p-8 font-mono bg-light-card dark:bg-dark-card transition-colors duration-300">
                        <div className="flex items-start">
                            <span className="text-primary-400 mr-4">❯</span>
                            <pre className="text-dark-text dark:text-light-text whitespace-pre-wrap text-lg">
                                {codeSnippet.split('\n').map((line, index) => (
                                    <span key={index}>
                                        {line.startsWith('$') ? (
                                            <span className="text-[#3b0575]  dark:text-purple-500 text-xl">{line}</span>
                                        ) : line.startsWith('>') ? (
                                            <span className="text-[#6517b8] dark:text-purple-400">{line}</span>
                                        ) : (
                                            <span className="text-dark-text dark:text-light-text">{line}</span>
                                        )}
                                        {'\n'}
                                    </span>
                                ))}
                            </pre>
                        </div>
                    </div>
                </motion.div>

                {/* Tech Icons Grid */}
                <motion.div
                    ref={techGridRef}
                    className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                        opacity: techGridInView ? 1 : 0,
                        y: techGridInView ? 0 : 50
                    }}
                    transition={{ duration: 0.5 }}
                >
                    {technologies.map(({ name, Icon, color }, index) => (
                        <motion.div
                            key={name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: techGridInView ? 1 : 0,
                                y: techGridInView ? 0 : 20
                            }}
                            transition={{
                                delay: techGridInView ? index * 0.1 : 0,
                                duration: 0.3
                            }}
                            whileHover={{
                                scale: 1.1,
                                rotate: 5,
                                transition: { duration: 0.2 }
                            }}
                            className="group flex flex-col items-center gap-3"
                        >
                            <motion.div
                                className="w-20 h-20 flex items-center justify-center rounded-xl 
                                         bg-light-card dark:bg-dark-card backdrop-blur-sm
                                         shadow-lg group-hover:shadow-2xl group-hover:shadow-primary-500/20
                                         transition-colors duration-300"
                                whileHover={{ y: -5 }}
                            >
                                <Icon className="w-10 h-10 transition-transform" style={{ color }} />
                            </motion.div>
                            <motion.span
                                className="text-base text-dark-muted dark:text-light-muted 
                                         group-hover:text-primary-400 transition-colors"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: techGridInView ? 1 : 0
                                }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                            >
                                {name}
                            </motion.span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default TechStack;