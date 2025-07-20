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
        extend: {},
    },
    plugins: [],
};

export default config;
