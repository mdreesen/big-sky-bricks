'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

/**
 * A modern, high-end "About Us" section.
 * This component uses a two-column layout with scroll-triggered animations
 * to create a sophisticated and engaging user experience.
 */
const About = () => {
    // Animation variants for the container to stagger children
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    // Animation variant for the image to slide in from the left
    const imageVariants: Variants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    // Animation variant for the text content to slide in from the right
    const textVariants: Variants = {
        hidden: { x: 20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section className="bg-white py-20 md:py-32">
            <motion.div
                className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
            >
                {/* Left Column: Image */}
                <motion.div variants={imageVariants} className="relative w-full h-80 md:h-full rounded-lg shadow-2xl overflow-hidden">
                    <Image
                        src={'/assets/seek_find_one.jpg'}
                        alt="Intricate LEGO construction"
                        // layout="fill"
                        // objectFit="cover"
                        width={595}
                        height={790}
                        className="h-full object-cover object-center transform hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                </motion.div>

                {/* Right Column: Text Content */}
                <motion.div variants={textVariants}>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Inspired by the Big Sky.
                    </h2>
                    <div className="w-24 h-1.5 bg-lego-yellow mb-6"></div>
                    <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                        Born from a passion for creativity under the vast Montana sky, Big Sky Bricks was founded on a simple principle: to provide builders, creators, and dreamers with the finest tools for imagination. We believe that every brick holds a universe of potential.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Our curated collections are more than just toys; they are gateways to architectural marvels, engineering feats, and artistic expression. We are dedicated to sourcing premium, sought-after sets for the discerning enthusiast who values quality, design, and the pure joy of building.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;