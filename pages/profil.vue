<template>
  <div class="p-8 h flex">
    <div class="w-[620px]">
      <div>
        <div class="text-[#19191B] font-medium">Twoje Odznaki</div>
        <div class="flex gap-4 flex-wrap mt-6">
          <div v-for="badge in userStore.user.badges" :title="badge.name" class="rounded-2xl">
            <img class="w-20 h-20" :src="badge.picture" alt="">
          </div>
        </div>
      </div>
      <div class="mt-8 text-[#19191B]">
        <div class="font-medium">
          Statystyki
        </div>
        <div class="flex flex-col gap-2 mt-6">
          <div v-for="item in stats" class="flex items-center px-6 py-3 rounded-full bg-[#F6F4F0] w-full">
            <div class="font-medium flex w-full justify-between">
              <span>{{ item.text }} </span> <span>{{ item.val }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const stats = [
  { text: 'Dystans', val: '33km' },
  { text: 'Godziny', val: '2h 36min' },
  { text: 'Trasy', val: 5 },
]

const userStore = useUserStore();

</script>

<style lang="scss" scoped></style>