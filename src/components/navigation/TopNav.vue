<script setup>
import MartinLogo from "@/components/MartinLogo.vue";
</script>

<template>
    <div class="flex flex-row h-14 w-screen justify-center px-8 bg-[#fff]">
<!--        <MartinLogo/>-->
        <div class="flex w-[90%] justify-center">
            <slot></slot>
        </div>
        <div class="flex w-14">
<!--            add search-->
        </div>
    </div>
</template>
