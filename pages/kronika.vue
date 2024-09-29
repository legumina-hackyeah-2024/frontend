<template>
  <div class="h w-full  px-9 py-7 ">
    <div class="text-4xl">
      Kronika
    </div>
    <div class="flex flex-wrap gap-4 text-[#19191B] mt-6">
      <div v-for="hero in heros" @click="getHeroDetails(hero)" class="rounded flex cursor-pointer">
        <div class="w-[180px]">
          <img class="" :src="hero.picture" alt="">
        </div>
        <div class="px-4 max-w-[230px] flex flex-col justify-between">
          <div class="mt-2 font-bold text-xl">
            {{ hero.name }}
          </div>
          <div class="mb-4 font-medium">
            {{ hero.excerpt }}
          </div>
        </div>
      </div>
    </div>
    <LeftPanel @close="detailsVisible = false" :visible="detailsVisible">
      <div class="pt-6">
        <div class="w-9/12 mx-auto">
          <img :src="details.picture" alt="">
        </div>
        <div class="px-6">
          <div class="border-b border-[#d6d6d6] my-4">

          </div>
          <div class="font-bold text-2xl">
            {{ details.name }}
          </div>
          <div class="max-h-[14vw] overflow-auto mt-4 text-sm">
            {{ details.description }}
          </div>
        </div>
      </div>
    </LeftPanel>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import LeftPanel from '~/components/LeftPanel.vue';

const heros = ref([]);
const detailsVisible = ref(false);
const details = ref({});

function getHeroDetails(hero) {
  details.value = hero;
  detailsVisible.value = true;
}

onMounted(async () => {
  const response = await GqlGetHeros();
  console.log(response);
  heros.value = response.heros;
})
</script>

<style lang="scss" scoped></style>