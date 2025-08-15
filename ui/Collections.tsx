'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

// Mock product data
const products = [
    {
        id: 1,
        name: 'The Architect Series',
        description: 'Iconic landmarks and structural marvels.',
        imageUrl: '/assets/collections/architect.webp',
        category: 'Architecture',
        width: 1600,
        height: 916
    },
    {
        id: 2,
        name: 'The Botanist Collection',
        description: 'Build everlasting floral arrangements.',
        imageUrl: '/assets/collections/botanist.webp',
        category: 'Botanical',
        width: 668,
        height: 382
    },
    {
        id: 3,
        name: 'The Explorer Collection',
        description: 'Travel through design and odyssey.',
        imageUrl: '/assets/collections/explorer.webp',
        category: 'Explorer',
        width: 668,
        height: 382
    },
];

/**
 * A modern, high-end "Our Products" section.
 * This component uses a clean grid layout with scroll-triggered animations
 * and hover effects to showcase product collections.
 */
export default function Collections() {
    // Animation variants for the container to stagger children
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.4,
            },
        },
    };

    // Animation variant for each product card to fade and slide in
    const cardVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section className="bg-gray-50 py-20 md:py-32" id='#collections'>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Curated Collections
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Explore our hand-picked selections, designed to inspire and challenge builders of all levels.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            className="group relative rounded-lg overflow-hidden shadow-lg"
                            variants={cardVariants}
                        >
                            <div className="relative w-full h-96">
                                <Image
                                    src={product.imageUrl}
                                    alt={product.name}
                                    width={product.width}
                                    height={product.height}
                                    className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                                {/* Overlay for content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                            </div>
                            <div className="absolute bottom-0 left-0 p-8 text-white">
                                <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
                                <p className="text-lg opacity-90 mb-4">{product.description}</p>
                                <Link
                                    href={`/products?category=${product.category}`}
                                    className="flex items-center gap-2 font-semibold text-lego-yellow transition-all duration-300 transform group-hover:translate-x-2"
                                >
                                    View Collection <FaArrowRight />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};