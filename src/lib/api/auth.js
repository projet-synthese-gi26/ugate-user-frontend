import axios from './instance';

export const loginWithEmail = async (email, password) => {
    const response = await axios.post('/auth/login', { email, password });
    if (response.data?.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.email);
    }
    return response.data;
};

export const registerWithEmail = async (userData) => {
    const response = await axios.post('/auth/register', userData);
    if (response.data?.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.email);
    }
    return response.data;
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    // Optionnel : rediriger l'utilisateur
    if (typeof window !== 'undefined') {
        window.location.href = '/login';
    }
};

export const loginWithGoogle = async (authCode) => {
    return Promise.reject(new Error("Login Google non implémenté."));
};

export const loginWithApple = async (authCode) => {
    return Promise.reject(new Error("Login Apple non implémenté."));
};