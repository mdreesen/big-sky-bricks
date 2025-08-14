'use client';

import { motion, Variants } from 'framer-motion';
import { FaBoxOpen, FaSearch, FaStar } from 'react-icons/fa';

// Define the structure for a service item
interface Service {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

// Mock service data
const services: Service[] = [
    {
        icon: FaStar,
        title: 'Rare & Exclusive Sets',
        description: 'We specialize in sourcing hard-to-find and retired LEGO sets for the dedicated collector and enthusiast.',
    },
    {
        icon: FaBoxOpen,
        title: 'Custom Build Kits',
        description: 'Commission a one-of-a-kind model. Our master builders will design and source the bricks for your unique vision.',
    },
    {
        icon: FaSearch,
        title: 'Personalized Sourcing',
        description: 'Looking for a specific set or part? Our dedicated team will hunt it down for you through our global network.',
    },
];

/**
 * A modern, high-end "Our Services" section.
 * This component uses a clean three-column layout with scroll-triggered animations
 * to highlight the premium services offered.
 */
const Services = () => {
    // Animation variants for the container to stagger children
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.2,
            },
        },
    };

    // Animation variant for each service card to fade and slide in from the bottom
    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Beyond the Brick
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        We offer premium services to elevate your building experience from start to finish.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center"
                            variants={itemVariants}
                        >
                            <div className="bg-lego-yellow text-white rounded-full p-6 mb-6 inline-block">
                                <service.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed max-w-xs">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;