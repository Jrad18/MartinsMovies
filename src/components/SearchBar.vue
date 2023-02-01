<script setup>
const props = defineProps({
    modelValue: {
        type: [String, Number],
        default: ''
    },
})

</script>

<template>
    <div class="w-[97.4%] m-4">
        <input
            @input="$emit('update:modelValue', $event.target.value)"
            class="peer h-10 p-2 w-full placeholder-transparent border-solid border-2 rounded-md border-[#e5e5e5] focus:outline-none focus:!ring-0 focus:border-[#13acbd] disabled:cursor-not-allowed disabled:pointer-events-none disabled:focus:border-transparent">
        <slot></slot>
    </div>
</template>