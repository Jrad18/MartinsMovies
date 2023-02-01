<script setup>
import TmdbApiService from "@/composables/TmdbApiService.js";
import MovieCard from "@/components/MovieCard.vue";
import SearchBar from "@/components/SearchBar.vue";
import {ref, watch} from "vue";

let api = new TmdbApiService();

//const movies = ref([]);
const movies = api.getMovies();
const keywords = ref([]);
const currentPage = ref(1);

function getPageIndicies() {
    if(currentPage.data === 1){

    }
}

</script>

<template>
    <div class="w-[50%] mx-auto h-full flex flex-col bg-martin-grey py-14">
        <SearchBar/>
        <div class="flex flex-wrap">
            <div v-for="movie in movies">
                <MovieCard  :movie="movie"/>
            </div>
        </div>
        <div class="flex justify-center w-full mx-auto">
        </div>
        <!--Pagination-->
    </div>
</template>