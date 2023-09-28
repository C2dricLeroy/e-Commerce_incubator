import axios from 'axios';

class Login {
  private async submitLogin(email: string, password: string) {
    try {
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
    } catch {

    }
  }
}

module.exports = Login;
