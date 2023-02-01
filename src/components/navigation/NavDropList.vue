<script setup>
import {ref} from "vue";

const props = defineProps({
    label: String,
});

const list = ref(false);

function showList(show){
    list.value = show;
}
</script>

<template>
    <div class="font-martin-grey p-4 hover:bg-[#f5f5f5] relative cursor-pointer font-quicksand"
         @mouseover="showList(true);"
         @mouseleave="showList(false);"
         style="font-family: 'Lato'; font-weight: 300">
        {{ label }}
        <div class="absolute flex flex-col rounded-md top-[90%] w-[200px] bg-[#fff] z-50 hover:bg-white left-[-20px] shadow-md transition ease-in-out"
             style="transform: scale(0)translateY(-100px)"
            :style="list?'transform: scale(1)translateY(0)':''">
            <slot></slot>
        </div>
    </div>
</template>