import createNextIntlPlugin from 'next-intl/plugin';
import i18nConfig from './src/i18n.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Mode strict React
    reactStrictMode: true,

    output: 'standalone',
    

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: '167.235.62.116',
                port: '7014',
                pathname: '/**',
            },
        ],
    },
    
    // Réécriture des URLs pour l'API
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://167.235.62.116:7014/api/:path*',
            },
        ]
    },
    
    // Optimisations pour Docker
    experimental: {
        // Optimise le tracing des fichiers pour Docker
        outputFileTracingRoot: process.cwd(),
    },
};

export default createNextIntlPlugin(i18nConfig)(nextConfig);