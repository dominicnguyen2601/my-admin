import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export const login = async (credentials: { email: string, password: string }) => {
  try {
    const response = await  axios.post(`${apiUrl}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};
