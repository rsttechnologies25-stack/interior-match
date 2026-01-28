'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export function Onboarding() {
    const { t } = useLanguage();

    const builderPerks = [
        { key: 'onboarding.leads', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
        { key: 'onboarding.matching', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' },
        { key: 'onboarding.fake', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
        { key: 'onboarding.growth', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
    ];

    return (
        <section className="py-32 bg-stone-900 text-white relative overflow-hidden">
            {/* Abstract background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/20 rounded-full rotate-45" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] border border-white/10 rounded-full -rotate-12" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="lg:w-1/2">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold block mb-6"
                        >
                            Partnerships
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight"
                        >
                            {t('onboarding.title')}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-stone-400 text-lg mb-12 max-w-md"
                        >
                            Grow your interior design business with high-quality, verified leads matching your expertise.
                        </motion.p>
                        <motion.button
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="px-10 py-5 bg-luxury-gold text-stone-900 font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-white transition-all duration-500"
                        >
                            Apply as a Builder
                        </motion.button>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {builderPerks.map((perk, i) => (
                            <motion.div
                                key={perk.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + 0.4 }}
                                className="p-8 bg-white/5 border border-white/10 rounded-sm hover:bg-white/10 transition-all duration-500 group"
                            >
                                <div className="text-luxury-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d={perk.icon} />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold tracking-tight mb-2 leading-tight">
                                    {t(perk.key)}
                                </h4>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
