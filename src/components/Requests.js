import axios from "axios";

export const requestLogin = (username, password) => {
  const url = "https://safe-plains-62725.herokuapp.com/auth/token/login/";

  const response = axios.post(url, {
    username: username,
    password: password,
  });
  return response;
};

export const requestRegisterUser = ({ email, password }) => {
  const url = "https://safe-plains-62725.herokuapp.com/auth/users/";

  const response = axios.post(url, {
    email: email,
    password: password,
  });
  return response;
};

export const requestAllLists = () => {
  const url = "https://safe-plains-62725.herokuapp.com/lists/";

  const response = axios.get(url, {});
  return response;
};

export const requestMyLists = (token) => {
  const url = "https://safe-plains-62725.herokuapp.com/lists/me/";

  const response = axios.get(url, {
    headers: {
      authorization: `token ${token}`,
    },
  });
  return response;
};

export const requestMakeList = () => {
  const url = "https://safe-plains-62725.herokuapp.com/lists/me/";

  const response = axios.post(url, {});
  return response;
};
