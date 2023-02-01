<script setup>
import TmdbApiService from "@/composables/TmdbApiService.js";
import MovieCard from "@/components/MovieCard.vue";
import SearchBar from "@/components/SearchBar.vue";
import {computed, onMounted, ref, watch} from "vue";

const api = new TmdbApiService();
const apiResource = computed(() => {
    return api;
});

//const movies = ref([]);
const keywords = ref([]);
const currentPage = ref(1);



</script>

<template>
    <div class="w-[50%] mx-auto h-full flex flex-col bg-martin-grey py-14">
<!--        <SearchBar/>-->
        <div class="flex flex-wrap">
            {{apiResource.movies[0]}}
            <div v-for="movie in api.movies">
                <MovieCard :movie="movie"/>
            </div>
        </div>
        <div class="flex justify-center w-full mx-auto">
        </div>
        <!--Pagination-->
    </div>
</template>