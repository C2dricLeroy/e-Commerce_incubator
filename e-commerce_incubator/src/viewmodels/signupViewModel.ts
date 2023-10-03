import { useState } from 'react';

export default function useSignupViewModel() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(false);

  return {
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    error,
    setError,
  };
}
