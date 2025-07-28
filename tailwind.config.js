// tailwind.config.js

/** @type {import('tailwindcss').Config} */
const config = {
    // Active le mode sombre basé sur une classe
    darkMode: 'class',

    // Indique à Tailwind où trouver les classes qu'il doit générer
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Système de couleurs professionnel - Blanc principal, Bleu foncé secondaire
                primary: {
                    50: '#f8faff',
                    100: '#f0f6ff', 
                    200: '#e1ecff',
                    300: '#c7ddff',
                    400: '#a8c5ff',
                    500: '#85a8ff',
                    600: '#6584ff',
                    700: '#4c63e8',
                    800: '#1e40af', // Bleu foncé principal
                    900: '#1e3a8a',
                    950: '#172554'
                },
                neutral: {
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717'
                },
                accent: {
                    blue: '#1e40af',
                    lightBlue: '#3b82f6',
                    gray: '#6b7280'
                }
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
                'display': ['Inter', 'system-ui', 'sans-serif']
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '112': '28rem',
                '128': '32rem'
            },
            borderRadius: {
                'xl': '0.75rem',
                '2xl': '1rem',
                '3xl': '1.5rem'
            },
            boxShadow: {
                'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
                'medium': '0 4px 16px rgba(0, 0, 0, 0.08)',
                'strong': '0 8px 32px rgba(0, 0, 0, 0.12)',
                'blue': '0 4px 16px rgba(30, 64, 175, 0.15)'
            },
            backdropBlur: {
                'xs': '2px'
            }
        },
    },
    plugins: [],
};

export default config;
