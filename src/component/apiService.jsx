const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '23964778-a3e050be7e1391d793e3046e4';

function fetchApi(text, page) {
  return fetch(
    `${BASE_URL}/?q=${text}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`Нет результатов поиска по данному запросу`),
    );
  });
}
const api = { fetchApi };
export default api;
