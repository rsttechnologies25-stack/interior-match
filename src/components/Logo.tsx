'use client';

import { motion } from 'framer-motion';

export function Logo({ className = "", textColor = "text-stone-900" }: { className?: string; textColor?: string }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <motion.div
                whileHover={{ rotate: 90 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="relative w-8 h-8 flex items-center justify-center"
            >
                {/* Architectural Frame */}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="4" width="22" height="22" stroke="currentColor" strokeWidth="1.5" className={textColor} />
                    <motion.rect
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        x="15" y="15" width="13" height="13" fill="#D4AF37"
                    />
                    <path d="M15 15V28M15 15H28" stroke="white" strokeWidth="1" />
                </svg>
            </motion.div>

            <div className={`flex flex-col leading-none ${textColor}`}>
                <span className="text-xl font-black tracking-tighter uppercase">Interior</span>
                <span className="text-[10px] tracking-[0.4em] font-bold text-[#D4AF37] mt-1">Match</span>
            </div>
        </div>
    );
}
