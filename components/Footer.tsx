'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { current_year } from '@/lib/date';


export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center">
                    {/* Column 1: Logo and Brand */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <Image
                                alt="Big Sky Bricks Logo"
                                width={150}
                                height={150}
                                priority
                                src={'/assets/logo.webp'}
                                className="opacity-60 relative rounded-full object-cover scale-75"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm">
                            Your destination for all things LEGO in Kalispell, Montana.
                        </p>
                    </div>

                    {/* Column 2: Connect */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Connect</h4>
                        <div className="flex items-center gap-4">
                            {/* <a href="#" aria-label="Twitter" className="bg-gray-700 p-3 rounded-full hover:bg-lego-blue transition-colors">
                                <FaTwitter />
                            </a> */}
                            <a href="https://www.instagram.com/mtbigskybricks/" aria-label="Instagram" className="bg-gray-700 p-3 rounded-full hover:bg-lego-yellow transition-colors">
                                <FaInstagram />
                            </a>
                            <a href="https://www.facebook.com/people/Big-Sky-Bricks/61562098062899/" aria-label="Facebook" className="bg-gray-700 p-3 rounded-full hover:bg-blue-600 transition-colors">
                                <FaFacebookF />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700">
                <div className="container mx-auto px-6 py-6 text-center text-gray-400 text-sm">
                    <p>&copy; {current_year()} Big Sky Bricks. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};