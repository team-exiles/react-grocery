import axios from 'axios';

export const requestLogin = (username, password) => {
    const url = 'https://safe-plains-62725.herokuapp.com/auth/token/login/';

    const response = axios.post(url, {
        username: username,
        password: password, 
    }); 
    return response;
}

export const requestRegisterUser = ({username, password}) => {
    const url = 'https://safe-plains-62725.herokuapp.com/auth/users/'; 

    const response = axios.post(url, {
        username: username,
        password: password, 
        headers: { "Content-Type": "application/json"},
    });
    return response 
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