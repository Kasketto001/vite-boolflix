<script>
import { ref, onMounted } from 'vue';
import { fetchPopularMovies, state } from '../state';

export default {
  setup() {
    const movies = ref(state.movies);

    onMounted(async () => {
      state.movies = await fetchPopularMovies();
      movies.value = state.movies;
    });

    return { movies };
  },
};
</script>

<template>
  <div>
    <h1>Lista dei film popolari</h1>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        {{ movie.title }}
      </li>
    </ul>
  </div>
</template>

