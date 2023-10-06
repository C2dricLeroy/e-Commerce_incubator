import axios from 'axios';
import { useRouter } from 'next/navigation';

export default class Login {
  router = useRouter();

  test = '';

  async submitLogin(email: string, password: string) {
    try {
      this.test = '';
      const response = await axios.post(
        'http://localhost:3005/users/login',
        { email, password },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.data.xsrfToken && response.data.userId) {
        localStorage.setItem('xsrfToken', response.data.xsrfToken);
        localStorage.setItem('id', response.data.userId);
        this.router.push('/');
        return response.data;
      }
      console.error('xsrf_token not found in the response');
      return false;
    } catch (error: any) {
      console.log(error.message);
      return false;
    }
  }
}
