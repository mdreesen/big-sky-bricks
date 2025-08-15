'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { events, birthdayPackages } from '@/lib/data';
import { containerVariants, itemVariants } from '@/lib/variants';

export default function Events() {

    return (
        <div className="bg-gray-50">
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-6 py-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800">Events & Parties</h1>
                    <p className="text-gray-600 mt-4 text-lg">Join our community of builders at these exciting events.</p>
                </div>
            </header>

            <main className="container mx-auto px-6 py-16">
                {/* Upcoming Events Section */}
                <motion.div
                    className="space-y-12"
                    variants={containerVariants()}
                    initial="hidden"
                    animate="visible"
                >
                     {events().map((event) => (
                        <motion.div
                            key={event.id}
                            variants={itemVariants()}
                            className="bg-white rounded-lg shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-3"
                        >
                            <div className="relative w-full h-64 md:h-full">
                                <Image src={event.imageUrl} alt={event.title || ''} width={700} height={700} className='h-full w-full object-cover' />
                            </div>
                            <div className="p-8 md:col-span-2">
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">{event.title}</h2>
                                <div className="flex flex-col sm:flex-row gap-x-6 gap-y-3 text-gray-600 mb-6">
                                    <div className="flex items-center gap-2">
                                        <FaCalendarAlt className="text-lego-blue" />
                                        <span>{event.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaClock className="text-lego-blue" />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-lego-blue" />
                                        <span>{event.location}</span>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed mb-8">{event.description}</p>
                                <a href={event.googleCalendarLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-lego-yellow text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors duration-300">
                                    Add to Calendar
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Birthday Parties Section */}
                <div className="mt-24 pt-16 border-t border-gray-200">
                     <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Host Your Birthday With Us!</h2>
                        <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">Create unforgettable memories. Select a package below to view available dates and book your party instantly.</p>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants()}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {birthdayPackages().map((pkg) => (
                            <motion.div 
                                key={pkg.title}
                                variants={itemVariants()}
                                className={`bg-white rounded-lg shadow-lg p-8 flex flex-col border-t-4 border-lego-${pkg.color}`}
                            >
                                <div className="flex-grow">
                                    <div className={`bg-lego-${pkg.color} text-white rounded-full p-4 mb-6 inline-block`}>
                                        <pkg.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
                                    <p className="text-3xl font-bold text-gray-900 mb-6">{pkg.price}</p>
                                    <ul className="space-y-3 text-gray-600">
                                        {pkg.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className={`text-lego-${pkg.color} mr-3 mt-1`}>&#10003;</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <a href={pkg.googleAppointmentLink} target="_blank" rel="noopener noreferrer" className={`mt-8 block text-center w-full bg-lego-${pkg.color} text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity duration-300`}>
                                    Schedule Party
                                </a>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </main>
        </div>
    );
};