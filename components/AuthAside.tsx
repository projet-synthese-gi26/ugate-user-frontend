"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '@/components/ui/Logo';

interface AuthAsideProps {
    animatedTexts: string[];
}

export default function AuthAside({ animatedTexts }: AuthAsideProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % animatedTexts.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [animatedTexts.length]);

    return (
        <div className="hidden lg:flex relative overflow-hidden bg-slate-900 items-center justify-center p-16">
            {/* Image de fond avec Overlay */}
            <div className="absolute inset-0 z-0">
                {/* Tu peux changer l'URL de l'image ici */}
                <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                    alt="Office"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/80 to-navy-900/50" />
            </div>

            {/* Contenu superposé */}
            <div className="relative z-10 w-full max-w-lg">
                <Logo className="mb-12" />

                <div className="h-1 w-20 bg-primary-500 rounded-full mb-8" />

                <div className="h-40"> {/* Hauteur fixe pour éviter le saut */}
                    <AnimatePresence mode="wait">
                        <motion.h2
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl md:text-5xl font-bold text-white leading-tight"
                        >
                            {animatedTexts[index]}
                        </motion.h2>
                    </AnimatePresence>
                </div>

                <p className="text-slate-400 text-lg mt-4 font-light leading-relaxed">
                    Rejoignez la nouvelle ère de la gestion syndicale numérique. Sécurité, transparence et engagement membre.
                </p>

                {/* Indicateurs (points) */}
                <div className="flex gap-2 mt-12">
                    {animatedTexts.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                                i === index ? "w-8 bg-primary-500" : "w-2 bg-slate-700"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}