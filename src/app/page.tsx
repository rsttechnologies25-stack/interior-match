'use client';

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { Services } from "../components/Services";
import { VisualMasonry } from "../components/VisualMasonry";
import { CinematicHero } from "../components/CinematicHero";
import { Contact } from "../components/Contact";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { StorySection } from "../components/StorySection";
import { Transformation } from "../components/Transformation";
import { DualPath } from "../components/DualPath";
import { useState } from "react";

export default function Home() {
    const { t } = useLanguage();
    const [activeRole, setActiveRole] = useState<'client' | 'builder' | null>(null);

    return (
        <main className="min-h-screen bg-white">
            <Header />

            <CinematicHero />

            {/* Trust Signals */}
            <section className="py-24 border-y border-stone-100 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] -mr-48 -mt-48" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] -ml-48 -mb-48" />

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                    {[
                        { key: 'trust.verified', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
                        { key: 'trust.quality', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.143-7.714L1 12l7.714-2.143L11 3z' },
                        { key: 'trust.nospam', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
                        { key: 'trust.local', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' }
                    ].map((item, i) => (
                        <motion.div
                            key={item.key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-luxury-gold mb-6 group-hover:bg-luxury-gold group-hover:text-white transition-all duration-500 shadow-sm">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d={item.icon} />
                                </svg>
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400 group-hover:text-stone-900 transition-colors duration-500">{t(item.key)}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            <StorySection />
            <Transformation />
            <Services />
            <VisualMasonry />

            <DualPath onSelect={(role) => {
                setActiveRole(role);
                setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }} />

            <Contact externalTab={activeRole || 'client'} />

            <FloatingWhatsApp />
            <Footer />
        </main>
    );
}
