'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export function Services() {
    const { t } = useLanguage();

    const services = [
        { key: 'services.home', image: '/service-home.jpg', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
        { key: 'services.kitchen', image: '/kitchen.png', icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z' },
        { key: 'services.office', image: '/office.png', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
        { key: 'services.renovation', image: '/bedroom.png', icon: 'M11 5L6 9l5 4m3-8l5 4-5 4M12 5l-5 4 5 4m5-8l5 4-5 4' },
    ];

    return (
        <section id="services" className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold block mb-4">Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900 max-w-xl leading-tight">
                        {t('services.title')}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative p-12 bg-stone-50 min-h-[450px] flex flex-col justify-between overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Background Image with Reveal Effect */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-all duration-1000 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0 opacity-30 group-hover:opacity-100"
                                style={{ backgroundImage: `url(${service.image})` }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            {/* Animated number background */}
                            <span className="absolute -right-4 -top-8 text-[120px] font-black text-stone-900/10 group-hover:text-white/10 transition-colors duration-700 select-none">
                                0{i + 1}
                            </span>

                            <div className="relative z-10 w-14 h-14 flex items-center justify-center text-luxury-gold group-hover:text-white transition-colors duration-700 mb-8 border border-luxury-gold/30 group-hover:border-white/50 rounded-sm bg-white/80 backdrop-blur-sm group-hover:bg-transparent shadow-sm">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d={service.icon} />
                                </svg>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-black text-stone-900 group-hover:text-white mb-6 transition-colors duration-700 tracking-tighter uppercase leading-tight drop-shadow-sm">
                                    {t(service.key)}
                                </h3>
                                <div className="h-[2px] w-12 bg-luxury-gold group-hover:w-full transition-all duration-700 ease-in-out" />

                                <p className="mt-4 text-stone-100 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 leading-relaxed">
                                    Transforming your space with precision and aesthetic excellence.
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
