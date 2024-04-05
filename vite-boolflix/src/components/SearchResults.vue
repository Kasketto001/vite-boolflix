<template>
    <div>
      <h2>Risultati della ricerca:</h2>
      <div v-for="media in searchResults" :key="media.id">
        <h3>{{ media.title }}</h3>
        <img :src="getCoverImageUrl(media.poster_path)" alt="Copertina media">
        <p><strong>Titolo Originale:</strong> {{ media.original_title || media.original_name }}</p>
        <img :src="getFlagImageUrl(media.original_language)" alt="Bandiera lingua">
        <p><strong>Voto:</strong> {{ getRating(media.vote_average) }}</p>
        <div class="rating">
          <i v-for="n in 5" :key="n" :class="{ 'fa-solid': n <= getRating(media.vote_average), 'fa-regular': n > getRating(media.vote_average), 'fa-star': true }"></i>
        </div>
        <hr>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      searchResults: {
        type: Array,
        required: true
      }
    },
    methods: {
      getFlagImageUrl(language) {
        return `https://www.unknown.nu/flags/images/${language}-100`;
      },
      getCoverImageUrl(posterPath) {
        if (!posterPath) return '';
        return `https://image.tmdb.org/t/p/w342/${posterPath}`;
      },
      getRating(voteAverage) {
        return Math.ceil(voteAverage / 2);
      }
    }
  };
  </script>
  
  <style scoped>
  .rating i {
    color: #FFD700;
  }
  </style>
  