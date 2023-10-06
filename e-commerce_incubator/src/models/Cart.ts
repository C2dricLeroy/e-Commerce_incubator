import axios from 'axios';

export default class Cart {
  static async getSavedCarts(id: string) {
    try {
      const response = await axios.get(`http://localhost:3005/carts/getSavedCarts/${id}`);
      return response.data;
    } catch (error: any) {
      console.error(error);
      return null;
    }
  }
}
