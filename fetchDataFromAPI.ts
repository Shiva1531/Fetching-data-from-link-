// fetchDataFromAPI.ts
import axios from 'axios';

async function fetchDataFromAPI() {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch data from API');
  }
}

export default fetchDataFromAPI;
