'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const DualPath = ({ onSelect }: { onSelect: (type: 'client' | 'builder') => void }) => {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-[80vh] flex flex-col md:flex-row overflow-hidden bg-stone-900">
            {/* Client Path */}
            <motion.div
                whileHover={{ flex: 1.2 }}
                onClick={() => onSelect('client')}
                className="relative flex-1 group cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-white/10"
            >
                <div className="absolute inset-0 z-0 bg-[url('/living-room.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 z-10 bg-stone-900/60 transition-colors duration-500 group-hover:bg-luxury-gold/20" />

                <div className="relative z-20 h-full flex flex-col items-center justify-center p-12 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold mb-4"
                    >
                        I want a beautiful home
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
                        🧑 {t('contact.client.tab')}
                    </h2>
                    <div className="w-12 h-[1px] bg-white group-hover:w-24 transition-all duration-500" />
                </div>
            </motion.div>

            {/* Builder Path */}
            <motion.div
                whileHover={{ flex: 1.2 }}
                onClick={() => onSelect('builder')}
                className="relative flex-1 group cursor-pointer overflow-hidden"
            >
                <div className="absolute inset-0 z-0 bg-[url('/office.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 z-10 bg-stone-900/60 transition-colors duration-500 group-hover:bg-stone-800/40" />

                <div className="relative z-20 h-full flex flex-col items-center justify-center p-12 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mb-4"
                    >
                        I want quality clients
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">
                        👷 {t('contact.builder.tab')}
                    </h2>
                    <div className="w-12 h-[1px] bg-white group-hover:w-24 transition-all duration-500" />
                </div>
            </motion.div>

            {/* Middle Divider Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none hidden md:block">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-stone-900 font-bold text-sm tracking-widest shadow-2xl">
                    OR
                </div>
            </div>
        </section>
    );
};
