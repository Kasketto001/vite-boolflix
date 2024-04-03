
import axios from 'axios';

const API_KEY = '4f98b63f8eff7f2522f869d3ab341514';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: API_KEY,
  },
});

export const state = {
  movies: [],
};

export async function fetchPopularMovies() {
  try {
    const response = await axiosInstance.get('movie/popular');
    return response.data.results;
  } catch (error) {
    console.error('Errore nel recupero dei film popolari:', error);
    return [];
  }
}
