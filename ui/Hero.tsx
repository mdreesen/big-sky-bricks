'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { containerVariants, itemSpringVariants } from '@/lib/variants';

export default function Hero() {

    return (
        <section className="relative h-[40rem] w-full flex items-center justify-center text-center overflow-hidden">
            {/* Background Image */}
            <Image
                alt="Lego Bricks Background"
                width={1920}
                height={2550}
                priority
                src={'/assets/bricks_three.webp'}
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center object-cover z-0"
            />
            {/* Dark overlay for text contrast */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10" />

            {/* Centered Content */}
            <motion.div
                className="relative z-30 flex flex-col items-center text-white px-4"
                variants={containerVariants()}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="text-5xl md:text-8xl lego-font text-lego-yellow font-bold"
                    variants={itemSpringVariants()}
                >
                    Big Sky Bricks
                </motion.h1>
                <motion.p
                    className="mt-4 text-lg md:text-2xl max-w-2xl font-semibold"
                    variants={itemSpringVariants()}
                >
                    Where creativity clicks. Discover premium sets for the modern builder.
                </motion.p>
                <motion.div variants={itemSpringVariants()}>
                    <Link href={'/products'}>
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