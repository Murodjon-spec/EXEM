<template>
                    <div class="banner mr-[20px] w-[825px] pt-[52px] pl-[42px]">
                    <h1 class="text-[#1C1C1C] text-[28px]">Latest Trending</h1>
                    <h1 class="text-[#1C1C1C] text-[32px] font-bold mb-[18px]">Electronic items</h1>
                    <button
                        class="font-medium text-[#1C1C1C] py-[10px] px-[16px] rounded-[6px] bg-white hover:shadow-lg duration-300">Learn
                        more</button>
                </div>
                <div class="w-auto gap-[17px] items-center" style="display: grid; grid-template-columns: 100%;">
                    <div class="rounded-[6px] p-[10px] bg-[#E3F0FF] w-[100%]">
                        <div class="flex gap-[20px] mb-[25px] justify-start items-center">
                            <img src="Avatar.png" width="60" alt="">
                            <h1 class="tracking-[1px] text-[22px] w-[140px]">Hi, user let’s get stated</h1>
                        </div>
                        <div class="mb-[8px]">
                            <button
                                class="py-[10px] rounded-[6px] text-white w-full bg-[#127FFF] hover:bg-[#0045ab] duration-300 ">Join
                                now</button>
                        </div>

                        <div>
                            <button
                                class="border-[1px] w-full text-[#0D6EFD] rounded-[6px] py-[10px] bg-white hover:bg-[#f4f4f4] duration-300">Login</button>
                        </div>

                    </div>
                    <div
                        class="flex items-center p-[20px] bg-[#F38332] text-[20px] text-white tracking-[1px] rounded-[6px]">
                        <h1 class="">Get US $10 off with a new supplier</h1>
                    </div>

                    <div
                        class="flex items-center p-[20px] bg-[#55BDC3] text-[20px] text-white tracking-[1px] rounded-[6px]">
                        <h1 class="">Send quotes with supplier preferences</h1>
                    </div>

                </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.banner {
    background-image: url("../public/Banner.png");
    background-repeat: no-repeat;
    background-size: cover;
}
</style>