
export interface User {
  firstName: string;
  lastName: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: { email: string; password?: string; firstName?: string; lastName?: string }) => void;
  logout: () => void;
}
