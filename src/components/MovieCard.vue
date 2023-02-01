<script setup>
const props = defineProps({
    movie: Object,
})

console.log("movie card");
</script>

<template>
    <div class="h-[670px] w-[30%] m-4 flex flex-col rounded-md relative bg-[#fff] text-[#444]" style="font-family: Lato; font-weight: 300;">
        <img class="h-[50%] rounded-t-md" :src="movie.getPosterUrl()"/>
        <div class="h-[50%] p-4">
            <div class="text-3xl font-bold w-[70%] truncate">{{ movie.title }}</div>
            <div class="flex justify-between">
                <MovieRating :rating="movie.rating" of="10"/>
                <div class="text-sm">{{ movie.getGenreList() }}</div>
            </div>
            <div class="text-[#666] line-clamp-6">{{ movie.overview }}</div>
<!--            <ReadmeButton :imdb_id="movie.imdb_id"/>-->
        </div>
        <div class="absolute top-[50%] bottom-[50%] right: 20px">
<!--            <PlayButton></PlayButton>-->
        </div>
    </div>
</template>


