import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:3000';

if (process.env.NODE_ENV === 'dev') {
    axios.defaults.baseURL = '/';
}

const axiosIns = axios.create({});
// Add a request interceptor
axiosIns.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
})

// Add a response interceptor
axiosIns.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
})


export default axiosIns;