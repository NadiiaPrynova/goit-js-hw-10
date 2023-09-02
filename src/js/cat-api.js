import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_NESO8TkBwM0dHMfpiloBa5pnaYDRFaiBx5ReIkhHEgOtarzRtUKElLNflS1Mag3U';

export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    // .then(response => response.data);
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    // .then(response => response.data[0]);
}
// import axios from 'axios';

// const BASE_URL = 'https://api.thecatapi.com/v1';
// axios.defaults.headers.common['x-api-key'] =
//   'live_lYmOKTQRHsB8sJe9ygzuQe7FXcc2ZvtWiVnNozCi85ub5YUZiLk8YnrbwAneZI04';

// export function fetchBreeds() {
//   return axios.get(`${BASE_URL}/breeds`);
// }

// export function fetchCatByBreed(breedId) {
//   return axios.get(`${BASE_URL}/images/search?breed_ids=${breedId}`);
// }