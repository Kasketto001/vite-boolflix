<template>
    <header>
      <nav class="container_large">
        <div class="row">
          <div class="col-4 navbar-center-contents">
            <a class="brand_logo" href="#">BOOLFLIX</a>
          </div>
          <div class="col-4 navbar-center-contents">
            <SearchMovies @searchMediaResults="handleSearchMediaResults" />
          </div>
          <div class="col-4 navbar-center-contents links">
            <a href="#">TAG1</a>
            <a href="#">TAG2</a>
            <a href="#">TAG3</a>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  import SearchMovies from './SearchMovies.vue';
  
  export default {
    name: 'AppHeader',
    components: {
      SearchMovies
    },
    methods: {
      handleSearchMedia(searchTerm) {
        this.$emit('searchMedia', searchTerm);
      }
    }
  };
  </script>
  
  <style>

  </style>
  