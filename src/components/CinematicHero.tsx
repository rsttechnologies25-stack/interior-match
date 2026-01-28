'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SplitText } from './SplitText';
import { MagneticButton } from './MagneticButton';

export const CinematicHero = () => {
    const { t } = useLanguage();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    // Wooden Door reveal animation variants
    const doorLeft = {
        initial: { x: 0 },
        animate: {
            x: "-100%",
            transition: {
                duration: 1.8,
                ease: [0.83, 0, 0.17, 1],
                delay: 0.5
            }
        }
    };

    const doorRight = {
        initial: { x: 0 },
        animate: {
            x: "100%",
            transition: {
                duration: 1.8,
                ease: [0.83, 0, 0.17, 1],
                delay: 0.5
            }
        }
    };

    // Shine animation for doors
    const shineVariants = {
        initial: { x: "-100%", opacity: 0 },
        animate: {
            x: "200%",
            opacity: [0, 0.3, 0],
            transition: {
                duration: 1.5,
                delay: 0.7,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-stone-900">
            {/* Wooden Doors Loader */}
            <div className="absolute inset-0 z-50 pointer-events-none flex">
                <motion.div
                    variants={doorLeft}
                    initial="initial"
                    animate="animate"
                    className="relative h-full w-1/2 bg-[url('/teak-wood.png')] bg-cover bg-center border-r border-black/30 shadow-[40px_0_100px_rgba(0,0,0,0.8)] flex justify-end overflow-hidden"
                >
                    {/* Shine effect */}
                    <motion.div
                        variants={shineVariants}
                        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg]"
                    />
                    {/* Vertical handle/accent */}
                    <div className="h-full w-2 bg-gradient-to-b from-luxury-gold/20 via-luxury-gold/60 to-luxury-gold/20 shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
                    {/* Ambient shadow gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/10" />
                </motion.div>
                <motion.div
                    variants={doorRight}
                    initial="initial"
                    animate="animate"
                    className="relative h-full w-1/2 bg-[url('/teak-wood.png')] bg-cover bg-center border-l border-black/30 shadow-[-40px_0_100px_rgba(0,0,0,0.8)] flex justify-start overflow-hidden"
                >
                    {/* Shine effect */}
                    <motion.div
                        variants={shineVariants}
                        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg]"
                    />
                    {/* Vertical handle/accent */}
                    <div className="h-full w-2 bg-gradient-to-b from-luxury-gold/20 via-luxury-gold/60 to-luxury-gold/20 shadow-[0_0_15px_rgba(212,175,55,0.4)]" />
                    {/* Ambient shadow gradient */}
                    <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-black/10" />
                </motion.div>
            </div>

            {/* Background Image / Video */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/50 z-10" />
                <div
                    className="absolute inset-0 bg-[url('/living-room.png')] bg-cover bg-center"
                    role="img"
                    aria-label="Luxury Interior"
                />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-20 h-full flex flex-col items-center justify-center px-6 text-center text-white"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="mb-6"
                >
                    <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-luxury-gold px-4 py-2 border border-luxury-gold/30 rounded-full bg-black/40 backdrop-blur-md">
                        Est. 2024
                    </span>
                </motion.div>

                <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] max-w-5xl">
                    <SplitText
                        text={t('hero.title')}
                    />
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
                    className="text-lg md:text-2xl text-stone-200 mb-12 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-xl"
                >
                    {t('hero.subtitle')}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.0 }}
                    className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
                >
                    <MagneticButton variant="primary" className="!bg-white !text-stone-900 border-none shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all px-10 py-5 text-sm">
                        {t('hero.cta.client')}
                    </MagneticButton>
                    <MagneticButton variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-stone-900 px-10 py-5 text-sm backdrop-blur-sm">
                        {t('hero.cta.builder')}
                    </MagneticButton>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-luxury-gold to-transparent" />
                </motion.div>
            </motion.div>

            {/* Grain Overlay */}
            <div className="absolute inset-0 pointer-events-none z-30 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </section>
    );
};
