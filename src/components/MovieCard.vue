<script setup>
const props = defineProps({
    movie: Object,
})
</script>

<template>
    <div class="h-[600px] w-[33%] p-2 flex flex-col rounded-md relative">
        <img class="h-[50%]"/>
        <div class="h-[50%]">
            <MovieTitle>{{ movie.title }}</MovieTitle>
            <div class="flex justify-between">
                <MovieRating :rating="movie.rating" of="10"/>
                <MovieGenre>{{ movie.genre }}</MovieGenre>
            </div>
            <MovieDescription>{{ movie.description }}</MovieDescription>
            <ReadmeButton :imdb_id="movie.imdb_id"/>
        </div>
        <div class="absolute top-[50%] bottom-[50%] right: 20px">
            <PlayButton></PlayButton>
        </div>
    </div>
</template>


