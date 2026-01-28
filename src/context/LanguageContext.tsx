'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ta';

interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
    en: {
        // Header
        'nav.home': 'Home',
        'nav.how-it-works': 'How it Works',
        'nav.services': 'Services',
        'nav.contact': 'Contact',
        // Hero
        'hero.title': 'Transforming Empty Spaces into Beautiful Homes',
        'hero.subtitle': 'We connect you with trusted interior builders in your city.',
        'hero.cta.client': 'I Need an Interior Builder',
        'hero.cta.builder': 'I’m an Interior Builder',
        // Trust
        'trust.verified': 'Verified professionals',
        'trust.quality': 'Quality-checked portfolios',
        'trust.nospam': 'No spam guarantee',
        'trust.local': 'Local service support',
        // How It Works
        'hiw.title': 'How It Works',
        'hiw.client.title': 'For Clients',
        'hiw.client.step1': 'Submit requirement',
        'hiw.client.step2': 'We verify & match',
        'hiw.client.step3': 'Builder contacts you',
        'hiw.builder.title': 'For Builders',
        'hiw.builder.step1': 'Register with us',
        'hiw.builder.step2': 'Get verified',
        'hiw.builder.step3': 'Receive local leads',
        // Services
        'services.title': 'Our Specialized Services',
        'services.home': 'Home Interior',
        'services.kitchen': 'Modular Kitchen',
        'services.office': 'Office Interior',
        'services.renovation': 'Renovation',
        // Why Choose Us
        'why.title': 'Why Choose Us',
        'why.verified': 'Verified builders',
        'why.personalized': 'Personalized matching',
        'why.consultation': 'Free consultation',
        'why.quality': 'Quality assurance',
        // Builder Onboarding
        'onboarding.title': 'Why Builders Join Us',
        'onboarding.leads': 'Verified client leads',
        'onboarding.matching': 'Area-wise matching',
        'onboarding.fake': 'No fake inquiries',
        'onboarding.growth': 'Growth support',
        // Contact Form
        'contact.title': 'Get Started Today',
        'contact.client.tab': 'I Need Interior Work',
        'contact.builder.tab': 'I Want to Partner',
        'contact.company': 'Company Name',
        'contact.name': 'Full Name',
        'contact.phone': 'Phone Number',
        'contact.city': 'City',
        'contact.budget': 'Budget Range',
        'contact.property': 'Property Type',
        'contact.exp': 'Years of Experience',
        'contact.portfolio': 'Portfolio Link',
        'contact.message': 'Message',
        'contact.submit': 'Submit via WhatsApp',
        // Story Section
        'story.title': 'Watch how a space becomes a home.',
        'story.step1': 'Share your vision. Let us handle the complexity of finding the right partner.',
        'story.step2': 'We meticulously match you with verified builders who fit your budget and style.',
        'story.step3': 'Your chosen builder brings the craft to life, transforming your space into an emotion.',
        // Footer
        'legal.disclaimer': 'We only connect clients and builders. We do not execute the work.',
    },
    ta: {
        // Header
        'nav.home': 'முகப்பு',
        'nav.how-it-works': 'செயல்முறை',
        'nav.services': 'சேவைகள்',
        'nav.contact': 'தொடர்பு',
        // Hero
        'hero.title': 'வெற்று இடங்களை அழகான வீடுகளாக மாற்றுகிறோம்',
        'hero.subtitle': 'உங்கள் நகரில் உள்ள நம்பகமான இன்டீரியர் பில்டர்களுடன் உங்களை இணைக்கிறோம்',
        'hero.cta.client': 'எனக்கு ஒரு பில்டர் தேவை',
        'hero.cta.builder': 'நான் ஒரு பில்டர்',
        // Trust
        'trust.verified': 'சரிபார்க்கப்பட்ட வல்லுநர்கள்',
        'trust.quality': 'தரமான போர்ட்ஃபோலியோக்கள்',
        'trust.nospam': 'தேவையற்ற செய்திகள் இல்லை',
        'trust.local': 'உள்ளூர் சேவை ஆதரவு',
        // How It Works
        'hiw.title': 'செயல்முறை',
        'hiw.client.title': 'வாடிக்கையாளர்களுக்கு',
        'hiw.client.step1': 'தேவையைச் சமர்ப்பிக்கவும்',
        'hiw.client.step2': 'நாங்கள் சரிபார்த்து இணைப்போம்',
        'hiw.client.step3': 'பில்டர் உங்களைத் தொடர்புகொள்வார்',
        'hiw.builder.title': 'பில்டர்களுக்கு',
        'hiw.builder.step1': 'எங்களுடன் பதிவு செய்யுங்கள்',
        'hiw.builder.step2': 'சரிபார்க்கப்படவும்',
        'hiw.builder.step3': 'உள்ளூர் லீட்களைப் பெறுங்கள்',
        // Services
        'services.title': 'எங்கள் சிறப்பு சேவைகள்',
        'services.home': 'வீட்டு இன்டீரியர்',
        'services.kitchen': 'மாடுலர் கிச்சன்',
        'services.office': 'அலுவலக இன்டீரியர்',
        'services.renovation': 'புதுப்பிப்பு',
        // Why Choose Us
        'why.title': 'ஏன் எங்களை தேர்வு செய்ய வேண்டும்?',
        'why.verified': 'சரிபார்க்கப்பட்ட பில்டர்கள்',
        'why.personalized': 'தனிப்பட்ட பொருத்தம்',
        'why.consultation': 'இலவச ஆலோசனை',
        'why.quality': 'தர உத்தரவாதம்',
        // Builder Onboarding
        'onboarding.title': 'பில்டர்கள் ஏன் எங்களுடன் இணைகிறார்கள்?',
        'onboarding.leads': 'சரிபார்க்கப்பட்ட வாடிக்கையாளர் லீட்கள்',
        'onboarding.matching': 'பகுதி வாரியான பொருத்தம்',
        'onboarding.fake': 'போலி விசாரணைகள் இல்லை',
        'onboarding.growth': 'வளர்ச்சி ஆதரவு',
        // Contact Form
        'contact.title': 'இன்றே தொடங்குங்கள்',
        'contact.client.tab': 'எனக்கு இன்டீரியர் வேலை வேண்டும்',
        'contact.builder.tab': 'நான் இணைய விரும்புகிறேன்',
        'contact.company': 'நிறுவனத்தின் பெயர்',
        'contact.name': 'முழு பெயர்',
        'contact.phone': 'தொலைபேசி எண்',
        'contact.city': 'ஊர்',
        'contact.budget': 'பட்ஜெட் வரம்பு',
        'contact.property': 'சொத்து வகை',
        'contact.exp': 'அனுபவ ஆண்டுகள்',
        'contact.portfolio': 'போர்ட்ஃபோலியோ இணைப்பு',
        'contact.message': 'செய்தி',
        'contact.submit': 'வாட்ஸ்அப் மூலம் சமர்ப்பிக்கவும்',
        // Story Section
        'story.title': 'ஒரு இடம் எப்படி வீடாக மாறுகிறது என்பதை பாருங்கள்.',
        'story.step1': 'உங்கள் கனவைப் பகிர்ந்து கொள்ளுங்கள். சரியான கூட்டாளரைக் கண்டுபிடிக்கும் வேலையை எங்களிடம் விட்டுவிடுங்கள்.',
        'story.step2': 'உங்கள் பட்ஜெட் மற்றும் ஸ்டைலுக்கு ஏற்ற சரிபார்க்கப்பட்ட பில்டர்களுடன் நாங்கள் உங்களை இணைக்கிறோம்.',
        'story.step3': 'தேர்ந்தெடுக்கப்பட்ட பில்டர் உங்கள் இடத்தை ஓர் உணர்ச்சியாக மாற்றி, உங்கள் கனவை நனவாக்குகிறார்.',
        // Footer
        'legal.disclaimer': 'நாங்கள் வாடிக்கையாளர்களையும் பில்டர்களையும் மட்டுமே இணைக்கிறோம். நாங்கள் வேலையைச் செய்யவில்லை.',
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Language>('en');

    const t = (key: string) => {
        return translations[lang][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            <div className={lang === 'ta' ? 'font-tamil' : 'font-sans'}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within LanguageProvider');
    return context;
}
