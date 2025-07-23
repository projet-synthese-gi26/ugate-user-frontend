import createMiddleware from 'next-intl/middleware';


import { locales, pathnames, localePrefix, defaultLocale } from './i18nConfig.js';


export default createMiddleware({

    locales: locales,

    defaultLocale: defaultLocale,

    pathnames: pathnames,

    localePrefix: localePrefix
});

export const config = {
    matcher: [
        // Match all pathnames except for
        // - api routes
        // - _next (Next.js internals)
        // - favicon.ico (favicon file)
        // - public files (manifest.json, robots.txt, etc.)
        '/((?!api|_next/static|_next/image|favicon.ico|manifest.json|robots.txt).*)'
    ]
};