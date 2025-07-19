import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
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
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://167.235.62.116:7014/api/:path*',
            },
        ]
    },
};

const withNextIntl = createNextIntlPlugin();
 
export default withNextIntl(nextConfig);