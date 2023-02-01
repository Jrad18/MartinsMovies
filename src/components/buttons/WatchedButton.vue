<script setup>
import EyeIcon from "@/components/icons/EyeIcon.vue";

const props = defineProps({
    watched: Boolean,
})
</script>

<template>
    <EyeIcon class="w-[60px] h-[60px] cursor-pointer" :color="watched?'#097969':'#aaa'"/>
</template>