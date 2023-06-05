<script setup>
import { left_h } from "../constants/left_h";
import { gadgets } from "../constants/gadgets"
import { units } from "../constants/units"

import { suppliers } from "../constants/suppliers"
</script>


<template>
    <Header />
    <div class="bg-[#F7FAFC] py-[20px]" style="font-family: 'Inter'">
        <div class="container mx-auto">
            <div class="flex mb-[30px] rounded-[6px] border-[1px] bg-white py-[19px] px-[14px]">
                <div class="w-[300px] mr-[14px]">
                    <div v-for="el in left_h"
                        class="categ py-[12px] px-[10px] rounded-[6px] text-[#505050] hover:cursor-pointer hover:bg-[#E5F1FF] hover:text-black duration-300">
                        <h1>{{ el.title }}</h1>
                    </div>
                </div>
                <Baner/>
            </div>
            <Voht/>
            <div class="flex mb-[30px] rounded-[6px] border-[1px] bg-white">
            <Outodors/>
            </div>
            <div class="flex mb-[30px] rounded-[6px] border-[1px] bg-white">
                <div class="gadgets w-[375px] h-[310px] pt-[25px] pl-[23px]">
                    <h1 class="text-[#1C1C1C] font-semibold text-[22px] w-[150px] mb-[22px]">Consumer electronics and gadgets</h1>
                    <button class="bg-white px-[20px] py-[13px] rounded-[6px] hover:shadow-lg duration-300">Source now</button>
                </div>
                <div class="w-full" style="display: grid; grid-template-columns: 25% 25% 25% 25%;">
                    <div v-for="el in gadgets" :key="el.id" class="h-[155px] pt-[15px] pl-[18px] pb-[10px] border rounded-[6px] hover:cursor-pointer">
                        <div class="mb-[12px]"><h1 class="text-[24px]">{{ el.product }}</h1></div>
                        <div class="flex justify-between card">
                            <h1 class="text-[19px] text-[#8B96A5]">From ${{ el.price }}</h1>
                            <img :src="el.img" alt="" style="margin-right: 10px; margin-bottom: 10px;">
                        </div>
                    </div>
                </div>
            </div>
            <div class="requests w-full justify-between h-auto flex mb-[30px] rounded-[6px] border-[1px] border-[#52a3ff] py-[33px] px-[35px]">
                <div>
                    <h1 class="text-white w-[440px] font-bold text-[35px] mb-[13px]">An easy way to send requests to all suppliers</h1>
                    <h1 class="text-white w-[440px] text-[18px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</h1>
                </div>
                <div class="w-[520px] py-[25px] px-[23px] bg-white">
                    <h1 class="font-bold text-[22px] mb-[18px]">Send quote to suppliers</h1>
                    <input type="text" placeholder="What item you need?" class="w-full rounded-[6px] p-[13px] border-gray-300 mb-[18px]">
                    <textarea name="" id="" class="w-full p-[13px] border-gray-300 rounded-[6px] mb-[18px]" placeholder="Type more details" rows="3"></textarea>
                    <div class="mb-[18px]">
                        <input placeholder="Quantity" type="number" class="p-[13px] mr-[20px] w-[45%] rounded-[6px] border-gray-300">
                        <select class="p-[13px] rounded-[6px] border-gray-300" name="" id="">
                            <option v-for="el in units" :value="el">{{ el }}</option>
                        </select>
                    </div>
                    <button class="rounded-[6px] p-[12px] text-[18px] text-white bg-[#127FFF] hover:bg-[#0045ab] duration-300">Send inquiry</button>
                </div>
            </div>
            <h1 class="mb-[18px] font-bold text-[26px]">Recommended items</h1>
            <RecIt/>
            <h1 class="mb-[18px] font-bold text-[26px]">Our extra services</h1>
            <div style="display: grid; grid-template-columns: 25% 25% 25% 25%;" class="gap-[25px] mb-[18px]">
                <div class="">
                    <div class="h-[120px] hubs"></div>
                    <i class='bx bx-search-alt-2 absolute mt-[-30px] ml-[310px] hover:bg-white hover:border-gray-300 hover:cursor-pointer duration-300 text-right text-[26px] p-[16px] bg-[#D1E7FF] border-[2px] border-white rounded-full'></i>
                    <div class="py-[18px] px-[22px] bg-white">
                        <h1 class="w-[200px] text-[18px] font-medium">Source from Industry Hubs</h1>
                    </div>
                </div>
                <div class="">
                    <div class="custom h-[120px]"></div>
                    <i class='bx bx-note absolute mt-[-30px] ml-[310px] hover:bg-white hover:border-gray-300 hover:cursor-pointer duration-300 text-right text-[26px] p-[16px] bg-[#D1E7FF] border-[2px] border-white rounded-full'></i>
                    <div class="py-[18px] px-[22px] bg-white">
                        <h1 class="w-[200px] text-[18px] font-medium">Customize Your Products</h1>
                    </div>
                </div>
                <div class="">
                    <div class="shipping h-[120px]"></div>
                    <i class='bx bx-send absolute mt-[-30px] ml-[310px] hover:bg-white hover:border-gray-300 hover:cursor-pointer duration-300 text-right text-[26px] p-[16px] bg-[#D1E7FF] border-[2px] border-white rounded-full'></i>
                    <div class="py-[18px] px-[22px] bg-white">
                        <h1 class="w-[200px] text-[18px] font-medium">Fast, reliable shipping by ocean or air</h1>
                    </div>
                </div>
                <div class="">
                    <div class="monitoring h-[120px]"></div>
                    <i class='bx bx-shield-quarter absolute mt-[-30px] ml-[310px] hover:bg-white hover:border-gray-300 hover:cursor-pointer duration-300 text-right text-[26px] p-[16px] bg-[#D1E7FF] border-[2px] border-white rounded-full'></i>
                    <div class="py-[18px] px-[22px] bg-white">
                        <h1 class="w-[200px] text-[18px] font-medium">Product monitoring and inspection</h1>
                    </div>
                </div>
            </div>
            <h1 class="mb-[18px] font-bold text-[26px]">Suppliers by region</h1>
            <div style="display: grid; grid-template-columns: 20% 20% 20% 20% 20%;" class="gap-[21px] mb-[18px]">
                <div v-for="el in suppliers" class="flex items-center">
                    <img :src="el.img" class="mr-[15px] w-[40px] h-[26px]" alt="">
                    <div>
                        <h1 class="text-[18px]">{{ el.country }}</h1>
                        <h1 class="text-[15px] text-[#8B96A5] hover:cursor-pointer">{{ el.site }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Email />
</template>


<style lang="scss" scoped>
.gadgets{
    background-image: url("../public/Gadgets.png");
    background-size: cover;
    background-repeat: no-repeat;
}

.requests{
    background-image: url("../public/Requests.png");
    background-size: cover;
    background-repeat: no-repeat;
}

.hubs{
    background-image: url("../public/Hubs.png");
    background-size: cover;
    background-repeat: no-repeat;
}

.custom{
    background-image: url("../public/Custom.png");
    background-size: cover;
    background-repeat: no-repeat;
}

.monitoring{
    background-image: url("../public/Monitoring.png");
    background-size: cover;
    background-repeat: no-repeat;
}
.shipping{
    background-image: url("../public/Shipping.png");
    background-size: cover;
    background-repeat: no-repeat;
}


</style>