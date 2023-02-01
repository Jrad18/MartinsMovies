<script setup>
import TmdbApiService from "@/composables/TmdbApiService.js";
import MovieCard from "@/components/MovieCard.vue";
import SearchBar from "@/components/SearchBar.vue";
import {computed, onMounted, ref, watch} from "vue";
import Movie from "@/composables/Movie";

const api = new TmdbApiService();

const movies = ref([])
//const movies = ref(api.movies);
const keywords = ref([]);
const currentPage = ref(1);

// watch( api.movies, () => {
//     movies.value = api.movies;
// });
//
 onMounted(async () => {
    api.getMovies().then((data) => {
        movies.value = data;
    });
 })

</script>

<template>
    <div class="w-[60%] mx-auto h-full flex flex-col bg-martin-grey py-14">
<!--        <SearchBar/>-->
        <div class="flex flex-wrap">
            <MovieCard v-for="movie in movies" :key="movie.movie_id" :movie="movie"/>
        </div>
        <div class="flex justify-center w-full mx-auto">
        </div>
        <!--Pagination-->
    </div>
</template>