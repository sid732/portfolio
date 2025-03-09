import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, Loader } from 'lucide-react';

const ResumeChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatRef = useRef(null);

    const resumeData = {
        experience: [
            {
                role: 'Senior Software Engineer',
                company: 'Persistent Systems Limited',
                duration: 'Sep 2023 - Aug 2024',
                achievements: [
                    'Led development of Tax Accelerator integrating Oracle ERP Cloud with Vertex O-Series tax engine.',
                    'Streamlined customer onboarding process, resulting in 5 new customer integrations.',
                    'Optimized 25+ BI Publisher reports, achieving 30% increase in reporting accuracy.'
                ]
            }
        ],
        education: [
            {
                degree: 'MS in Software Engineering',
                school: 'Northeastern University',
                gpa: '3.78/4.0',
                duration: '2024 - 2026'
            }
        ],
        skills: ['Java', 'Spring Boot', 'React', 'AWS', 'Docker', 'Python'],
        projects: [
            {
                name: 'Aurora Tracker System',
                description: 'Developed a real-time aurora prediction web app using React, Node.js, and MongoDB, integrated with Mapbox.',
                duration: 'Sep 2024 - Dec 2024'
            },
            {
                name: 'Cloud Infrastructure and DevOps Pipeline',
                description: 'Deployed a Spring Boot app with Terraform, CI/CD (GitHub Actions), AWS infra automation, and Packer-built AMIs.',
                duration: 'Dec 2024 - May 2025'
            }
        ]
    };

    const processQuestion = (question) => {
        question = question.toLowerCase();

        if (question.includes('experience')) {
            return resumeData.experience.map(exp =>
                `**${exp.role}** at ${exp.company} (${exp.duration})\n\n${exp.achievements.map(a => `• ${a}`).join('\n')}`
            ).join('\n\n');
        }

        if (question.includes('education')) {
            return resumeData.education.map(edu =>
                `**${edu.degree}** from ${edu.school}\n\n• GPA: ${edu.gpa}\n• Duration: ${edu.duration}`
            ).join('\n\n');
        }

        if (question.includes('skills')) {
            return `**Technical Skills:**\n\n${resumeData.skills.join(', ')}`;
        }

        if (question.includes('project')) {
            return resumeData.projects.map(proj =>
                `**${proj.name}**\n\n• ${proj.description}\n• Duration: ${proj.duration}`
            ).join('\n\n');
        }

        if (question.includes('contact')) {
            return "I'm sorry, but I can't share personal contact details.";
        }

        return "I can help you learn about Siddharth's:\n\n• Work Experience\n• Education\n• Technical Skills\n• Projects\n• Achievements\n\nWhat would you like to know?";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { type: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        setTimeout(() => {
            const response = processQuestion(input);
            setMessages(prev => [...prev, { type: 'bot', content: response }]);
            setIsLoading(false);
        }, 1000);
    };

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([{ 
                type: 'bot', 
                content: "👋 Hi! I'm Siddharth's bot. I can tell you about:\n\n• Work Experience\n• Education\n• Technical Skills\n• Projects\n• Achievements\n\nWhat would you like to know?" 
            }]);
        }
    }, [isOpen]);

    return (
        <>
            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-24 right-4 p-4 rounded-full bg-primary-500 text-white shadow-lg z-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <MessageSquare />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        className="fixed bottom-24 right-4 w-96 h-[500px] bg-white dark:bg-dark-card rounded-lg shadow-xl flex flex-col overflow-hidden z-50"
                    >
                        <div className="bg-primary-500 p-4 text-white flex justify-between items-center">
                            <h3 className="font-semibold">Chat Bot</h3>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-red-200"
                            >
                                ✕
                            </button>
                        </div>

                        <div 
                            ref={chatRef}
                            className="flex-1 overflow-y-auto p-4 space-y-4 text-light-text dark:text-dark-text"
                        >
                            {messages.map((message, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-lg ${
                                            message.type === 'user'
                                                ? 'bg-primary-500 text-white'
                                                : 'bg-gray-100 dark:bg-gray-800 text-light-text dark:text-dark-text'
                                        } whitespace-pre-line`}
                                    >
                                        {message.content}
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                                        <Loader className="w-5 h-5 animate-spin" />
                                    </div>
                                </div>
                            )}
                        </div>

                        <form 
                            onSubmit={handleSubmit}
                            className="p-4 border-t border-gray-700 dark:border-gray-200 bg-white dark:bg-dark-card"
                        >
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about my experience..."
                                    className="flex-1 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-light-text dark:text-dark-text placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                />
                                <motion.button
                                    type="submit"
                                    className="p-2 rounded-lg bg-primary-500 text-white"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    disabled={isLoading}
                                >
                                    <Send size={20} />
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ResumeChat;
