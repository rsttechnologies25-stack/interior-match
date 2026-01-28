'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Transformation = () => {
    const { t } = useLanguage();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const spaceReveal = useTransform(scrollYProgress, [0.3, 0.6], ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]);
    const shadowOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 0.3]);
    const textY = useTransform(scrollYProgress, [0.2, 0.5], [50, 0]);
    const textOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

    return (
        <section ref={containerRef} className="py-32 bg-stone-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    style={{ y: textY, opacity: textOpacity }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 mb-4">
                        {t('story.title')}
                    </h2>
                    <p className="text-stone-500 text-lg md:text-xl font-light">
                        {t('hero.subtitle')}
                    </p>
                </motion.div>

                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-stone-200">
                    {/* Before Image (Base) */}
                    <div className="absolute inset-0 bg-[url('/living-room-before.png')] bg-cover bg-center grayscale brightness-75" />

                    {/* After Image (Revealed on Scroll) */}
                    <motion.div
                        style={{ clipPath: spaceReveal }}
                        className="absolute inset-0 z-10 bg-[url('/living-room-after.png')] bg-cover bg-center"
                    >
                        {/* Soft depth shadow at the reveal edge */}
                        <motion.div
                            style={{ opacity: shadowOpacity }}
                            className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black/20 to-transparent z-20"
                        />
                    </motion.div>

                    {/* Labels */}
                    <div className="absolute top-6 left-6 z-20 px-3 py-1 bg-black/50 backdrop-blur-md text-white text-[10px] uppercase tracking-widest rounded-full">
                        Original Space
                    </div>
                    <div className="absolute top-6 right-6 z-20 px-3 py-1 bg-luxury-gold text-white text-[10px] uppercase tracking-widest rounded-full">
                        Transformed Home
                    </div>
                </div>
            </div>
        </section>
    );
};
