import axios from 'axios';

const api = axios.create({
  baseURL: 'https://monitoring-innovation-backend.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
