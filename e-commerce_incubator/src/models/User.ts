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
      const response = await axios.get(`http://localhost:3005/users/getUsernameById/${id}`);
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new Error(error.message);
    }
  }

  static async changeUsername(username: string) {
    try {
      const response = await axios.put(`http://localhost:3005/users/changeUsername/${username}`);
      return response.data;
    } catch (error: any) {
      console.error(error);
      throw new Error(error.message);
    }
  }
}
