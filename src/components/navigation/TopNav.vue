<script setup>
import MartinLogo from "@/components/MartinLogo.vue";
</script>

<template>
    <div class="flex flex-row h-14 w-screen justify-between px-8">
        <MartinLogo/>
        <div class="flex">
            <slot></slot>
        </div>
        <div class="flex"></div>
    </div>
</template>
