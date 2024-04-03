<template>
    <div>
      <input type="text" v-model="searchTerm" placeholder="Cerca film...">
      <button @click="searchMovies">Cerca</button>
  
      <div v-if="searchResults.length > 0">
        <h2>Risultati della ricerca:</h2>
        <div v-for="movie in searchResults" :key="movie.id">
          <h3>{{ movie.title }}</h3>
          <p><strong>Titolo Originale:</strong> {{ movie.original_title }}</p>
          <p><strong>Lingua:</strong> {{ movie.original_language }}</p>
          <p><strong>Voto:</strong> {{ movie.vote_average }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { searchMoviesByTerm } from '../state';
  
  export default {
    setup() {
      const searchTerm = ref('');
      const searchResults = ref([]);
  
      const searchMovies = async () => {
        searchResults.value = await searchMoviesByTerm(searchTerm.value);
      };
  
      return { searchTerm, searchResults, searchMovies };
    },
  };
  </script>
  