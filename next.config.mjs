import createNextIntlPlugin from 'next-intl/plugin';
import i18nConfig from './src/i18n.js';

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Mode strict React
    reactStrictMode: true,
    
    output: 'standalone',
      // Optimise le tracing des fichiers pour Docker
        outputFileTracingRoot: process.cwd(), 

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
            {
                protocol: 'https',
                hostname: 'media-service.pynfi.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
    
    // Réécriture des URLs pour l'API (proxy pour éviter CORS)
    async rewrites() {
        return [
            // Proxy pour le service d'authentification
            {
                source: '/api/auth/:path*',
                destination: 'https://auth-service.pynfi.com/api/auth/:path*',
            },
            // Proxy pour le service des syndicats
            {
                source: '/api/syndicates/:path*',
                destination: 'https://ugate.pynfi.com/syndicates/:path*',
            },
            // Proxy pour les publications
            {
                source: '/api/publications/:path*',
                destination: 'https://ugate.pynfi.com/publications/:path*',
            },
            // Proxy pour les événements
            {
                source: '/api/events/:path*',
                destination: 'https://ugate.pynfi.com/events/:path*',
            },
            // Proxy pour le feed
            {
                source: '/api/feed/:path*',
                destination: 'https://ugate.pynfi.com/feed/:path*',
            },
            // Proxy pour les utilisateurs
            {
                source: '/api/users/:path*',
                destination: 'https://auth-service.pynfi.com/api/users/:path*',
            },
            // Fallback pour les autres APIs
            {
                source: '/api/:path*',
                destination: 'http://167.235.62.116:7014/api/:path*',
            },
        ]
    },
    
    // Optimisations pour Docker
    experimental: {
      
    },
};

export default createNextIntlPlugin(i18nConfig)(nextConfig);