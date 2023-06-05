<script setup>
import { cart } from "../../constants/cart"
import { tolov } from "../../constants/tolovturi"
import { underCart } from "../../constants/underCart"
import { saved } from "../../constants/saved"

let sum = 0
for (let i of cart) {

    sum += i.quantity * i.price

    console.log(sum);
}
</script>


<template>
    <div class="bg-[#F7FAFC]" style="font-family: 'Inter'">
        <div class="container mx-auto">
            <div class="py-[30px]">
                <h1 class="mb-[26px] font-semibold text-[26px] text-[#1C1C1C]">My cart ({{ cart.length }})</h1>
                <div style="display: grid; grid-template-columns: 75% 23.5%;" class="gap-[22px]">
                    <div>
                        <div
                            class="mb-[32px] border-[1px] border-[#DEE2E7] rounded-[6px] bg-white py-[24px] px-[22px] grid grid-cols-1">

                            <div v-for="el in cart" style="display: grid; grid-template-columns: 10% 70% 20%;"

                                class="gap-[16px] border-b-[1px] py-[22px] border-[#DEE2E7]">

                                <div
                                    class=" max-h-[90px] border-[1px] border-[#DEE2E7] rounded-[10px] p-[8px] flex justify-center items-center">
                                    <img :src="el.img" alt="">
                                </div>
                                <div class="grid grid-cols-1 text-[18px]">
                                    <h1 class="font-medium text-[#1C1C1C] ">{{ el.title }}</h1>
                                    <div class="text-[#8B96A5] flex items-center justify-start gap-[25px]">
                                        <h1>Size: {{ el.size }}</h1>
                                        <h1>Color: {{ el.color }}</h1>
                                        <h1>Material: {{ el.material }}</h1>
                                    </div>
                                    <h1 class="text-[#8B96A5] mb-[20px]">Seller: {{ el.seller }}</h1>
                                    <div class="flex items-center gap-[15px]">
                                        <button
                                            class="py-[12px] px-[14px] border-[1px] border-[#DEE2E7] rounded-[6px] text-[#FA3434] hover:bg-[#FA3434] hover:text-white duration-300 hover:cursor-pointer">Remove</button>
                                        <button
                                            class="py-[12px] px-[14px] border-[1px] border-[#DEE2E7] rounded-[6px] text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white duration-300 hover:cursor-pointer">Save
                                            for later</button>
                                    </div>
                                </div>
                                <div class="grid grid-cols-1  w-[85%]">
                                    <div class="flex justify-end">
                                        <h1 class="font-medium text-[18px]">${{ el.price }}</h1>
                                    </div>
                                    <select
                                        class="border-[1px] border-[#DEE2E7] rounded-[6px] py-[14px] px-[12px] h-[52px] w-auto"
                                        name="" id="">
                                        <option value="">Qty: {{ el.quantity }}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="flex justify-between mt-[22px]">

                                <button
                                    class="flex items-center hover:cursor-pointer bg-[#0D6EFD] hover:bg-[#0045ab] duration-300 rounded-[8px] py-[14px] px-[16px] text-white text-[18px] font-medium"><i
                                        class='bx bx-left-arrow-alt text-[25px] mr-[15px]'></i> Back to shop</button>

                                <button
                                    class="flex items-center hover:cursor-pointer border-[1px] text-[#0D6EFD] border-[#DEE2E7] duration-300 rounded-[8px] py-[14px] px-[16px] hover:bg-[#0D6EFD] hover:text-white text-[18px] font-medium"><i
                                        class='bx bx-trash text-[25px] mr-[15px]'></i> Remove all</button>
                            </div>
                        </div>
                        <div style="display: grid; grid-template-columns: 34% 34% 34%;" class="mb-[25px]">
                            <div v-for="el in underCart" class="flex items-center">
                                <i :class="el.icon"
                                    class='h-[55px] text-[24px] flex justify-center items-center w-[55px] rounded-full text-[#8B96A5] bg-[#DEE2E7]'></i>
                                <div class="grid grid-cols-1 ml-[20px] text-[18px]">
                                    <h1>{{ el.title }}</h1>
                                    <h1 class="text-[#A9ACB0]">Have you ever finally just</h1>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div class="py-[22px] px-[18px] bg-white border-[1px] mb-[24px] border-[#DEE2E7] rounded-[6px]">
                            <h1 class="text-[#505050] text-[18px] mb-[12px]">Have a coupon?</h1>
                            <div class="border-[1px] border-[#DEE2E7] rounded-[6px] w-full">
                                <input placeholder="ENTER COUPON"
                                    class="rounded-[6px] rounded-r-none border-r-[1px] border-t-0 border-b-0 border-l-0 border-r-[#dee2e7] w-[69%]"
                                    type="text">
                                <button
                                    class="w-[31%] h-full px-[2px] py-[8px] rounded-r-[6px] text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white duration-300 hover:cursor-pointer">Apply</button>
                            </div>
                        </div>
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
                            </div>x 
                        </div>
                    </div>
                </div>
                <div class="border-[1px] border-[#DEE2E7] bg-white p-[22px] rounded-[6px] mb-[24px]">
                    <h1 class="font-semibold text-[22px] mb-[25px]">Saved for later</h1>
                    <div style="display: grid; grid-template-columns: 23.8% 23.8% 23.8% 23.8%;" class="gap-[24px]">
                        <div v-for="el in saved">
                            <img class="mb-[12px]" :src="el.img" width="100%" alt="">
                            <h1 class="font-semibold text-[20px] mb-[12px]">${{ el.price }}</h1>
                            <h1 class="w-[240px] text-[#606060] text-[18px] mb-[15px]">{{ el.title }}</h1>
                            <button class="border-[1px] border-[#DEE2E7] rounded-[6px] py-[14px] px-[20px] flex items-center gap-[7.5px] text-[#0D6EFD] hover:bg-[#0D6EFD] duration-300 hover:text-white"><i class='bx bx-cart text-[23px]' ></i> Move to cart</button>
                        </div>
                        
                    </div>
                </div>


                <div class="bg-[#005ADE] flex items-center justify-between py-[30px] px-[32px] rounded-[10px]">
                    <div class="text-white">
                        <h1 class="font-semibold text-[26px]">Super discount on more than 100 USD</h1>
                        <h1 class="text-[18px]">Have you ever finally just write dummy info</h1>
                    </div>
                    <button class="font-medium text-[18px] bg-[#FF9017] border-[1px] border-[#FF9017] hover:bg-white hover:text-[#FF9017] duration-300 py-[14px] px-[18px] text-white rounded-[8px]">Shop now</button>
                </div>
            </div>

        </div>
    </div>
</template>


<style lang="scss" scoped></style>