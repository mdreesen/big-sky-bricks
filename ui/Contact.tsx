'use client';

import { motion, Variants } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

/**
 * A modern, responsive "Contact Us" page.
 */
export default function Contact() {

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    return (
        <div className="bg-gray-50">
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-6 py-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800">Get In Touch</h1>
                    <p className="text-gray-600 mt-4 text-lg">We'd love to hear from you. Let's build something amazing together.</p>
                </div>
            </header>

            <main className="container mx-auto px-6 py-16">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Left Column: Contact Form */}
                    <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                        <form action={`https://formspree.io/f/${process.env.FORM_SPREE_KEY}`} method="POST">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lego-blue" required />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lego-blue" required />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                                <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lego-blue" required></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-lego-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                            >
                                Submit Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Right Column: Contact Info & Map */}
                    <motion.div variants={itemVariants}>
                        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Information</h2>
                            <div className="space-y-4 text-gray-600">
                                <div className="flex items-center gap-4">
                                    <FaMapMarkerAlt className="w-6 h-6 text-lego-yellow" />
                                    <span>309 Main Street Kalispell, MT 59901</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FaPhone className="w-6 h-6 text-lego-yellow" />
                                    <span>(406) 890-5175</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <FaEnvelope className="w-6 h-6 text-lego-yellow" />
                                    <span>office@bigskybricks.com</span>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-lg shadow-lg overflow-hidden">
                            {/* <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d173333.3033527294!2d-114.41825084999999!3d48.356975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536645618173e33b%3A0x5cb5246890341527!2sEvergreen%2C%20MT%2C%20USA!5e0!3m2!1sen!2s!4v1723729512345!5m2!1sen!2s"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe> */}

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.425435632482!2d-114.31501682318431!3d48.19561107124998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536650c02cb24017%3A0x95fad03539cd5bcf!2s309%20S%20Main%20St%2C%20Kalispell%2C%20MT%2059901!5e1!3m2!1sen!2sus!4v1755267013166!5m2!1sen!2sus"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </motion.div>
                </motion.div>
            </main>
        </div>
    );
};