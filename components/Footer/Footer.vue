<script setup>
import { footerLanguages } from "../../constants/footerLanguages"
import { about } from "../../constants/about"
import { information } from "../../constants/information"
import { forUsers } from "../../constants/forUsers"
import { footerMarkets } from "../../constants/footerMarkets"
</script>


<template>
    <div class="container mx-auto" style="font-family: 'Inter'">
        <div class="py-[43px]" style="display: grid; grid-template-columns: 30% 15% 15% 15% 15% 15% ;">
            <div class="w-[280px]">

                <nuxt-link to="/"><img src="BrandLogo.png" class="mb-[20px]" alt=""></nuxt-link>
                <p class="text-[#505050] mb-[20px]">Best information about the company gies here but now lorem ipsum is</p>
                
                <div class="flex gap-[12px]">
                    <i class="rounded-full p-[6px] bg-[#BDC4CD] text-[20px] text-white duration-300 hover:cursor-pointer hover:bg-[#3b5998] bx bxl-facebook"></i>
                    <i class="rounded-full p-[6px] bg-[#BDC4CD] text-[20px] text-white duration-300 hover:cursor-pointer hover:bg-[#00acee] bx bxl-twitter"></i>
                    <i class="rounded-full p-[6px] bg-[#BDC4CD] text-[20px] text-white duration-300 hover:cursor-pointer hover:bg-[#0072b1] bx bxl-linkedin"></i>
                    <i class="rounded-full p-[6px] bg-[#BDC4CD] text-[20px] text-white duration-300 hover:cursor-pointer hover:bg-[#E4405F] bx bxl-instagram"></i>
                    <i class="rounded-full p-[6px] bg-[#BDC4CD] text-[20px] text-white duration-300 hover:cursor-pointer hover:bg-[#c4302b] bx bxl-youtube"></i>
                </div>
            </div>
            <div>
                <h1 class="font-medium mb-[10px]">About</h1>
                <h1 v-for="el in about" class="text-[#8B96A5] hover:text-black hover:cursor-pointer duration-300" :class="el === 'Blogs' ? '' : 'mb-10px'">{{ el }}</h1>
            </div>
            <div>
                <h1 class="font-medium mb-[10px]">Partnership</h1>
                <h1 v-for="el in about" class="text-[#8B96A5] hover:text-black hover:cursor-pointer duration-300" :class="el === 'Blogs' ? '' : 'mb-10px'">{{ el }}</h1>
            </div>
            <div>
                <h1 class="font-medium mb-[10px]">Information</h1>
                <h1 v-for="el in information" class="text-[#8B96A5] hover:text-black hover:cursor-pointer duration-300" :class="el === 'Blogs' ? '' : 'mb-10px'">{{ el }}</h1>
            </div>
            <div>
                <h1 class="font-medium mb-[10px]">For Users</h1>
                <h1 v-for="el in forUsers" class="text-[#8B96A5] hover:text-black hover:cursor-pointer duration-300" :class="el === 'Blogs' ? '' : 'mb-10px'">{{ el }}</h1>
            </div>
            <div>
                <h1 class="font-medium mb-[10px]">Get App</h1>
                <img v-for="el in footerMarkets" class="mb-[10px]" :src="el" alt="">
            </div>
        </div>
    </div>
    <div class="bg-[#EFF2F4]" style="font-family: 'Inter'">
        <div class="container mx-auto flex justify-between items-center py-[23px] text-[#606060]">
            <h1>© {{ new Date().getFullYear() }} Ecommerce.</h1>
            <select name="languages" class="border-none bg-[#EFF2F4] outline-none" id="">
                <option class="bg-white" v-for="el in footerLanguages" :value="el.title">{{ el.title }}</option>
            </select>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>