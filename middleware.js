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

        '/((?!api|_next/static|_next/image|favicon.ico).*)'
    ]
};