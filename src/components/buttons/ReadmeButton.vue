<script setup>
const props = defineProps({
    imdb_id: String,
})
</script>

<template>
    <a type="button" :href="'https://imdb.com/title/'+imdb_id" class="px-4 py-2 text-[#fff] weight-400 bg-[#9352b3] rounded-md cursor-pointer hover mt-auto mr-auto">
        Read Me
    </a>
</template>

<style>
a:hover{
    -webkit-box-shadow: inset 0px 5px 33px 5px rgba(130,72,158,0.79);
    box-shadow: inset 0px 5px 33px 5px rgba(130,72,158,0.79);
}
</style>