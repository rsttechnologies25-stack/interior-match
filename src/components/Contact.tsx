'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export function Contact({ externalTab }: { externalTab?: 'client' | 'builder' }) {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<'client' | 'builder'>(externalTab || 'client');
    const [formData, setFormData] = useState<any>({
        name: '',
        phone: '',
        city: '',
        budget: '3L–5L',
        property: '',
        company: '',
        exp: '',
        portfolio: '',
        message: ''
    });

    React.useEffect(() => {
        if (externalTab) setActiveTab(externalTab);
    }, [externalTab]);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };

    const InputField = ({ label, name, type = "text", placeholder = "" }: any) => (
        <div className="mb-6 relative group">
            <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-2 transition-colors group-focus-within:text-luxury-gold">{label}</label>
            <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="w-full bg-stone-50 border border-stone-200 p-4 rounded-sm focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/5 outline-none transition-all text-stone-900 shadow-sm"
            />
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-luxury-gold transition-all duration-500 group-focus-within:w-full" />
        </div>
    );

    const SelectField = ({ label, name, options }: any) => (
        <div className="mb-6 relative group">
            <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-2 transition-colors group-focus-within:text-luxury-gold">{label}</label>
            <select
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                className="w-full bg-stone-50 border border-stone-200 p-4 rounded-sm focus:border-luxury-gold focus:ring-4 focus:ring-luxury-gold/5 outline-none transition-all text-stone-900 appearance-none"
            >
                {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-luxury-gold transition-all duration-500 group-focus-within:w-full" />
        </div>
    );

    const handleWhatsApp = () => {
        const phone = "918825600984";

        let message = `*NEW LEAD: ${activeTab.toUpperCase()}*\n`;
        message += `--------------------------\n`;
        message += `👤 *Name:* ${formData.name}\n`;
        message += `📞 *Phone:* ${formData.phone}\n`;
        message += `📍 *City:* ${formData.city}\n`;

        if (activeTab === 'client') {
            message += `💰 *Budget:* ${formData.budget}\n`;
            message += `🏢 *Property:* ${formData.property}\n`;
        } else {
            message += `🏢 *Company:* ${formData.company}\n`;
            message += `⏳ *Exp:* ${formData.exp} years\n`;
            message += `🔗 *Portfolio:* ${formData.portfolio}\n`;
        }

        if (formData.message) {
            message += `\n📝 *Message:* ${formData.message}`;
        }

        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section id="contact" className="py-32 bg-luxury-beige/20">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-luxury-gold block mb-4">Final Step</span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900">{t('contact.title')}</h2>
                </motion.div>

                {/* Form Container */}
                <div className="bg-white rounded-sm shadow-2xl shadow-stone-200/50 border border-stone-100 overflow-hidden">
                    {/* Tabs */}
                    <div className="flex border-b border-stone-100">
                        <button
                            onClick={() => setActiveTab('client')}
                            className={`flex-1 py-6 text-[10px] uppercase tracking-widest font-bold border-b-2 transition-all ${activeTab === 'client' ? 'border-luxury-gold text-stone-900 bg-stone-50/50' : 'border-transparent text-stone-400 hover:text-stone-600'
                                }`}
                        >
                            {t('contact.client.tab')}
                        </button>
                        <button
                            onClick={() => setActiveTab('builder')}
                            className={`flex-1 py-6 text-[10px] uppercase tracking-widest font-bold border-b-2 transition-all ${activeTab === 'builder' ? 'border-luxury-gold text-stone-900 bg-stone-50/50' : 'border-transparent text-stone-400 hover:text-stone-600'
                                }`}
                        >
                            {t('contact.builder.tab')}
                        </button>
                    </div>

                    <div className="p-8 md:p-12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                                    <InputField label={t('contact.name')} name="name" />
                                    {activeTab === 'builder' && <InputField label={t('contact.company')} name="company" />}
                                    <InputField label={t('contact.phone')} name="phone" type="tel" />
                                    <InputField label={t('contact.city')} name="city" />

                                    {activeTab === 'client' ? (
                                        <>
                                            <SelectField label={t('contact.budget')} name="budget" options={['3L–5L', '5L–10L', '10L+']} />
                                            <InputField label={t('contact.property')} name="property" placeholder="e.g. 3BHK Apartment" />
                                        </>
                                    ) : (
                                        <>
                                            <InputField label={t('contact.exp')} name="exp" type="number" />
                                            <InputField label={t('contact.portfolio')} name="portfolio" placeholder="https://..." />
                                        </>
                                    )}
                                </div>
                                <div className="mb-8">
                                    <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-2">{t('contact.message')}</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="w-full bg-stone-50 border border-stone-200 p-4 rounded-sm focus:border-luxury-gold focus:ring-0 outline-none transition-colors text-stone-900 h-32 resize-none"
                                    />
                                </div>

                                <button
                                    onClick={handleWhatsApp}
                                    className="w-full py-5 bg-stone-900 text-white font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-luxury-gold transition-all duration-500 shadow-xl shadow-stone-200 flex items-center justify-center gap-3 group"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    {t('contact.submit')}
                                </button>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
