
'use client';

import { I18nextProvider } from 'react-i18next';
import initTranslations from '../app/i18n'; // On va créer ce fichier juste après
import i18nConfig from '../../i18nextConfig';
import { createInstance } from 'i18next';

export default function I18nProvider({
                                         children,
                                         locale,
                                         namespaces
                                     }) {
    const i18n = createInstance();

    initTranslations(locale, namespaces, i18n);

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}