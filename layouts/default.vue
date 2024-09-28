<template>
  <div>
    <div class="px-8 border-b border-[#EFEFF0] py-4 bg-[#FAFAFA] z-[999999999] w-full flex items-center justify-between">
      <div class="text-4xl">
        Legendarium
      </div>
    </div>
    <div class="flex">
      <SideBar />
      <slot />
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>

</style>