import { useState } from 'react';
// @ts-ignore
import User from '@/models/User.ts';

export default function useSignupViewModel() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
  const [globalError, setGlobalError] = useState(false);
  const [globalErrorMessage, setGlobalErrorMessage] = useState('');

  const user = new User();

  const isValidUsername = (usernameToCheck: string) => {
    if (usernameToCheck.length > 255) {
      setUsernameError(true);
      return false;
    }

    const sqlPattern = /(?:\b(?:select|insert|update|delete|from|where|drop|union|create|alter|table|exec|xp_cmdshell|shell|truncate|javascript|document|location)\b)|(--)|(#)|(\*)/i;
    if (sqlPattern.test(usernameToCheck)) {
      setUsernameError(true);
      return false;
    }
    setUsernameError(false);
    return true;
  };

  const isValidEmail = (emailToCheck: string) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValid = emailPattern.test(emailToCheck);

    if (!isValid) {
      setEmailError(true);
      setEmailErrorMessage('Adresse e-mail invalide');
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }
  };
  function isValidPassword(passwordToCheck: string) {
    if (!/[A-Z]/.test(passwordToCheck) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(passwordToCheck)) {
      setPasswordError(true);
      setPasswordErrorMessage('Le mot de passe doit contenir au moins une majuscule, un caractère spécial et un chiffre');
      return false;
    }
    if (password.length < 8) {
      setPasswordError(true);
      setPasswordErrorMessage('Le mot de passe doit contenir au moins 8 caractères');
      return false;
    }
    setPasswordError(false);
    setPasswordErrorMessage('');
    return true;
  }

  const validateData = () => {
    if (!email || !password || !username) {
      setGlobalError(true);
      setGlobalErrorMessage('Veuillez remplir tous les champs');
      return false;
    }

    isValidUsername(username);

    return !(emailError || passwordError || usernameError);
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
    globalError,
    setGlobalError,
    validateData,
    handleSubmit,
    globalErrorMessage,
    isValidPassword,
    passwordError,
    setPasswordError,
    passwordErrorMessage,
    isValidEmail,
    emailError,
    setEmailError,
    emailErrorMessage,
    usernameError,
    usernameErrorMessage,
  };
}
