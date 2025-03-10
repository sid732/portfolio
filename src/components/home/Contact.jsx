import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';
import config from '../../config/env.config';

const Contact = () => {
    const formRef = useRef();
    const recaptchaRef = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [recaptchaValue, setRecaptchaValue] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!recaptchaValue) {
            setSubmitStatus({
                success: false,
                message: "Please complete the reCAPTCHA verification"
            });
            return;
        }

        setIsSubmitting(true);
        try {
            // Replace these with your EmailJS credentials
            const result = await emailjs.sendForm(
                mport.meta.env.VITE_EMAILJS_SERVICE_ID,
                mport.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                mport.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setSubmitStatus({
                success: true,
                message: "Message sent successfully! I'll get back to you soon."
            });
            formRef.current.reset();
            recaptchaRef.current.reset();
            setRecaptchaValue(null);
        } catch (error) {
            setSubmitStatus({
                success: false,
                message: "Failed to send message. Please try again later."
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="mt-20 px-4 min-h-screen bg-light-bg dark:bg-dark-bg relative transition-colors duration-300">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto py-16"
            >
                <div className="ml-[10%] md:ml-[5%] mb-16">
                    <motion.p
                        className="text-xl text-light-text dark:text-dark-text"
                        whileHover={{ scale: 1.05, color: "#a855f7" }}
                    >
                        Get in
                    </motion.p>
                    <motion.h1
                        className="text-5xl md:text-7xl font-light text-primary-400 mb-4"
                        whileHover={{ scale: 1.05 }}
                    >
                        Touch
                    </motion.h1>
                </div>

                <motion.form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-light-card dark:bg-dark-card p-8 rounded-lg shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div
                            className="space-y-2"
                            whileHover={{ scale: 1.02 }}
                        >
                            <label className="block text-light-text dark:text-dark-text">Name</label>
                            <input
                                type="text"
                                name="user_name"
                                required
                                className="w-full p-3 rounded-lg bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text border border-primary-500/20 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                            />
                        </motion.div>

                        <motion.div
                            className="space-y-2"
                            whileHover={{ scale: 1.02 }}
                        >
                            <label className="block text-light-text dark:text-dark-text">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                required
                                className="w-full p-3 rounded-lg bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text border border-primary-500/20 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                            />
                        </motion.div>
                    </div>

                    <motion.div
                        className="space-y-2"
                        whileHover={{ scale: 1.02 }}
                    >
                        <label className="block text-light-text dark:text-dark-text">Message</label>
                        <textarea
                            name="message"
                            required
                            rows="5"
                            className="w-full p-3 rounded-lg bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text border border-primary-500/20 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                        ></textarea>
                    </motion.div>

                    <div className="flex justify-center">
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                            onChange={(value) => setRecaptchaValue(value)}
                        />
                    </div>

                    {submitStatus && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={`p-4 rounded-lg ${
                                submitStatus.success 
                                    ? 'bg-green-500/10 text-green-500' 
                                    : 'bg-red-500/10 text-red-500'
                            }`}
                        >
                            {submitStatus.message}
                        </motion.div>
                    )}

                    <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full p-4 bg-primary-500 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                </motion.form>
            </motion.div>
        </div>
    );
};

export default Contact;