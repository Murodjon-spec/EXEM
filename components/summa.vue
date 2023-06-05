<template>
    <div class="border-[1px] border-[#DEE2E7] rounded-[6px] bg-white py-[24px] px-[22px]">
        <div class="border-b-[1px] border-b-[#DEE2E7] pb-[20px]">
            <div class="flex justify-between text-[18px]">
                <h1 class="text-[#505050]">Subtotal:</h1>
                <h1 class="text-[#505050]">${{ sum }}</h1>
            </div>
            <div class="flex justify-between text-[18px]">
                <h1 class="text-[#505050]">Discount:</h1>
                <h1 class="text-[#FA3434]">- ${{ (sum * 0.05).toFixed(2) }}</h1>
            </div>
            <div class="flex justify-between text-[18px]">
                <h1 class="text-[#505050]">Tax:</h1>
                <h1 class="text-[#00B517]">+ ${{ (sum * 0.008).toFixed(2) }}</h1>
            </div>
        </div>
        <div class="py-[20px]">
            <div class="flex justify-between text-[18px] items-center">
                <h1 class="text-[#1C1C1C] font-semibold">Total:</h1>
                <h1 class="text-[#1C1C1C] font-semibold text-[22px]">${{ (sum - sum * 0.05 +
                    sum * 0.008).toFixed(2) }}</h1>
            </div>
        </div>
        <button
            class="w-full bg-[#00B517] text-white text-[18px] py-[20px] rounded-[8px] hover:bg-[#006a0e] duration-300">Checkout</button>
        <div class="flex items-center justify-center py-[20px] gap-[15px]">
            <img v-for="el in tolov" :src="el + '.png'" width="45" height="30" alt="">
        </div>
    </div>
</template>

<script setup>
import { tolov } from "../plugin/tolovturi"
console.log(tolov);


let sum = 0
for (let i of cart) {

    sum += i.quantity * i.price

    console.log(sum);
}
</script>

<style lang="scss" scoped></style>