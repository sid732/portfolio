// components/home/TechStack.jsx
import { motion } from 'framer-motion';
import {
    SiDjango,
    SiReact,
    SiFastapi,
    SiNextdotjs,
    SiPython,
    SiPostgresql,
    SiTypescript,
    SiMongodb
} from "react-icons/si";

const TechStack = () => {
    const codeSnippet = `  1  I work with Django, FastAPI, and Next.js.
  2  I build full-stack applications with React.
  3  I specialize in Python backend development.
  4  For Frontend I use TypeScript.
  5  I use databases like PostgreSQL and MongoDB.`;

    const technologies = [
        { name: 'Django', Icon: SiDjango, color: '#092E20' },
        { name: 'React', Icon: SiReact, color: '#61DAFB' },
        { name: 'FastAPI', Icon: SiFastapi, color: '#009688' },
        { name: 'Next.js', Icon: SiNextdotjs, color: '#ffffff' },
        { name: 'Python', Icon: SiPython, color: '#3776AB' },
        { name: 'PostgreSQL', Icon: SiPostgresql, color: '#336791' },
        { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
        { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' }
    ];

    return (
        <div className="mt-20 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className=" "
            >
                <div className="left-[20%] mb-16 relative mt-10">
                    <h1 className=" text-7xl md:text-8xl font-light text-purple-400 mb-4">
                        Fullstack
                    </h1>
                    <p className="text-3xl text-purple-600">Developer</p>
                </div>

                {/* Terminal Window */}
                <motion.div
                    className="left-[35%] max-w-xl bg-[#ffffff11] rounded-lg p-6 font-mono text-sm mb-8 relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <div className="flex gap-2 mb-3">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <pre className="text-gray-300">
                        {codeSnippet}
                    </pre>

                </motion.div>

                {/* Tech Icons Grid */}
                <div className="left-[30%] relative max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {technologies.map(({ name, Icon, color }, index) => (
                        <motion.div
                            key={name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="flex flex-col items-center gap-2"
                        >
                            <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-gray-800/50 backdrop-blur-sm">
                                <Icon className="w-8 h-8" style={{ color }} />
                            </div>
                            <span className="text-sm text-gray-400">{name}</span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-right"
                >
                    <h2 className="text-2xl text-purple-400">Building</h2>
                    <h2 className="text-5xl md:text-6xl text-purple-400 mb-2">seamless</h2>
                    <p className="text-purple-600">full-stack applications.</p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default TechStack;
