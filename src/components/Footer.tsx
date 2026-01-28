'use client';

import { useLanguage } from "../context/LanguageContext";
import { Logo } from "./Logo";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <Logo textColor="text-white" />

                <nav className="flex gap-8 text-xs font-medium uppercase tracking-widest">
                    <a href="#" className="hover:text-white transition-colors">{t('nav.home')}</a>
                    <a href="#how-it-works" className="hover:text-white transition-colors">{t('nav.how-it-works')}</a>
                    <a href="#services" className="hover:text-white transition-colors">{t('nav.services')}</a>
                    <a href="#contact" className="hover:text-white transition-colors">{t('nav.contact')}</a>
                </nav>

                <p className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-50 text-center md:text-right">
                    {t('legal.disclaimer')}
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-stone-800/50 flex justify-between items-center text-[10px] uppercase tracking-widest">
                <span>© 2026 Interior Match</span>
                <span>Premium Interior Connect</span>
            </div>
        </footer>
    );
}
