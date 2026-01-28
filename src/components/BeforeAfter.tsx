'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export function BeforeAfter() {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const position = ((x - rect.left) / rect.width) * 100;
        setSliderPos(Math.min(Math.max(position, 0), 100));
    };

    return (
        <section className="py-32 bg-luxury-offwhite overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold block mb-4">Transformation</span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900">Before & After</h2>
                </motion.div>

                <div
                    ref={containerRef}
                    onMouseMove={handleMove}
                    onTouchMove={handleMove}
                    className="relative aspect-video w-full max-w-5xl mx-auto rounded-sm overflow-hidden cursor-col-resize shadow-2xl"
                >
                    {/* After Image (Background) */}
                    <div className="absolute inset-0 bg-stone-300 flex items-center justify-center text-stone-500 font-bold uppercase tracking-[0.2em]">
                        <div className="absolute inset-0 bg-[url('/living-room-after.png')] bg-cover bg-center" />
                        <span className="relative z-10 bg-white/90 px-4 py-2 rounded-sm text-xs shadow-sm">After</span>
                    </div>

                    {/* Before Image (Overlay) */}
                    <div
                        className="absolute inset-0 bg-stone-500 overflow-hidden"
                        style={{ width: `${sliderPos}%` }}
                    >
                        <div className="absolute inset-0 w-[100vw] max-w-5xl aspect-video bg-[url('/living-room-before.png')] bg-cover bg-center" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="bg-stone-900/90 text-white px-4 py-2 rounded-sm text-xs shadow-sm">Before</span>
                        </div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        className="absolute top-0 bottom-0 w-[2px] bg-white z-20"
                        style={{ left: `${sliderPos}%` }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-luxury-beige">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1c1917" strokeWidth="2"><path d="M18 8L22 12L18 16M6 8L2 12L6 16" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
