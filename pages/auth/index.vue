<template>
  <div> 
    <div class="mt-16 flex flex-col items-center">
      <a :href="`${runtimeConfig.public.URL}/google`" @click="" class="bg-[#295046] w-full px-8 py-3.5 rounded-full text-white flex justify-center items-center gap-4">
       <img src="~/assets/img/google.svg" alt=""> Zaloguj się kontem Google
      </a>
      <nuxt-link to="/auth/login" class="rounded-full border-[#295046] border w-full px-8 py-3.5 text-center mt-2">
        Zaloguj się mailem
      </nuxt-link>

      <div class="text-center mt-6 font-medium">
        Nie masz konta? <nuxt-link to="/auth/register" class="underline">Zarejestruj się</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';
const runtimeConfig = useRuntimeConfig()
definePageMeta({
  layout: 'auth'
})

async function handleGoogleLogin(){
  try{
    const result = await callApi('/google');
    console.log(result);
  } catch (err) {
    console.log(err)
  }
}

onMounted(() => {
  console.log(runtimeConfig);
})
</script>

<style lang="scss" scoped>

</style>