'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

/**
 * A modern, high-end hero section with a static LEGO background.
 * This component focuses on a clean aesthetic with subtle animations.
 */
const HeroSection = () => {
    // Animation variants for the main text content container
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    // Animation variants for individual text and button elements
    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    return (
        <section className="relative h-[40rem] w-full flex items-center justify-center text-center overflow-hidden">
            {/* Background Image */}
            <Image
                alt="Lego Bricks Background"
                width={662}
                height={880}
                priority
                src={'/assets/bricks_three.jpg'}
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center object-cover z-0"
            />
            {/* Dark overlay for text contrast */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10" />

            {/* Centered Content */}
            <motion.div
                className="relative z-30 flex flex-col items-center text-white px-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="text-5xl md:text-8xl lego-font text-lego-yellow font-bold"
                    variants={itemVariants}
                >
                    Big Sky Bricks
                </motion.h1>
                <motion.p
                    className="mt-4 text-lg md:text-2xl max-w-2xl font-semibold"
                    variants={itemVariants}
                >
                    Where creativity clicks. Discover premium sets for the modern builder.
                </motion.p>
                <motion.div variants={itemVariants}>
                    <Link href={'#collections'}>
                    <button
                        className="mt-8 flex items-center gap-3 bg-lego-red text-white font-bold py-4 px-8 rounded-lg text-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
                    >
                        Explore Collections
                        <FaArrowRight />
                    </button>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSection;