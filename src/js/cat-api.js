import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_5M2HwdZVMSfRaZ6DcbkEWRVsfDiMlKJwW2kfx5DJrYGZaCMMNH3DCStOvs9nDaq2';

const API_KEY =
  'live_5M2HwdZVMSfRaZ6DcbkEWRVsfDiMlKJwW2kfx5DJrYGZaCMMNH3DCStOvs9nDaq2';

export function fetchBreeds() {
  const apiBreeds = 'https://api.thecatapi.com/v1/breeds';
  const api_key = 'API_KEY';
  // FETCH
  // return fetch(`${apiBreeds}?${api_key}`).then(response => {
  //   if (!response.ok) {
  //     throw new Error(response.statusText);
  //   }
  //   return response.json();
  // });
  return axios.get(`${apiBreeds}`).then(({ data }) => data);
}
export function fetchCatByBreed(breedId) {
  const apiImage = 'https://api.thecatapi.com/v1/images/search';
  const params = new URLSearchParams({
    api_key: API_KEY,
    breed_ids: breedId,
  });
  // FETCH
  // return fetch(`${apiImage}?${params}`).then(response => {
  //   if (!response.ok) {
  //     throw new Error(response.statusText);
  //   }
  //   return response.json();
  // });
  return axios.get(`${apiImage}?${params}`).then(({ data }) => data);
}
