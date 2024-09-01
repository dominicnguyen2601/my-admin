import axios from 'axios';
const { VITE_API_URL } = import.meta.env

const apiClient = axios.create({
  baseURL: VITE_API_URL, // Set the base URL to the mock API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
