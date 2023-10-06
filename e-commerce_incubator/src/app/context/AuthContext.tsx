'use client';

import {
  createContext, ReactNode, useContext, useState,
} from 'react';
// @ts-ignore
import Login from '@/models/Login.ts';
// @ts-ignore
import User from '@/models/User.ts';

interface AuthContextShape {
  user: any;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoggedIn: () => void;

}

const isValidEmail = (emailToCheck: string) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(emailToCheck);
};

const isValidPassword = (passwordToCheck: string) => {
  if (passwordToCheck.length < 8) {
    return false;
  }

  if (!/[A-Z]/.test(passwordToCheck)) {
    return false;
  }

  if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(passwordToCheck)) {
    return false;
  }

  if (!/\d/.test(passwordToCheck)) {
    return false;
  }

  return true;
};

const AuthContext = createContext<AuthContextShape | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  const loginObject = new Login();

  const login = async (email: string, password: string) => {
    const isValidData = () => isValidEmail(email) && isValidPassword(password);
    if (isValidData()) {
      try {
        const userData = await loginObject.submitLogin(email, password);
        setUser(userData);
      } catch (error) {
        console.error('Erreur de connexion', error);
      }
    }
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem('xsrfToken');
    localStorage.removeItem('id');
    await User.logout();
  };

  const isLoggedIn = async () => {
    try {
      const response = await User.isLoggedIn();

      if (response.message === 'non authentifié') {
        setUser(null);
      }
      setUser(response.userData.user);
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
      <AuthContext.Provider value={{
        user, login, logout, isLoggedIn,
      }}>
        {children}
      </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
