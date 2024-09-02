export interface User {
  id: number;
  email: string;
  username: string;
  userType: string;
}

export interface AuthState {
  token: string | null;
  user: User | null;
  loading: boolean;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface UserState {
  profile: User | null;
  loading: boolean;
}
