
"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building } from 'lucide-react';
import { useTranslations } from 'next-intl';

const AnimatedText = ({ texts }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [texts]);

    return (
        <AnimatePresence mode="wait">
            <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-light text-white text-center"
            >
                {texts[index]}
            </motion.p>
        </AnimatePresence>
    );
};

export default function LoginAside({ animatedTexts }) {
    const t = useTranslations();
    return (
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-blue-900 to-blue-950 flex-col justify-center items-center p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-900 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5"/>
                    <path d="M0,50 Q50,0 100,50 Q50,100 0,50 Z" fill="none" stroke="white" strokeWidth="0.5"/>
                </svg>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-white text-center relative z-10"
            >
                <div className="flex justify-center mb-8">
                    <Building size={80} className="text-white" />
                </div>
                <h1 className="text-5xl font-bold mb-8">{t('app_name')}</h1>
                <AnimatedText texts={animatedTexts} />
            </motion.div>
        </div>
    );
}