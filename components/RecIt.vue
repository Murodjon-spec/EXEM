<template>
    <div style="display: grid; grid-template-columns: 20% 20% 20% 20% 20%;" class="gap-[23px] mb-[18px]">
        <div v-for="el in recommendations" class="border-[1px] p-[20px] rounded-[6px] bg-white hover:cursor-pointer">
            <div class="w-full flex justify-center mb-[17px]">
                <img :src="el.img" width="250" alt="">
            </div>
            <h1 class="font-medium text-[18px]">${{ el.price }}</h1>
            <h1 class="w-full text-[#8B96A5] text-[18px]">{{ el.title }}</h1>
        </div>
    </div>
</template>

<script setup>
import { recommendations } from "../plugin/recommendations";
</script>

<style lang="scss" scoped></style>