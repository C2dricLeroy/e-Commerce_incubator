'use client';

import {
  createContext, useContext, useState, useEffect, ReactNode,
} from 'react';
import Login from '@/models/Login';

interface AuthContextShape {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;

}

const AuthContext = createContext<AuthContextShape | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const loginObject = new Login();

  const login = async (email: string, password: string) => {
    try {
      const userData = await loginObject.submitLogin(email, password);
      setUser(userData);
    } catch (error) {
      console.error('Erreur de connexion', error);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
      <AuthContext.Provider value={{
        user, login, logout,
      }}>
        {children}
      </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
