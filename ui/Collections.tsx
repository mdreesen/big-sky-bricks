'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { homeCategories } from '@/lib/data';
import { containerVariants, itemVariants } from '@/lib/variants';

export default function Collections() {

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
                    variants={containerVariants()}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {homeCategories().map((product) => (
                        <motion.div
                            key={product.id}
                            className="group relative rounded-lg overflow-hidden shadow-lg"
                            variants={itemVariants()}
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