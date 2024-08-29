import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://dummyjson.com/auth', // Set the base URL to the mock API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
