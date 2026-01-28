'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export function VisualMasonry() {
    const { t } = useLanguage();

    // Mock image data - in a real app these would be optimized images
    const items = [
        { title: 'Luxury Living Room', size: 'large', image: '/living-room.png' },
        { title: 'Modular Kitchen', size: 'small', image: '/kitchen.png' },
        { title: 'Designer Bedroom', size: 'small', image: '/bedroom.png' },
        { title: 'Executive Office', size: 'medium', image: '/office.png' },
        { title: 'Premium Villa Lounge', size: 'medium', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200' },
        { title: 'Modern Kitchenette', size: 'small', image: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&q=80&w=800' },
    ];

    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative break-inside-avoid rounded-sm overflow-hidden group cursor-none ${item.size === 'large' ? 'aspect-[3/4]' : item.size === 'medium' ? 'aspect-square' : 'aspect-[4/3]'
                                }`}
                        >
                            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: `url(${item.image})` }} />
                            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/40 transition-all duration-700 flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 uppercase tracking-[0.3em] font-bold text-xs">
                                    View Project
                                </span>
                            </div>
                            <div className="absolute bottom-6 left-6">
                                <p className="text-stone-900 group-hover:text-white transition-colors duration-700 font-bold uppercase tracking-widest text-[10px]">
                                    {item.title}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
