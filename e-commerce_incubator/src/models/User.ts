import axios from 'axios';
import { useRouter } from 'next/navigation';

export default class User {
  router = useRouter();

  async createUser(username: string, email: string, password: string) {
    try {
      const response = await axios.post('http://localhost:3005/users/create', {
        username,
        email,
        password,
      });

      console.log(response);

      const createCart = await axios.post('http://localhost:3005/cart/saveCart', {
        cart_name: 'Cart',
        user_id: response.data.id,
      });

      if (this && typeof window !== 'undefined') {
        this.router.push('/login');
      }

      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new Error(error.message);
    }
  }

  static async getUsernameById(id: string) {
    try {
      const response = await axios.get(`http://localhost:3005/users/getUsernameById/${id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new Error(error.message);
    }
  }

  async changeUsername(username: string) {
    try {
      const response = await axios.put(`http://localhost:3005/users/changeUsername/${username}`);
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new Error(error.message);
    }
  }

  static async isLoggedIn() {
    const xsrfToken = localStorage.getItem('xsrfToken');
    try {
      const response = await axios.get('http://localhost:3005/users/isLoggedIn', {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new Error(error.message);
    }
  }

  static async logout() {
    try {
      const response = await axios.get('http://localhost:3005/users/logout');
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new Error(error.message);
    }
  }

  async deleteUser(id: string) {
    try {
      return await axios.delete(`http://localhost:3005/users/delete/${id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error: any) {
      console.error(error);
      throw new Error(error.message);
    }
  }
}
