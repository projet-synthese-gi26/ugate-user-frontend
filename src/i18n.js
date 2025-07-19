import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';        // ← Ajout nécessaire
import { routing } from './i18n/routing';

export default getRequestConfig(async ({ locale }) => {
  // Valide que la locale passée en param est bien dans votre liste
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
