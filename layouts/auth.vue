<template>
  <div class="mt-10">
    <div class="w-[410px] mx-auto">
      <div class="text-center font-semibold text-4xl text-[#19342D]">Co chcesz dzisiaj odkryć?</div>

      <slot></slot>
    </div>
    <div class="flex">
      <div class="fixed -bottom-1 left-1/2 transform -translate-x-1/2 w-[23vw]">
        <img src="~/assets/img/auth.jpg" alt="">
      </div>
    </div>
  </div>
  
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>