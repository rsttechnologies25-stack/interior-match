import type { Metadata } from "next";
import { Inter, Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoTamil = Noto_Sans_Tamil({ subsets: ["tamil"], variable: "--font-noto-tamil" });

export const metadata: Metadata = {
    title: "Interior Match | Connect with Trusted Interior Builders",
    description: "Bilingual platform connecting clients with professional interior designers and builders.",
};

import { LanguageProvider } from "../context/LanguageContext";
import { SmoothScroll } from "../components/SmoothScroll";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${notoTamil.variable} antialiased selection:bg-luxury-gold/30`}>
                <LanguageProvider>
                    <SmoothScroll>
                        <div className="grain-overlay" />
                        {children}
                    </SmoothScroll>
                </LanguageProvider>
            </body>
        </html>
    );
}
