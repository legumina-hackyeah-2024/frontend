<template>
  <div class="w-[32vw] bottom-0 h bg-[#fafafa] z-[99999999] border-r border-[#EFEFF0] px-6 py-2">
    <div class="px-4 text-3xl mt-4 font-medium">
      Witaj {{ userStore.user.username }}
    </div>
    <div class="mt-6 px-4 mb-4">
      Co chcesz dziś odkryć?
    </div>
    <nuxt-link :to="`${item.to}`" :class="[route.fullPath === item.to ? 'bg-[#E8F3F0]' : '']" class="px-4 py-4 hover:bg-[#E8F3F0] rounded mb-2 inline-block w-full" v-for="item in menuItems">
      <div class="flex w-full">
        <div class=" hover:bg-blue-200 capitalize rounded cursor-pointer font-medium text-xl">
          {{ item.label }}
        </div>
      </div>
    </nuxt-link>
    <nuxt-link v-if="userStore.user" :to="`/profil`" :class="[route.fullPath === '/profil' ? 'bg-[#E8F3F0]' : '']" class="px-4 py-4 hover:bg-[#E8F3F0] rounded mb-2 inline-block w-full">
      <div class="flex w-full">
        <div class=" hover:bg-blue-200 capitalize rounded cursor-pointer font-medium text-xl">
          Profil
        </div>
      </div>
    </nuxt-link>
    <nuxt-link v-else to="/auth" class="px-4 py-4 hover:bg-[#E8F3F0] rounded mb-2 inline-block w-full">
      <div class="flex w-full">
        <div class=" hover:bg-blue-200 capitalize rounded cursor-pointer font-medium text-xl">
          Zaloguj się
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
const userStore = useUserStore();
const route = useRoute();

const menuItems =ref( [
  {label:'trasy', to: '/', icon: 'gps-location-rectangle.png'}, 
  {label:'kronika', to: '/kronika'}, 
])

onMounted(() => {
  if(userStore.user.username){

  }
})
</script>

<style>

</style>