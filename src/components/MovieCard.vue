<script setup>
const props = defineProps({
    movie: Object,
})

console.log("movie card");
</script>

<template>
    <div class="h-[600px] w-[33%] p-2 flex flex-col rounded-md relative">
        <img class="h-[50%]" :src="movie.getPosterUrl()"/>
        <div class="h-[50%]">
            <div class="text-2xl font-bold">{{ movie.title }}</div>
            <div class="flex justify-between">
                <MovieRating :rating="movie.rating" of="10"/>
                <div class="text-sm">{{ movie.getGenreList() }}</div>
            </div>
            <div>{{ movie.overview }}</div>
<!--            <ReadmeButton :imdb_id="movie.imdb_id"/>-->
        </div>
        <div class="absolute top-[50%] bottom-[50%] right: 20px">
<!--            <PlayButton></PlayButton>-->
        </div>
    </div>
</template>


