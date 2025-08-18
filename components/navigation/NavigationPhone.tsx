'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { LegoIconThreeStacked, LegoIconX } from '@/components/LegoIcon';
import { menuVariants, navItemVariants, staggerContainerVariants } from '@/lib/variants';

export default function NavigationPhone() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Main', href: '/' },
        { name: 'Events', href: '/events' },
        { name: 'Products', href: '/products' },
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <nav className="relative bg-transparent p-4 md:hidden">
            <div className="flex justify-between items-center h-[2rem]">
                {/* Logo/Brand Name */}
                <Link href={'/'}>
                    <div className="flex flex-col text-2xl lego-font">
                        <div className='relative right-14 w-[250px]'>
                        <Image
                            alt="Big Sky Bricks Logo"
                            width={400}
                            height={190}
                            priority
                            src={'/assets/logo.webp'}
                            className="relative object-cover scale-75 lg:hidden md:hidden"
                        />
                        </div>
                    </div>

                </Link>

                {/* Hamburger Icon */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 z-50 relative"
                    aria-label="Toggle navigation menu"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {isOpen ? (
                            <motion.div
                                key="x-icon"
                                initial={{ rotate: 0, opacity: 0 }}
                                animate={{ rotate: 90, opacity: 1 }}
                                exit={{ rotate: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <LegoIconX className="w-6 h-18" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu-icon"
                                initial={{ rotate: 0, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <LegoIconThreeStacked className="w-6 h-18" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants()}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="fixed inset-0 bg-lego-blue backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8"
                    >
                        <motion.ul
                            variants={staggerContainerVariants()}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col items-center space-y-6"
                        >
                            {navItems.map((item) => (
                                <motion.li key={item.name} variants={navItemVariants()}>
                                    <a
                                        href={item.href}
                                        onClick={() => setIsOpen(false)} // Close menu on item click
                                        className="text-4xl font-extrabold text-gray-300 hover:text-[#60a5fa] transition-colors duration-300 relative group"
                                    >
                                        {item.name}
                                        <span className="absolute left-0 bottom-0 w-0 h-1 bg-gradient-to-r from-indigo-900 to-indigo-900 transition-all duration-300 group-hover:w-full rounded-full"></span>
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* Optional: Social Media Icons or other elements */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="absolute bottom-10 text-gray-500 text-sm"
                        >
                            {/* &copy; {current_year()} White Raven Development. All rights reserved. */}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};