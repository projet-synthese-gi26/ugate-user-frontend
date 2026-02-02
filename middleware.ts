import createMiddleware from 'next-intl/middleware';
import {routing} from './routing';

export default createMiddleware(routing);

export const config = {
    // Matcher pour ignorer les fichiers API, _next, images, etc.
    matcher: ['/((?!api|_next|.*\\..*).*)']
};