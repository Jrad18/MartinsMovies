<script setup>
import PlayButton from "@/components/buttons/PlayButton.vue";
import ReadmeButton from "@/components/buttons/ReadmeButton.vue";
import {computed, onMounted, ref} from "vue";
import CookieHelper from "@/composables/CookieHelper.js";
import WatchedButton from "@/components/buttons/WatchedButton.vue";

const props = defineProps({
    movie: Object,
    api: Object,
})

const imdb_id = ref("");
const watched = ref(false);
const cookieHelper = new CookieHelper()

onMounted(async () => {
    await props.api.getMovieDetails(props.movie.movie_id).then(data => {
        imdb_id.value = data.imdb_id;
    });

    watched.value = cookieHelper.getCookie("watched-"+props.movie.movie_id) !== "";
});

function toggleWatched(){
    let name = "watched-"+props.movie.movie_id;
    if(watched.value){
        cookieHelper.deleteCookie(name);
        watched.value = false;
    } else {
        cookieHelper.setCookie(name, true, 10);
        watched.value = true;
    }

}

</script>

<template>
    <div class="h-[670px] w-[30%] m-4 flex flex-col rounded-md relative bg-[#fff] text-[#444] hover:-translate-y-4 transition ease-in-out duration-300" style="font-family: Lato; font-weight: 300;">
        <img class="h-[50%] rounded-t-md" :src="movie.getPosterUrl()"/>
        <div class="h-[50%] p-4 flex flex-col">
            <div class="text-3xl font-bold w-[70%] truncate">{{ movie.title }}</div>
            <div class="text-[#666] line-clamp-6">{{ movie.overview }}</div>
            <div class="flex justify-between mt-auto">
                <ReadmeButton v-if="imdb_id !== null" :imdb_id="imdb_id"/>
                <WatchedButton :watched="watched" @click="toggleWatched()"/>
            </div>
        </div>
        <div class="absolute top-[45.5%] right-[20px] right">
            <PlayButton></PlayButton>
        </div>
    </div>
</template>


