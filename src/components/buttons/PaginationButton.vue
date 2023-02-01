<script setup>
const props = defineProps({
    page: Number,
    prev: Boolean,
    next: Boolean,
    current: Boolean,
})
</script>

<template>
    <div :style="current?'background-color: #9352b3; color: #fff':''" class="rounded-full w-[60px] h-[60px] relative hover:scale-110 ease-in-out transition duration-200 cursor-pointer text-[#333] text-medium flex align-middle justify-center hover:bg-[#e5e5e5] mx-2"
     >
        <div class="m-auto">
            <span v-if="prev">{{"<"}}</span>
            <span v-else-if="next">{{">"}}</span>
            <span v-else>{{page}}</span>
        </div>
    </div>
</template>
