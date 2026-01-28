'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export function HowItWorks() {
    const { t } = useLanguage();

    const clientSteps = [
        { num: '01', key: 'hiw.client.step1' },
        { num: '02', key: 'hiw.client.step2' },
        { num: '03', key: 'hiw.client.step3' },
    ];

    const builderSteps = [
        { num: '01', key: 'hiw.builder.step1' },
        { num: '02', key: 'hiw.builder.step2' },
        { num: '03', key: 'hiw.builder.step3' },
    ];

    const StepCard = ({ num, text, index }: { num: string; text: string; index: number }) => (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex items-start gap-4 mb-8 last:mb-0 group"
        >
            <span className="text-3xl font-bold text-luxury-gold/20 group-hover:text-luxury-gold/40 transition-colors duration-500 tabular-nums">
                {num}
            </span>
            <div className="pt-2">
                <p className="text-stone-700 font-medium tracking-wide">{text}</p>
                <div className="h-[1px] w-0 group-hover:w-full bg-luxury-gold/30 transition-all duration-700 mt-2" />
            </div>
        </motion.div>
    );

    return (
        <section id="how-it-works" className="py-32 bg-luxury-beige/30">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-taupe block mb-4">Process</span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900">{t('hiw.title')}</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-20">
                    {/* Client Side */}
                    <div className="bg-white p-12 rounded-sm border border-stone-100 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="8.5" cy="7" r="4" /><path d="M20 8v6M23 11h-6" /></svg>
                        </div>
                        <h3 className="text-xl font-bold uppercase tracking-widest text-stone-900 mb-12 border-b border-stone-100 pb-4">
                            {t('hiw.client.title')}
                        </h3>
                        <div className="relative">
                            {clientSteps.map((step, i) => (
                                <StepCard key={step.key} num={step.num} text={t(step.key)} index={i} />
                            ))}
                        </div>
                    </div>

                    {/* Builder Side */}
                    <div className="bg-stone-900 p-12 rounded-sm shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1"><path d="M20 7h-9M14 17h5a2 2 0 002-2v-4a2 2 0 00-2-2h-3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M9 14a4 4 0 100-8 4 4 0 000 8z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold uppercase tracking-widest text-luxury-gold mb-12 border-b border-white/10 pb-4">
                            {t('hiw.builder.title')}
                        </h3>
                        <div className="relative">
                            {builderSteps.map((step, i) => (
                                <StepCard key={step.key} num={step.num} text={t(step.key)} index={i + 3} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
