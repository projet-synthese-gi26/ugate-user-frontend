import {defineRouting} from 'next-intl/routing';
import { locales, defaultLocale, localePrefix, pathnames } from '../../i18nConfig.js';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales,
 
  // Used when no locale matches
  defaultLocale,
  
  // Prefix strategy
  localePrefix,
  
  // Pathname translations
  pathnames
});