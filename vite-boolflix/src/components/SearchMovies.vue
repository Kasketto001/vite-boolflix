<template>
    <div class="search_bar">
        <input type="text" v-model="searchTerm" placeholder="Cerca film o serie TV...">
        <button @click="searchMedia"><i class="fa-solid fa-search"></i></button>
    
        <div v-if="searchResults.length > 0">
            <h2>Risultati della ricerca:</h2>
            <div v-for="media in searchResults" :key="media.id">
                <h3>{{ media.title }}</h3>
                <img :src="getCoverImageUrl(media.poster_path)" alt="Copertina media">
                <p><strong>Titolo Originale:</strong> {{ media.original_title || media.original_name }}</p>
                <img :src="getFlagImageUrl(media.original_language)" alt="Bandiera lingua">
                <p><strong>Voto:</strong> {{ getRating(media.vote_average) }}</p>
                <div class="rating">
                    <i v-for="n in 5" :key="n" :class="{ 'fa-solid': n <= getRating(media.vote_average), 'fa-regular': n > getRating(media.vote_average), 'fa-star': true }"></i>
                    <hr>
                </div>
            </div>
        </div>
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

        const getFlagImageUrl = (language) => {
            return `https://www.unknown.nu/flags/images/${language}-100`;
        };

        const getCoverImageUrl = (posterPath) => {
            if (!posterPath) return '';
            return `https://image.tmdb.org/t/p/w342/${posterPath}`;
        };

        const getRating = (voteAverage) => {

            return Math.ceil(voteAverage / 2);
        };

        return { searchTerm, searchResults, searchMedia, getFlagImageUrl, getCoverImageUrl, getRating };
    }
};
</script>
<style >

.rating i {
    color: #FFD700; 
}
</style>
