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

// 4. Définissez les chemins de route (pathnames).
// Nous gardons les mêmes routes pour toutes les langues - seul le préfixe de langue change.
export const pathnames = {
    // Le chemin racine
    '/': '/',

    // Routes du groupe (auth) - gardons les mêmes noms
    '/login': '/login',
    '/register': '/register',

    // Routes du groupe (main) - gardons les mêmes noms
    '/home': '/home',
    '/explorer': '/explorer',
    '/explorer/[syndicatId]': '/explorer/[syndicatId]',
    '/parametres': '/parametres',
    '/syndicats': '/syndicats',

    // Routes du groupe (syndicate-space) - utilisons des patterns plus flexibles
    '/syndicat-space/[syndicatId]': '/syndicat-space/[syndicatId]',
    '/syndicat-space/[syndicatId]/[section]': '/syndicat-space/[syndicatId]/[section]',
};