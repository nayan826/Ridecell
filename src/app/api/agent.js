import axios from "axios";
import {toast} from "react-toastify";

axios.defaults.baseURL = " https://blooming-stream-45371.herokuapp.com/api/v2";

axios.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("jwt");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(undefined, (error) => {
    if (error.message === "Network Error" && !error.response) {
      toast.error("Network Error");
    }
  
    const { status } = error.response;

    if (status === 500) {
      toast.error("Server error");
    }

    throw error.response;
  });

const responseBody = (response) => response.data;

const request = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
};

const User = {
  login: (user) => request.post("/people/authenticate", user),
  register: (user) => request.post("/people/create", user),
  reset: (email) => request.post("people/reset_password", email)
};

export { User };
