import { useEffect, useState } from 'react';
// @ts-ignore
import User from '../models/User.ts';

export default function useAccountComponentViewModel() {
  const [username, setUsername] = useState('');
  const [usernameInput, setUsernameInput] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const user = new User();

  const handleUsernameChange = async (event: any) => {
    try {
      const response = await user.changeUsername(event.data);
      if (response) {
        setConfirmation(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async () => {
    const id = localStorage.getItem('id');
    if (id) {
      try {
        const response = await user.deleteUser(id);
        console.log(response);
        if (response) {
          setConfirmDelete(true);
        }
      } catch (e) {
        console.error(e);
      }
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
    deleteModal,
    setDeleteModal,
    handleDelete,
    confirmDelete,
  };
}
