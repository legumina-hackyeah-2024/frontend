<template>
  <div>
    <div
      class="px-10 border-b border-[#EFEFF0] py-4 bg-[#FAFAFA] z-[999999999] w-full flex items-center justify-between">
      <nuxt-link to="/">
        <img src="~/assets/img/logo.png" alt="">
      </nuxt-link>
    </div>
    <div class="flex">
      <SideBar />
      <slot />
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped></style>