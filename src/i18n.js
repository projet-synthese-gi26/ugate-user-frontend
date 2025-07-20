import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation.js';

import { locales } from '../i18nConfig.js';

export default getRequestConfig(async ({ locale }) => {

  if (!locales.includes(locale)) {

    notFound();
  }


  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});