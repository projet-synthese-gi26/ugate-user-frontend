import api from './instance';
import Cookies from 'js-cookie';

export const registerWithEmail = async (userData) => {
    const payload = {
        first_name: userData.firstName,
        last_name: userData.lastName,
        email: userData.email,
        password: userData.password,
        username: userData.email,
        phone_number: userData.phone || null 
    };
    const response = await api.post('/register', payload);
    return response.data;
};

export const loginWithEmail = async (email, password) => {
    const payload = {
        username: email,
        password: password
    };
    const response = await api.post('/login', payload);
    const { accessToken, user } = response.data;

    if (accessToken && accessToken.token) {
        Cookies.set('authToken', accessToken.token, { expires: 1, secure: true, sameSite: 'strict' });
        localStorage.setItem('user', JSON.stringify(user));
    }
    
    return user;
};

export const logout = () => {
    Cookies.remove('authToken');
    localStorage.removeItem('user');
    window.location.href = '/login'; // Redirige vers la page de login
};

export const getAuthenticatedUser = () => {
    const userJson = localStorage.getItem('user');
    if (!userJson) return null;
    
    try {
        return JSON.parse(userJson);
    } catch (error) {
        console.error("Failed to parse user data from localStorage", error);
        return null;
    }
};

export const loginWithGoogle = async (authCode) => {
    // A implémenter : envoyer le authCode au backend
    console.log("Sending Google auth code to backend:", authCode);
    // const response = await api.post('/auth/google', { code: authCode });
    // Handle token and user data similar to loginWithEmail
    // return response.data;
    throw new Error("Google login not implemented on backend yet.");
};

export const loginWithApple = async (authCode) => {
    // A implémenter : envoyer le authCode au backend
    console.log("Sending Apple auth code to backend:", authCode);
    // const response = await api.post('/auth/apple', { code: authCode });
    // Handle token and user data similar to loginWithEmail
    // return response.data;
    throw new Error("Apple login not implemented on backend yet.");
};