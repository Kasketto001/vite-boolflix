
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

// Film popolari (DEBUGGING)
export async function fetchPopularMovies() {
  try {
    const response = await axiosInstance.get('movie/popular');
    return response.data.results;
  } catch (error) {
    console.error('Errore nel recupero dei film popolari:', error);
    return [];
  }
}

// Search Movie - Milestone 1
export async function searchMoviesByTerm(searchTerm) {
    try {
      const response = await axiosInstance.get('search/movie', {
        params: {
          query: searchTerm,
        },
      });
      return response.data.results;
    } catch (error) {
      console.error('Errore durante la ricerca dei film:', error);
      return [];
    }
  }