import axios from 'axios';

export const requestAllLists = () => {
    const url = 'https://safe-plains-62725.herokuapp.com/lists/';

    const response = axios.get(url, {
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
