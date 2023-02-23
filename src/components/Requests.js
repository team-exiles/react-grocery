import axios from 'axios';

export const requestLogin = (username, password) => {
    const url = 'https://safe-plains-62725.herokuapp.com/auth/token/login/';

    const response = axios.post(url, {
        username: username,
        password: password, 
    }); 
    return response;
}

export const requestLogout = (token) => {
    const url = 'https://safe-plains-62725.herokuapp.com/auth/token/logout/';

    const response = axios.post(url, {
        headers: {Authorization: `token ${token}`}
    });
    return response; 
}

export const requestAllLists = () => {
    const url = 'https://safe-plains-62725.herokuapp.com/lists/';

    const response = axios.get(url, [], {
    }); 
    return response; 
};

export const requestMyLists = () => {
    const url = 'https://safe-plains-62725.herokuapp.com/lists/me/'

    const response = axios.get(url, {
    }); 
    return response; 
};

export const requestMakeList = () => {
    const url = 'https://safe-plains-62725.herokuapp.com/lists/me/'

    const response = axios.post(url, {

    });
    return response;
};