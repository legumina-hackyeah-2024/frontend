<template>
  <div class="p-8 h flex">
    <div>
      <div>
        <div class="text-[#19191B] font-medium">Twoje Odznaki</div>
        <div class="flex gap-4 flex-wrap mt-6">
          <div v-for="i in 10" class="w-24 h-24 bg-blue-100 rounded-2xl">
            
          </div>
        </div>
      </div>
      <div class="mt-8">
        <div class="text-[#19191B] font-medium">
          Statystyki
        </div>
        <div class="flex gap-2 mt-6">
          <div v-for="item in stats" class="flex items-center px-2.5 py-4 w-[240px] border border-[#d6d6d6] rounded">
            <div class="w-6 h-6 bg-[#61646B] mr-4 rounded">

            </div>
            <div class="font-medium text-[#61646B]">
              {{ item.text }}: {{ item.val }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-[230px]">
      <div>
        Twoi Znajomi
      </div>
      <div class="flex flex-wrap w-10/12 gap-2 mt-4">
        <div class="w-16 h-16 rounded-full bg-blue-100" v-for="i in 5">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const stats = [
  {text: 'Dystans', val: '33km'},
  {text: 'Godziny', val: '2h 36min'},
  {text: 'Trasy', val: 5},
]
</script>

<style lang="scss" scoped>

</style>