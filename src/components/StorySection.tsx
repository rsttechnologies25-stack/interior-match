'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

const StoryStep = ({ text, isActive }: { text: string; isActive: boolean }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 flex items-center justify-center px-6"
    >
        <p className="text-2xl md:text-5xl font-light text-white text-center max-w-4xl leading-tight drop-shadow-2xl">
            {text}
        </p>
    </motion.div>
);

export const StorySection = () => {
    const { t } = useLanguage();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const steps = [
        t('story.step1'),
        t('story.step2'),
        t('story.step3')
    ];

    // Map scroll progress to active step
    const step1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [0, 1, 0]);
    const step2Opacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]);
    const step3Opacity = useTransform(scrollYProgress, [0.65, 0.75, 1], [0, 1, 1]);

    const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-stone-900">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                {/* Fixed Background */}
                <motion.div
                    style={{ scale: bgScale }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <div className="absolute inset-0 bg-[url('/bedroom.png')] bg-cover bg-center" />
                </motion.div>

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="absolute top-12 left-1/2 -translate-x-1/2 z-20 text-center w-full"
                >
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-luxury-gold px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-luxury-gold/20">
                        {t('story.title')}
                    </span>
                </motion.div>

                {/* Narrative Steps */}
                <div className="relative z-20 h-full">
                    <motion.div style={{ opacity: step1Opacity }} className="absolute inset-0 flex items-center justify-center px-6">
                        <p className="text-2xl md:text-5xl font-light text-white text-center max-w-4xl leading-tight">
                            {steps[0]}
                        </p>
                    </motion.div>
                    <motion.div style={{ opacity: step2Opacity }} className="absolute inset-0 flex items-center justify-center px-6">
                        <p className="text-2xl md:text-5xl font-light text-white text-center max-w-4xl leading-tight">
                            {steps[1]}
                        </p>
                    </motion.div>
                    <motion.div style={{ opacity: step3Opacity }} className="absolute inset-0 flex items-center justify-center px-6">
                        <p className="text-2xl md:text-5xl font-light text-white text-center max-w-4xl leading-tight">
                            {steps[2]}
                        </p>
                    </motion.div>
                </div>

                {/* Progression Bar */}
                <div className="absolute bottom-10 left-10 right-10 z-20 h-[1px] bg-white/10">
                    <motion.div
                        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
                        className="h-full bg-luxury-gold"
                    />
                </div>
            </div>
        </section>
    );
};
