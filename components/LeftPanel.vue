<template>
  <div v-if="visible" class="w-[360px] h-[620px] fixed right-4 bottom-4 bg-white z-[99999] rounded shadow-2xl">
    <div @click="$emit('close')" class="absolute cursor-pointer top-4 right-4">
      <img src="~/assets/img/close.svg" alt="">
    </div>
    <div class="pt-6">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

defineProps({
  visible: Boolean
})
</script>

<style lang="scss" scoped>

</style>