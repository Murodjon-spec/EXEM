<template>
            <div class="flex mb-[30px] rounded-[6px] border-[1px] bg-white" style="">
                <div class="w-[375px] p-[22px]">
                    <h1 class="text-[20px] font-semibold">Deals and offers</h1>
                    <h1 class="text-[16px] text-[#8B96A5] mb-[21px]">Hygiene equipments</h1>
                    <div class="flex gap-[10px]">
                        <div
                            class="w-[50px] h-[55px] text-white bg-[#606060] rounded-[6px] grid grid-cols-1 items-center justify-center place-content-center">
                            <h1 class="text-center font-bold">{{ Kun.toString().padStart(2, "0") }}</h1>
                            <h1 class="text-center text-[12px]">Days</h1>
                        </div>
                        <div
                            class="w-[50px] h-[55px] text-white bg-[#606060] rounded-[6px] grid grid-cols-1 items-center justify-center place-content-center">
                            <h1 class="text-center font-bold">{{ sogot.toString().padStart(2, "0") }}</h1>
                            <h1 class="text-center text-[12px]">Hour</h1>
                        </div>
                        <div
                            class="w-[50px] h-[55px] text-white bg-[#606060] rounded-[6px] grid grid-cols-1 items-center justify-center place-content-center">
                            <h1 class="text-center font-bold">{{ minut.toString().padStart(2, "0") }}</h1>
                            <h1 class="text-center text-[12px]">Min</h1>
                        </div>
                        <div
                            class="w-[50px] h-[55px] text-white bg-[#606060] rounded-[6px] grid grid-cols-1 items-center justify-center place-content-center">
                            <h1 class="text-center font-bold">{{ sekund.toString().padStart(2, "0") }}</h1>
                            <h1 class="text-center text-[12px]">Sec</h1>
                        </div>
                    </div>
                </div>
                <div class="w-full" style="display: grid; grid-template-columns: 20% 20% 20% 20% 20%;">
                    <div v-for="el in voht" :key="el.id" class="border-x-[1px] rounded-[6px] p-[13px] hover:cursor-pointer">
                        <div class="mb-[13px] flex justify-center"><img :src="el.img" alt=""></div>
                        <h1 class="mb-[10px] text-center">{{ el.product }}</h1>
                        <div class="flex justify-center"><h1 class="bg-[#FFE3E3] text-[#EB001B] font-medium py-[7px] px-[15px] rounded-full text-center w-[65px]">-{{ el.percent }}%</h1></div>
                    </div>
                </div>
            </div>
</template>

<script setup>

import { voht } from "../constants/voht";

const Kun = ref(31)
const sogot = ref(23)
const minut = ref(59)
const sekund = ref(59)




setInterval(() => {
    if (sekund.value === 0) {
        sekund.value = 59
        minut.value -= 1
    } else {
        sekund.value -= 1
    }
}, 1000);
</script>

<style lang="scss" scoped>

</style>