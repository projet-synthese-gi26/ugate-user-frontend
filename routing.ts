import {defineRouting} from 'next-intl/routing';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
    // Une liste de toutes les locales supportées
    locales: ['fr', 'en', 'de'],

    // Locale par défaut
    defaultLocale: 'fr'
});