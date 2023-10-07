import axios from 'axios';

const BASE_URL = 'https://65215f44a4199548356d2007.mockapi.io/cars';
const defaultSettings = '/adverts';

export async function carsAPI() {
  try {
    const { data } = await axios.get(`${BASE_URL}${defaultSettings}`);    
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
