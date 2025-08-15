'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { products, categories } from '@/lib/data';
import { containerVariants, productVariants } from '@/lib/variants';

export default function Products() {
    const searchParams = useSearchParams();
    const category = searchParams.get('category');

    const [filter, setFilter] = useState(category ?? 'All');
    const [sort, setSort] = useState('name-asc');

    const filteredProducts = products()
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

    return (
        <div className="bg-gray-50">
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-6 py-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800">{`All ${filter === 'All' ? '' : filter} Collections`}</h1>
                    <p className="text-gray-600 mt-4 text-lg">Find your next masterpiece.</p>
                </div>
            </header>

            <main className="container mx-auto px-6 py-12">
                {/* Filter and Sort Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                        {categories().map(category => (
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
                    variants={containerVariants()}
                    initial="hidden"
                    animate="visible"
                >
                    <AnimatePresence>
                        {filteredProducts.map(product => (
                            <motion.div
                                key={product.id}
                                variants={productVariants()}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                                className="bg-white rounded-lg shadow-md overflow-hidden group"
                            >
                                <div className="relative w-full h-64 z-0">
                                    <Image src={product.imageUrl} alt={product.name} height={100} width={300} className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300" />
                                </div>
                                <div className="p-6 z-10">
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
