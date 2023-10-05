'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function useLoginViewModel() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

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

  const isValidData = () => isValidEmail(email) && isValidPassword(password);

  async function signinSubmit(event: any) {
    event.preventDefault();

    if (!isValidData()) {
      console.log('Données invalides, veuillez corriger les erreurs.');
    }

    try {
      router.push('/');
    } catch (e: any) {
      console.log('catch');
      console.error(e.message);

      if (e.response && e.response.status === 400) {
        setError(true);
      }
    }
  }

  return {
    signinSubmit,
    setEmail,
    email,
    showPassword,
    password,
    setPassword,
    setShowPassword,
    error,
    setError,
  };
}
