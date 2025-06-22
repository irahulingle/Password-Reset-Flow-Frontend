import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // reads from .env
});

console.log('Axios Base URL:', import.meta.env.VITE_API_URL);

export default api;
