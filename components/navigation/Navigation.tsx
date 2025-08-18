'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { brickVariants } from '@/lib/variants';

interface NavLinkProps {
    href: string;
    label: string;
    color: string
    colorLight: string,
    textColor: string
}

const NavLink = ({ href, label, color, colorLight, textColor }: NavLinkProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.a
            href={href}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative flex items-center justify-center"
            style={{ width: '110px', height: '40px' }} // Fixed size for consistent layout
        >
            {/* LEGO brick appears behind the text on hover */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        variants={brickVariants()}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className={`w-24 h-8 ${color} rounded flex items-center justify-around`} style={{ boxShadow: `inset 0 -2px 0 ${colorLight}` }}>
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className={`w-4 h-4 rounded-full ${color}`} style={{ boxShadow: `inset 0 -1px 0 ${colorLight}` }}/>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            {/* Text label is always visible and changes color on hover */}
            <motion.span
                className={`relative z-10 font-semibold`}
                animate={{ color: isHovered ? `${textColor}` : '#4a5568' }}
                transition={{ duration: 0.2 }}
            >
                {label}
            </motion.span>
        </motion.a>
    );
};
// --- End of Updated NavLink Component ---


const navLinksData: NavLinkProps[] = [
    { href: '/', label: 'Main', color: 'bg-lego-yellow', colorLight: '#DBAC34', textColor: '#000000' },
    { href: '/events', label: 'Events', color: 'bg-lego-red', colorLight: '#8B0000', textColor: '#FFFFFF' },
    { href: '/products', label: 'Products', color: 'bg-lego-blue', colorLight: '#2032B0', textColor: '#FFFFFF' },
    { href: '/contact', label: 'Contact Us', color: 'bg-lego-green', colorLight: '#184632', textColor: '#FFFFFF' },
];


export default function Navigation() {

    return (
        <header className="top-0 left-0 w-full h-[5rem] z-50 bg-white/80 backdrop-blur-md hidden sm:block md:block">
            <nav className="container mx-auto px-6 py-4 h-[5rem] flex justify-between items-center">
                {/* Logo */}
                <Link href={'/'}>
                    <div className="flex flex-col text-2xl lego-font">
                        <div className='relative right-14 w-[250px]'>
                        <Image
                            alt="Big Sky Bricks Logo"
                            width={400}
                            height={190}
                            priority
                            src={'/assets/logo.webp'}
                            className="relative object-cover scale-75"
                        />
                        </div>
                    </div>

                </Link>

                {/* Desktop Navigation with Hover Effect */}
                <div className="hidden md:flex items-center gap-2">
                    {navLinksData.map((link) => (
                        <NavLink key={link.href} href={link.href} label={link.label} color={link.color} colorLight={link.colorLight} textColor={link.textColor}/>
                    ))}
                </div>
            </nav>
        </header>
    );
};