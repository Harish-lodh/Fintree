import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL ||'https://backend-fintree.onrender.com/', // fallback if env missing
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
