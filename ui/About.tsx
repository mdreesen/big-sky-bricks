'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { containerVariants, imageVariants, textVariants } from '@/lib/variants';

export default function About() {

    return (
        <section className="bg-white py-20 md:py-32">
            <motion.div
                className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
                variants={containerVariants()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the element is in view
            >
                {/* Left Column: Image */}
                <motion.div variants={imageVariants()} className="relative h-80 md:h-full rounded-lg shadow-2xl overflow-hidden">
                    <Image
                        src={'/assets/seek_find_one.webp'}
                        alt="Intricate LEGO construction"
                        width={595}
                        height={790}
                        className="h-full object-cover object-center transform hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                </motion.div>

                {/* Right Column: Text Content */}
                <motion.div variants={textVariants()}>
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