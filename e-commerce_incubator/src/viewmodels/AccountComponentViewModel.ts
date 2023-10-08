import { useEffect, useState } from 'react';
// @ts-ignore
import User from '../models/User.ts';

export default function useAccountComponentViewModel() {
  const [username, setUsername] = useState('');
  const [usernameInput, setUsernameInput] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const handleUsernameChange = async (event: any) => {
    try {
      const response = await User.changeUsername(event.data);
      if (response) {
        setConfirmation(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const fetchUsername = async () => {
      const id = localStorage.getItem('id');
      if (id) {
        const response = await User.getUsernameById(id);
        setUsername(response.username);
      }
    };
    fetchUsername();
  }, []);

  return {
    username,
    usernameInput,
    setUsernameInput,
    confirmation,
    handleUsernameChange,
    setShowModal,
    showModal,
  };
}
