<script setup>
const props = defineProps({
    keyword: String,
})
</script>

<template>
    <div class="width:full p-2 bg-[#fff] hover:bg-[#f5f5f5] w-full z-50 cursor-pointer">{{keyword}}</div>
</template>