// Utilitaires pour gérer les cookies côté client et serveur

// Côté client uniquement - définir un cookie
export const setCookie = (name, value, days = 7) => {
    if (typeof window === 'undefined') return;

    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
};

// Côté client uniquement - supprimer un cookie
export const deleteCookie = (name) => {
    if (typeof window === 'undefined') return;
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
};

// Côté client - lire un cookie
export const getCookie = (name) => {
    if (typeof window === 'undefined') return null;

    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
        return parts.pop().split(';').shift();
    }
    return null;
};

// Côté serveur - lire un cookie depuis next/headers
export const getServerCookie = async (name) => {
    try {
        const { cookies } = await import('next/headers');
        const cookieStore = await cookies();
        const cookie = cookieStore.get(name);
        return cookie?.value || null;
    } catch (error) {
        return null;
    }
};
