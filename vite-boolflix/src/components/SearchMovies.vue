<template>
  <div class="search_bar">
    <input type="text" v-model="searchTerm" placeholder="Cerca film o serie TV...">
    <button @click="searchMedia"><i class="fa-solid fa-search"></i></button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { searchMoviesByTerm, searchTVShowsByTerm } from '../state';

export default {
  setup() {
    const searchTerm = ref('');
    const searchResults = ref([]);

    const searchMedia = async () => {
      const movieResults = await searchMoviesByTerm(searchTerm.value);
      const tvResults = await searchTVShowsByTerm(searchTerm.value);

      searchResults.value = [...movieResults, ...tvResults];
    };

    return { searchTerm, searchResults, searchMedia };
  }
};
</script>

<style>

</style>
