/** @type {import('next').NextConfig} */
const nextConfig = {
    // Mode strict React
    reactStrictMode: true,
    
    // ESSENTIEL pour Docker - génère le dossier standalone
    output: 'standalone',
    
    // Turbopack - retiré l'option 'enabled' qui causait l'avertissement
    // Note: Turbopack est automatiquement utilisé en développement avec Next.js 15+
    // turbopack: {
    //     enabled: true, // <- Cette ligne causait l'avertissement
    // },
    
    // Configuration des images
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

export default nextConfig;