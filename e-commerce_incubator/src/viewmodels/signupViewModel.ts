import { useState } from 'react';
// @ts-ignore
import User from '@/models/User.ts';

export default function useSignupViewModel() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const user = new User();

  const isValidEmail = (emailToCheck: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(emailToCheck);
  };

  const validateData = () => {
    if (!email || !password || !username) {
      setError(true);
      setErrorMessage('Veuillez remplir tous les champs');
      return false;
    }

    if (!isValidEmail(email)) {
      setError(true);
      setErrorMessage('Adresse e-mail invalide');
      return false;
    }

    if (password.length < 8) {
      setError(true);
      setErrorMessage('Le mot de passe doit contenir au moins 8 caractères');
      return false;
    }

    if (!/[A-Z]/.test(password) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      setError(true);
      setErrorMessage('Le mot de passe doit contenir au moins une majuscule, un caractère spécial et un chiffre');
      return false;
    }

    setError(false);
    return true;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const isValid = validateData();

    if (isValid) {
      const response = await user.createUser(username, email, password);
      console.log(response);
    } else {
      console.log('Données invalides, veuillez corriger les erreurs.');
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    error,
    setError,
    validateData,
    handleSubmit,
    errorMessage,
  };
}
