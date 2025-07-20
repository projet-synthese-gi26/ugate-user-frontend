/**
 * Fichier de configuration central pour l'internationalisation (i18n).
 * Ce fichier ne doit contenir que des objets et des variables JavaScript purs.
 * Il ne doit PAS contenir de JSX ni importer de composants React (.jsx).
 */

// 1. Définissez les locales que votre application supporte.
// Ce sont les mêmes que les noms de vos fichiers de messages (en.json, fr.json, etc.).
export const locales = ['fr', 'en', 'de'];

// 2. Définissez la locale par défaut.
// C'est la locale qui sera utilisée si l'URL ne contient pas de préfixe de locale.
export const defaultLocale = 'fr';

// 3. Définissez la stratégie pour le préfixe de locale dans l'URL.
// 'always' force toujours un préfixe (ex: /fr/connexion, /en/login).
// Cela redirige automatiquement /login vers /fr/login par défaut.
export const localePrefix = 'always';

// 4. Définissez les traductions pour vos chemins de route (pathnames).
// Cela permet d'avoir des URLs comme /connexion en français et /login en anglais.
export const pathnames = {
    // Le chemin racine
    '/': '/',

    // Routes du groupe (auth)
    '/login': {
        fr: '/connexion',
        en: '/login',
        de: '/anmeldung',
    },
    '/register': {
        fr: '/inscription',
        en: '/register',
        de: '/registrieren',
    },

    // Routes du groupe (main)
    '/home': {
        fr: '/accueil',
        en: '/home',
        de: '/startseite',
    },
    '/explorer': {
        fr: '/explorer',
        en: '/explore',
        de: '/entdecken',
    },
    // Pour les routes dynamiques, on ne traduit que la base.
    // Next-intl ajoutera automatiquement le segment [syndicatId].
    '/explorer/[syndicatId]': {
        fr: '/explorer/[syndicatId]',
        en: '/explore/[syndicatId]',
        de: '/entdecken/[syndicatId]',
    },
    '/parametres': {
        fr: '/parametres',
        en: '/settings',
        de: '/einstellungen',
    },
    '/syndicats': {
        fr: '/syndicats',
        en: '/my-unions',
        de: '/meine-gewerkschaften',
    },

    // Routes du groupe (syndicate-space)
    '/syndicat-space/[syndicatId]': {
        fr: '/syndicat-space/[syndicatId]',
        en: '/union-space/[syndicatId]',
        de: '/gewerkschaftsbereich/[syndicatId]',
    },
    '/syndicat-space/[syndicatId]/membres': {
        fr: '/syndicat-space/[syndicatId]/membres',
        en: '/union-space/[syndicatId]/members',
        de: '/gewerkschaftsbereich/[syndicatId]/mitglieder',
    },
    '/syndicat-space/[syndicatId]/evenements': {
        fr: '/syndicat-space/[syndicatId]/evenements',
        en: '/union-space/[syndicatId]/events',
        de: '/gewerkschaftsbereich/[syndicatId]/veranstaltungen',
    },
    '/syndicat-space/[syndicatId]/exprimer': {
        fr: '/syndicat-space/[syndicatId]/exprimer',
        en: '/union-space/[syndicatId]/express',
        de: '/gewerkschaftsbereich/[syndicatId]/meinung',
    },
    '/syndicat-space/[syndicatId]/chat': {
        fr: '/syndicat-space/[syndicatId]/chat',
        en: '/union-space/[syndicatId]/chat',
        de: '/gewerkschaftsbereich/[syndicatId]/chat',
    },
    '/syndicat-space/[syndicatId]/votes': {
        fr: '/syndicat-space/[syndicatId]/votes',
        en: '/union-space/[syndicatId]/votes',
        de: '/gewerkschaftsbereich/[syndicatId]/abstimmungen',
    },
};