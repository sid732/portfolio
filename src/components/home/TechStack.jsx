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
                <div className="ml-[10%] md:ml-[20%] mb-16 mt-10">
                    <p className="text-xl text-white">A</p>
                    <h1 className="text-5xl md:text-7xl font-light text-purple-400 mb-4">
                        Fullstack
                    </h1>
                    <p className="text-2xl md:text-3xl text-purple-600">Developer</p>
                </div>

                {/* Terminal Window */}
<motion.div
    className="mx-auto max-w-xl bg-[#1e1e1e] rounded-lg shadow-lg mb-8 relative"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
>
    {/* Terminal Window Header */}
    <div className="bg-[#2d2d2d] rounded-t-lg p-2 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
    </div>

    {/* Terminal Window Content */}
    <div className="p-6 font-mono">
        <div className="flex items-center mb-2">
            <span className="text-green-400">❯</span>
            <pre className="ml-2 text-gray-300 whitespace-pre-wrap">
                {codeSnippet}
            </pre>
        </div>
    </div>
</motion.div>

                {/* Tech Icons Grid */}
                <div className=" md:left-[30%] relative max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
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
            </motion.div>
        </div>
    );
};

export default TechStack;