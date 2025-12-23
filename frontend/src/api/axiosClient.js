import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:5000/api',
});

// Add a request interceptor to add the auth token to headers
axiosClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosClient;
