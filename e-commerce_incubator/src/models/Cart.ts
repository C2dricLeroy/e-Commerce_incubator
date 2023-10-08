import axios from 'axios';

export default class Cart {
  static async getUserSavedCarts(id: string) {
    try {
      console.log(id);
      const response = await axios.get(`http://localhost:3005/cart/getUserCart/${id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.error(error);
      return null;
    }
  }
}
