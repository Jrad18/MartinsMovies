<script setup>
import PlayButton from "@/components/buttons/PlayButton.vue";
import ReadmeButton from "@/components/buttons/ReadmeButton.vue";
import {computed, onMounted, ref} from "vue";

const props = defineProps({
    movie: Object,
    api: Object,
})

const imdb_id = ref("");

onMounted(async () => {
    await props.api.getMovieDetails(props.movie.movie_id).then(data => {
        imdb_id.value = data.imdb_id;
    })
});
</script>

<template>
    <div class="h-[670px] w-[30%] m-4 flex flex-col rounded-md relative bg-[#fff] text-[#444] hover:-translate-y-4 transition ease-in-out duration-300" style="font-family: Lato; font-weight: 300;">
        <img class="h-[50%] rounded-t-md" :src="movie.getPosterUrl()"/>
        <div class="h-[50%] p-4 flex flex-col">
            <div class="text-3xl font-bold w-[70%] truncate">{{ movie.title }}</div>
            <div class="text-[#666] line-clamp-6">{{ movie.overview }}</div>
            <ReadmeButton v-if="imdb_id !== null" :imdb_id="imdb_id"/>
        </div>
        <div class="absolute top-[45.5%] right-[20px] right">
            <PlayButton></PlayButton>
        </div>
    </div>
</template>


