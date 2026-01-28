'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useMagnetic } from '../hooks/useMagnetic';
import { Logo } from "./Logo";

export function Header() {
    const { lang, setLang, t } = useLanguage();
    const headerRef = useRef<HTMLElement>(null);

    const navItems = [
        { key: 'nav.home', href: '#' },
        { key: 'nav.how-it-works', href: '#how-it-works' },
        { key: 'nav.services', href: '#services' },
        { key: 'nav.contact', href: '#contact' },
    ];

    return (
        <header
            ref={headerRef}
            className="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b border-luxury-taupe/10 bg-luxury-beige/80"
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <Logo />
                </motion.div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item, idx) => (
                        <motion.a
                            key={item.key}
                            href={item.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-sm font-medium text-stone-600 hover:text-luxury-gold transition-colors uppercase tracking-widest"
                        >
                            {t(item.key)}
                        </motion.a>
                    ))}

                    {/* Language Toggle */}
                    <div className="h-4 w-[1px] bg-luxury-taupe/30 mx-2" />
                    <div className="flex items-center gap-2 bg-stone-100 rounded-full p-1 border border-stone-200">
                        <button
                            onClick={() => setLang('en')}
                            className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${lang === 'en' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-400'
                                }`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => setLang('ta')}
                            className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${lang === 'ta' ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-400'
                                }`}
                        >
                            தமிழ்
                        </button>
                    </div>
                </nav>

                {/* Mobile Toggle Placeholder */}
                <div className="md:hidden">
                    <button className="text-stone-900">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
