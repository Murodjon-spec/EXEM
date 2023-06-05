<script setup>
import { initAccordions } from "flowbite"
import { onMounted } from "vue"
import { filters } from "../../plugin/filters"
import { NRate } from "naive-ui"
import { mobiles } from "../../plugin/mobiles"

onMounted(() => {
    initAccordions();
})
</script>




<template>
    <Header />
    <div class="bg-[#F7FAFC]" style="font-family: 'Inter'">
        <div class="container mx-auto">
            <div class="flex justify-start items-center py-[23px] text-[#8B96A5]">
                <h1 class="hover:cursor-pointer hover:text-black duration-300">Home <i
                        class='bx bx-chevron-right ml-[5px] mr-[20px] hover:cursor-auto'></i></h1>
                <h1 class="hover:cursor-pointer hover:text-black duration-300">Clothings <i
                        class='bx bx-chevron-right ml-[5px] mr-[20px] hover:cursor-auto'></i></h1>
                <h1 class="hover:cursor-pointer hover:text-black duration-300">Men’s wear <i
                        class='bx bx-chevron-right ml-[5px] mr-[20px] hover:cursor-auto'></i></h1>
                <h1 class="hover:cursor-pointer hover:text-black duration-300">Summer clothing</h1>
            </div>
            <div style="display: grid; grid-template-columns: 20% 80%;" class="gap-[15px]">
                <Sidebar />
                <div>
                    
                    <div class="w-full py-[25px] px-[22px] mb-[18px] rounded-[6px] border-[1px] border-[#DEE2E7] bg-white flex items-center justify-between">
                        <h1 class="text-[18px]">12,911 items in <b>Mobile accessory</b></h1>
                        <div class="flex items-center">
                            <div class="flex items-center gap-[16px] mr-[19px]">
                                <input class="border-[#BDBDBD] border-[2px] rounded-[6px] w-[20px] h-[20px] hover:cursor-pointer" type="checkbox">
                                <h1>Verified only</h1>
                            </div>
                            <select name="" id="" class="border-[1px] border-[#DEE2E7] rounded-[6px] mr-[10px]">
                                <option value="Featured">Featured</option>
                            </select>
                            <div class="border-[1px] border-[#DEE2E7] rounded-[6px]">
                                <i class='p-[12px] bg-[#EFF2F4] bx bxs-category border-r-[0.5px] border-[#DEE2E7]'></i>
                                <i class='p-[12px] hover:bg-[#EFF2F4] duration-300 hover:cursor-pointer bx bx-menu border-[#DEE2E7] border-l-[0.5px]'></i>
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center gap-[10px] mb-[18px]">
                        <div v-for="el in filters" class="flex items-center px-[12px] py-[8px] text-[18px] gap-[11px] border-[1px] border-[#0d6efd] rounded-[6px] bg-white">{{ el }} <i class='bx bx-x hover:cursor-pointer'></i></div>
                        <h1 class="text-[18px] text-[#0D6EFD] ml-[10px]">Clear all filter</h1>
                    </div>
                    <div style="display: grid; grid-template-columns: 32.2% 32.2% 32.2%;" class="mb-[18px] gap-[20px]">
                        <div v-for="el in mobiles" class="bg-white rounded-[6px] grid grid-cols-1 hover:cursor-pointer">
                            <div class="flex justify-center border-b-[1px]"><img height="260" width="260" :src="el" alt=""></div>
                            <div class="py-[20px] px-[22px]" style="display: grid; grid-template-columns: 70% 30%;">
                                <div>
                                    <div class="flex justify-start items-center gap-[10px] mb-[11px]">
                                        <h1 class="text-[20px] font-bold">$99.50</h1>
                                        <h2 class="text-[18px] text-[#8B96A5] line-through">$1128.00</h2>
                                    </div>
                                    <n-rate readonly :default-value="4" class="mb-[12px]"/>
                                    <h1 class="text-[18px] text-[#606060]">GoPro HERO6 4K Action Camera - Black</h1>
                                </div>
                                <div class="flex justify-end items-start">
                                    <button class="border-[1px] border-[#DEE2E7] rounded-[6px] p-[10px] flex justify-center items-center text-[#0D6EFD] hover:bg-[#0D6EFD] hover:text-white duration-300"><i class='bx bx-heart text-[26px]'></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end items-center mb-[180px] gap-[20px]">
                        <select class="border-[1px] border-[#DEE2E7] rounded-[6px] hover:cursor-pointer" name="" id="">
                            <option value="Show 10">Show 10</option>
                            <option value="Show 20">Show 20</option>
                            <option value="Show 50">Show 50</option>
                            <option value="Show 100">Show 100</option>
                        </select>
                        <div class="flex items-center h-[42px] border-[1px] border-[#dee2e7] bg-white rounded-[6px]">
                            <div class="border-r-[1px] border-[#dee2e7] px-[20px] py-[10px] hover:cursor-not-allowed"><i class='bx bx-chevron-left text-[#8B96A5]' ></i></div>
                            <div class="border-r-[1px] border-[#dee2e7] px-[20px] py-[10px] bg-[#EFF2F4]">1</div>
                            <div class="border-r-[1px] border-[#dee2e7] px-[20px] py-[10px] hover:bg-[#EFF2F4] duration-300 hover:cursor-pointer">2</div>
                            <div class="border-r-[1px] border-[#dee2e7] px-[20px] py-[10px] hover:bg-[#EFF2F4] duration-300 hover:cursor-pointer">3</div>
                            <div class=" px-[20px] py-[10px] hover:bg-[#EFF2F4] duration-300 hover:cursor-pointer"><i class='bx bx-chevron-right' ></i></div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <Email />
</div></template>


<style lang="scss" scoped></style>