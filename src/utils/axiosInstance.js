import axios from 'axios';
import config from '../config.js';

const axiosInstance = axios.create({
    baseURL: config.apiUrl,
    headers: {
        accept: 'application/json',
        'X-API-KEY': import.meta.env.VITE_API_KEY,
    },
});

export default axiosInstance;