import axios from 'axios';

export default class Login {
  test = '';

  async submitLogin(email: string, password: string) {
    try {
      this.test = '';
      const response = await axios.post(
        `${process.env.SERVER_URL}user/login`,
        { email, password },
      );
      if (response.data.xsrfToken && response.data.userId) {
        localStorage.setItem('xsrfToken', response.data.xsrfToken);
        localStorage.setItem('userId', response.data.userId);
        axios.defaults.headers.common['x-xsrf-token'] = response.data.xsrfToken;
      } else {
        console.error('xsrf_token not found in the response');
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
