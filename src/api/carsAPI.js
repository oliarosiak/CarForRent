import axios from 'axios';

axios.defaults.baseURL = 'https://65215f44a4199548356d2007.mockapi.io/cars';

export async function carsAPI() {
  try {
    const { data } = await axios.get('/adverts');
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
