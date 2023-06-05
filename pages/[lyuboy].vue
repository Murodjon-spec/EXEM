<script setup>

</script>


<template>
    <Header />
    <div class="bg-white">
        <div class="container mx-auto h-[450px] flex justify-center items-center">
            <img src="404.png" width="400" alt="">
            <div style="font-family: 'Orbitron'">
                <p class="text-[#47B886] text-[66px]">404 not found</p>
                <p class="text-[#47B886] text-[32px] mb-[17px]">Looking something we don’t serve?</p>
                <nuxt-link to="/" class="uppercase hover:underline">back to home</nuxt-link>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

</style>