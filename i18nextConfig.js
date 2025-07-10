
const i18nConfig = require('./i18nConfig');

module.exports = {
    supportedLngs: i18nConfig.locales,
    fallbackLng: i18nConfig.defaultLocale,
    defaultNS: 'translation', // Nom du fichier de traduction par défaut
    react: {
        useSuspense: false,
    },
};