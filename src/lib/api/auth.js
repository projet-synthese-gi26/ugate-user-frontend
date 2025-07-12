
import api from './instance';

/**
 * Se connecte avec email et mot de passe.
 * @param {string} email
 * @param {string} password
 * @returns {Promise<any>}
 */
export const loginWithEmail = async (email, password) => {
    const basicAuth = 'Basic ' + btoa('test-client:secret');


    const response = await api.post('/login',
        { username: email, password },
        {
            headers: {
                'Authorization': basicAuth,
                'Content-Type': 'application/json'
            }
        }
    );


    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
    }

    return response.data;
};


/**
 * Gère la connexion avec un code d'autorisation Google.
 * @param {string} authCode
 * @returns {Promise<any>}
 */
export const loginWithGoogle = async (authCode) => {

    const response = await api.post('/api/google-login', { authCode });
    // Gérer le stockage du token...
    return response.data;
};

/**
 * Gère la connexion avec un code d'autorisation Apple.
 * @param {string} authCode
 * @returns {Promise<any>}
 */
export const loginWithApple = async (authCode) => {
    const response = await api.post('/api/apple-login', { authorizationCode: authCode, type: "LONG" });
    // Gérer le stockage du token...
    return response.data;
};



/**
 * Inscrit un nouvel utilisateur.
 * @param {object} data - Les données du formulaire d'inscription.
 * @returns {Promise<any>}
 */
export const registerWithEmail = async (data) => {

    const response = await api.post('/api/register', {
        username: data.email,
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        dateOfBirth: data.dateOfBirth,
        password: data.password,
        phone_number: null,
    });

    return response.data;
};