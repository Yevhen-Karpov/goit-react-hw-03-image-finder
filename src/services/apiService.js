const axios = require('axios');
const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '23964778-a3e050be7e1391d793e3046e4';

async function fetchApi(text, page) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/?q=${text}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    );
    return data;
  } catch (error) {
    console.error(`Нет результатов поиска по данному запросу`);
  }
}

const api = { fetchApi };
export default api;
