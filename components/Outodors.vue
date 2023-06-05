<template>
    <div class="home w-[375px] h-[310px] pt-[25px] pl-[23px]">
                    <h1 class="text-[#1C1C1C] font-semibold text-[22px] w-[130px] mb-[22px]">Home and Outdors</h1>
                    <button class="bg-white px-[20px] py-[13px] rounded-[6px] hover:shadow-lg duration-300">Source now</button>
                </div>
                <div class="w-full" style="display: grid; grid-template-columns: 25% 25% 25% 25%;">
                    <div v-for="el in home" :key="el.id" class="h-[155px] pt-[15px] pl-[18px] pb-[10px] border rounded-[6px] hover:cursor-pointer">
                        <div class="mb-[12px]"><h1 class="text-[24px]">{{ el.product }}</h1></div>
                        <div class="flex justify-between card">
                            <h1 class="text-[19px] text-[#8B96A5]">From ${{ el.price }}</h1>
                            <img :src="el.img" alt="" style="margin-right: 10px; margin-bottom: 10px;">
                        </div>
                    </div>
                </div>
</template>

<script setup>
import { home } from "../plugin/home";
</script>

<style lang="scss" scoped>
.home{
    background-image: url("../public/Home.png");
    background-size: cover;
    background-repeat: no-repeat;
}

</style>