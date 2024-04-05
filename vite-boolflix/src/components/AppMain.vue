<template>
    <div>
      <SearchResults v-if="searchResults.length > 0" :searchResults="searchResults" />
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import SearchMovies from './SearchMovies.vue';
  import SearchResults from './SearchResults.vue';
  import { searchMoviesByTerm, searchTVShowsByTerm } from '../state';
  
  export default {
    components: {
      SearchMovies,
      SearchResults
    },
    setup() {
      const searchResults = ref([]);
  
      const handleSearchMediaResults = (results) => {
        searchResults.value = results;
      };
  
      return { searchResults, handleSearchMediaResults };
    }
  };
  </script>
  
  <style>

  </style>
  