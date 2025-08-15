'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';

// Mock product data
const allProducts = [
    { id: 1, name: 'Eiffel Tower', category: 'Architecture', price: 629.99, imageUrl: '/assets/products/architecture/eiffel_tower.webp' },
    { id: 2, name: 'Orchid Bloom', category: 'Botanical', price: 49.99, imageUrl: '/assets/products/botanical/orchid_bloom.webp' },
    { id: 3, name: 'McLaren P1', category: 'Technic', price: 199.99, imageUrl: '/assets/products/technic/mcLaren_p_one.webp' },
    { id: 4, name: 'The Globe', category: 'Ideas', price: 229.99, imageUrl: '/assets/products/ideas/globe.webp' },
    { id: 5, name: 'Wildflower Bouquet', category: 'Botanical', price: 59.99, imageUrl: '/assets/products/botanical/wildflower_bouquet.webp' },
    { id: 6, name: 'Lamborghini Sián', category: 'Technic', price: 449.99, imageUrl: '/assets/products/technic/lamborghini_sian.webp' },
    { id: 7, name: 'Colosseum', category: 'Architecture', price: 549.99, imageUrl: '/assets/products/architecture/colosseum.webp' },
    { id: 8, name: 'Motorized Lighthouse', category: 'Ideas', price: 299.99, imageUrl: '/assets/products/ideas/motorized_lighthouse.webp' },
    { id: 9, name: 'Lord Of The Rings Revendell', category: 'Explorer', price: 299.99, imageUrl: '/assets/products/explorer/lotr_rivendell.webp' },
    { id: 10, name: 'Star Wars Millennium Falcon', category: 'Explorer', price: 849.99, imageUrl: '/assets/products/explorer/sw_falcon.webp' },

];

const categories = ['All', 'Architecture', 'Botanical', 'Explorer', 'Technic', 'Ideas'];

/**
 * A modern, responsive page to display all products with filtering and sorting.
 */
export default function Products() {
    const searchParams = useSearchParams();
    const category = searchParams.get('category'); 

    const [filter, setFilter] = useState(category ?? 'All');
    const [sort, setSort] = useState('name-asc');

    const filteredProducts = allProducts
        .filter(p => filter === 'All' || p.category === filter)
        .sort((a, b) => {
            switch (sort) {
                case 'price-asc': return a.price - b.price;
                case 'price-desc': return b.price - a.price;
                case 'name-asc': return a.name.localeCompare(b.name);
                case 'name-desc': return b.name.localeCompare(a.name);
                default: return 0;
            }
        });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <div className="bg-gray-50">
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-6 py-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800">All Collections</h1>
                    <p className="text-gray-600 mt-4 text-lg">Find your next masterpiece.</p>
                </div>
            </header>

            <main className="container mx-auto px-6 py-12">
                {/* Filter and Sort Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${filter === category
                                        ? 'bg-lego-blue text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-2">
                        <label htmlFor="sort" className="text-sm font-semibold text-gray-600">Sort by:</label>
                        <select
                            id="sort"
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-lego-blue"
                        >
                            <option value="name-asc">Name (A-Z)</option>
                            <option value="name-desc">Name (Z-A)</option>
                            <option value="price-asc">Price (Low to High)</option>
                            <option value="price-desc">Price (High to Low)</option>
                        </select>
                    </div>
                </div>

                {/* Products Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <AnimatePresence>
                        {filteredProducts.map(product => (
                            <motion.div
                                key={product.id}
                                variants={itemVariants}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                                className="bg-white rounded-lg shadow-md overflow-hidden group"
                            >
                                <div className="relative w-full h-64">
                                    <Image src={product.imageUrl} alt={product.name} height={300} width={300} className="group-hover:scale-105 object-cover transition-transform duration-300" />
                                </div>
                                <div className="p-6">
                                    <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                                    <p className="text-lg font-semibold text-lego-blue">${product.price.toFixed(2)}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </main>
        </div>
    );
};
