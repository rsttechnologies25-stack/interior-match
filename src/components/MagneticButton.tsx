'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { useMagnetic } from '@/hooks/useMagnetic';

export function MagneticButton({
    children,
    variant = 'primary',
    className = ""
}: {
    children: React.ReactNode;
    variant?: 'primary' | 'outline';
    className?: string;
}) {
    const ref = useRef<HTMLButtonElement>(null);
    const { position, handleMouseMove, handleMouseLeave } = useMagnetic();

    return (
        <motion.button
            ref={ref}
            onMouseMove={(e) => handleMouseMove(e as any, ref.current!)}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={`px-8 py-4 rounded-sm font-medium uppercase tracking-[0.2em] text-sm transition-all relative overflow-hidden group ${variant === 'primary'
                    ? 'bg-stone-900 text-white hover:bg-stone-800 shadow-2xl shadow-stone-400/20'
                    : 'border border-stone-200 text-stone-900 hover:border-stone-900'
                } ${className}`}
        >
            <span className="relative z-10">{children}</span>
            {variant === 'primary' && (
                <motion.div
                    className="absolute inset-x-0 bottom-0 h-[2px] bg-luxury-gold origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                />
            )}
        </motion.button>
    );
}
