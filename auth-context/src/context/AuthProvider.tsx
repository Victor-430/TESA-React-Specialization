import { useState,type ReactNode } from "react";
import type { User } from "../types/auth";
import { AuthContext } from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (userData: {
    email: string;
    password?: string;
    firstName?: string;
    lastName?: string;
  }) => {
    const authenticatedUser: User = {
      firstName: userData.firstName || "John",
      lastName: userData.lastName || "Doe",
      email: userData.email,
    };

    setUser(authenticatedUser);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
