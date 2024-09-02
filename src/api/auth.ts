import axios from 'axios';
import { LoginResponse, User } from '../stores/types';
import { POST_LOGIN, GET_CURRENT_USERS , DELETE_LOGOUT} from '@/api/endpoints'

const apiUrl = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL: apiUrl,
  withCredentials: false, // ensure cookies are sent with requests
});

export async function signIn(email: string, password: string): Promise<LoginResponse> {
  const response = await apiClient.post<LoginResponse>(POST_LOGIN, { email, password });
  return response.data;
}

export async function getUserInfo(token: string): Promise<User> {
  const response = await apiClient.get<User>(GET_CURRENT_USERS, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function logout(): Promise<void> {
  await apiClient.post(DELETE_LOGOUT);
}
