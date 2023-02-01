<script setup>
import TmdbApiService from "@/composables/TmdbApiService.js";
import MovieCard from "@/components/MovieCard.vue";
import SearchBar from "@/components/SearchBar.vue";
import {onMounted, ref, watch} from "vue";
import PaginationButton from "@/components/buttons/PaginationButton.vue";
import SearchResult from "@/components/SearchResult.vue";

const api = new TmdbApiService();

const movies = ref([])
const keywordQuery = ref("");
const autocompleteKeywords = ref([]);
const currentPage = ref(1);

 onMounted(async () => {
     await loadMovies()
 });

 async function loadMovies(page=1, with_keywords=null){
      api.getMovies(page, with_keywords).then((data) => {
         movies.value = data;
         currentPage.value = page;
     });
 }

 watch(keywordQuery, () => {
     if(keywordQuery.value === ""){
         autocompleteKeywords.value = [];
     } else {
         autocompleteKeyword();
     }
 })
 function autocompleteKeyword(){
    api.searchKeyword(keywordQuery.value).then(data => {
        autocompleteKeywords.value = data.results;
    });
 }

 function selectKeyword(id){
     loadMovies(currentPage.value, id);
     keywordQuery.value = "";
 }
</script>

<template>
    <div class="w-[60%] mx-auto h-full flex flex-col bg-martin-grey py-14">
        <SearchBar v-model="keywordQuery" class="relative">
            <div v-if="autocompleteKeywords.length > 0" class="absolute flex flex-col w-full z-50">
                <SearchResult v-for="keyword in autocompleteKeywords" :key="keyword.id" @click="selectKeyword(keyword.id)" :keyword="keyword.name"/>
            </div>
        </SearchBar>

        <div class="flex flex-wrap justify-between mt-2">
            <MovieCard v-for="movie in movies" :key="movie.movie_id" :movie="movie" :api="api"/>
        </div>
        <div class="flex justify-center w-full mx-auto">
        </div>
        <div class="flex justify-center mx-auto w-full">
            <PaginationButton v-if="currentPage !== 1" :page="currentPage-1" :prev="true" @click="loadMovies(currentPage-1)"></PaginationButton>
            <PaginationButton v-if="currentPage > 2" :page="currentPage-2" @click="loadMovies(currentPage-2)"></PaginationButton>
            <PaginationButton v-if="currentPage > 1" :page="currentPage-1" @click="loadMovies(currentPage-1)"></PaginationButton>
            <PaginationButton :page="currentPage" :current="true"></PaginationButton>
            <PaginationButton v-if="currentPage < 999" :page="currentPage+1" @click="loadMovies(currentPage+1)"></PaginationButton>
            <PaginationButton v-if="currentPage < 1000" :page="currentPage+2" @click="loadMovies(currentPage+2)"></PaginationButton>
            <PaginationButton v-if="currentPage !== 1000" :page="currentPage+1" :next="true" @click="loadMovies(currentPage+1)"></PaginationButton>
        </div>
    </div>
</template>