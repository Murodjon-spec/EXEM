<script setup>
import { topheaderSelect } from '../../constants/topheaderSelect';
</script>


<template>
    <div class="border border-b-[1px]">
        <div class="mx-auto container" style="font-family: 'Inter'">
            <div class="flex py-[23px] items-center justify-between">
                <nuxt-link to="/"><img src="BrandLogo.png" alt=""></nuxt-link>
                <div class="h-[40px] flex border-[2px] rounded-[6px] border-[#0D6EFD] items-center">
                    <div class="px-[9px] border-r-[1px] border-[#0D6EFD] h-[100%]"><input
                            class="outline-none w-[404px] h-full border-none" type="text" placeholder="Search"></div>
                    <div class="border-r-[1px] border-[#0D6EFD] h-[100%]">
                        <select class="bg-white hover:cursor-pointer h-full w-full outline-none border-none focus:outline-none" name="categories" id="">
                            <option v-for="el in topheaderSelect" :key="el.id" :value="el.title"><img src="Logo.png" alt="">{{ el.title }}</option>
                        </select>
                    </div>
                    <div>
                        <button
                            class="bg-[#0D6EFD] text-white px-[24px] py-[6px] hover:bg-[#0045ab] duration-300 rounded-[1px]">Search</button>
                    </div>
                </div>
                <div class="grid grid-cols-4 gap-[20px]">
                    <div
                        class="grid grid-cols-1 gap-[7px] text-[#8B96A5] hover:text-black hover:cursor-pointer duration-300 place-content-center">
                        <i class='bx bxs-user text-[20px] text-center'></i>
                        <h1 class="text-center">Profile</h1>
                    </div>
                    <div
                        class="grid grid-cols-1 gap-[7px] text-[#8B96A5] hover:text-black hover:cursor-pointer duration-300 place-content-center">
                        <i class='bx bx-message-detail text-[24px] text-center'></i>
                        <h1 class="text-center">Message</h1>
                    </div>
                    <div
                        class="grid grid-cols-1 gap-[7px] text-[#8B96A5] hover:text-black hover:cursor-pointer duration-300 place-content-center">
                        <i class='bx bxs-heart text-[20px] text-center'></i>
                        <h1 class="text-center">Orders</h1>
                    </div>
                    <nuxt-link to="/cart">
                        <div
                            class="grid grid-cols-1 gap-[8px] text-[#8B96A5] hover:text-black hover:cursor-pointer duration-300 place-content-center">
                            <i class='bx bx-cart-alt text-[22px] text-center'></i>
                            <h1 class="text-center">My Cart</h1>
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>


<style>/* h1{
        color: #0045ab
    } */</style>