<template>
  <div class="max-w-[520px] mx-auto mt-24 rounded-xl">
    <div class="pt-36 pb-12">
      <div class="flex justify-center">
        <input placeholder="Email" class="px-2 py-1 border w-8/12 rounded" type="text">
      </div>
      <div class="mt-2 flex justify-center">
        <input placeholder="Password" class="px-2 py-1 border w-8/12 rounded"  type="password">
      </div>
      <div class="text-center">
        Or
      </div>
      <div class="flex justify-center">
        <div class="px-2 py-2 border mx-auto flex items-center justify-center rounded mt-4 gap-2">
          <img class="w-8" src="~/assets/img/google.svg" alt=""> Login With Google
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
</script>

<style lang="scss" scoped>

</style>