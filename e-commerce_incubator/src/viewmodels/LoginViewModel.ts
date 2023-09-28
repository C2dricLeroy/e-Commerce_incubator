import { useState } from 'react';
import { useRouter } from 'next/navigation';
// @ts-ignore
import Login from '../models/Login.ts';

export default function useLoginViewModel() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const login = new Login();

  const signinSubmit = async (e: any) => {
    e.preventDefault();
    try {

    } catch (error: any) {
      console.error(error);
      if (error.response && error.response.status === 400) {
        setError(true);
      }
    }
  };

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
