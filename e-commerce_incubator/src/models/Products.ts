import axios from 'axios';

export default class Products {
  static async getTop() {
    try {
      const response = await axios.get('http://localhost:3005/products/getTop');
      return response.data;
    } catch (error: any) {
      console.error('Erreur lors de la récupération des produits :', error);
      return null;
    }
  }

  static async getOne(id: string) {
    try {
      const response = await axios.get(`http://localhost:3005/products/getOne/${id}`);
      return response.data;
    } catch (error: any) {
      console.error('Erreur lors de la récupération des produits :', error);
      return null;
    }
  }

  static async getAll() {
    try {
      const response = await axios.get('http://localhost:3005/products/getAll');
      return response.data;
    } catch (error: any) {
      console.error('Erreur lors de la récupération des produits :', error);
      return null;
    }
  }

  static async searchProduct(searchTerm: string) {
    try {
      const response = await axios.get(`http://localhost:3005/products/search/${searchTerm}`);
      return response.data;
    } catch (error: any) {
      console.error('Erreur lors de la récupération des produits :', error);
      return null;
    }
  }
}
