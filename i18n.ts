import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
    // Cette ligne permet de récupérer la locale demandée (attente de la promesse)
    let locale = await requestLocale;

    // Si aucune locale n'est trouvée ou si elle n'est pas valide, on force la locale par défaut
    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale;
    }

    return {

        locale,

        // Chargement des messages
        messages: (await import(`./messages/${locale}.json`)).default
    };
});