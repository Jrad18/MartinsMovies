<script setup>
const props = defineProps({
    href: String,
})
</script>

<template>
    <a class="w-full hover:bg-[#f5f5f5] font-martin-grey p-2 font-light" :href="href">
        <slot></slot>
    </a>
</template>