import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    // Une liste de toutes les locales supportées
    locales: ['fr', 'en', 'de'],

    // Locale par défaut
    defaultLocale: 'fr'
});