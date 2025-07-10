

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    turbopack: {
        enabled: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            { // --- AJOUTEZ CE NOUVEL OBJET ---
                protocol: 'https',
                hostname: 'i.pravatar.cc', // Le nouveau domaine à autoriser
                port: '',
                pathname: '/**', // Autorise toutes les images de ce domaine
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://167.235.62.116:7014/api/:path*', // URL de votre backend
            },
        ]
    },
};

export default nextConfig;