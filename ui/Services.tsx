'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/data';
import { containerVariants, itemVariants } from '@/lib/variants';

export default function Services() {

    return (
        <section className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        Beyond the Brick
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        We offer premium services to elevate your building experience from start to finish.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
                    variants={containerVariants()}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                >
                    {services().map((service, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center"
                            variants={itemVariants()}
                        >
                            <div className="bg-lego-yellow text-white rounded-full p-6 mb-6 inline-block">
                                <service.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed max-w-xs">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};