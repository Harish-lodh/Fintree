import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.BACKEND_URL ||'https://backend-fintree.onrender.com/' || 'http://localhost:8080', // fallback if env missing
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
