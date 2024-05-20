import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    //https://webdev-be.vercel.app/products
    return response.data;
  } catch (error) {
    throw error;
  }
};
