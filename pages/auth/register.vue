<template>
  <div> 
    <div class="mt-12">
      <div v-if="registerSuccess">
        <div class="w-full mx-auto text-center mt-6 font-medium">
          Rejestracja pomyślna <nuxt-link to="/auth/login" class="underline">Zaloguj się</nuxt-link>
        </div>
      </div>
      <div v-else>
        <div class="text-[#19191B]">
          <div class="text-sm font-medium mb-2">
            Email
          </div>
          <input v-model="email" type="text" placeholder="Wpisz swój email" class="placeholder:text-[#C8C8C8] p-3 focus:outline-none border border-[#AFB1B6] rounded w-full">
        </div>
        <div class="mt-4">
          <div class="text-sm font-medium mb-2">
            Hasło
          </div>
          <input v-model="password" type="password" placeholder="Wpisz hasło" class="placeholder:text-[#C8C8C8] p-3 focus:outline-none border border-[#AFB1B6] rounded w-full">
        </div>
        <div class="mt-4">
          <div class="text-sm font-medium mb-2">
            Nazwa użytkownika
          </div>
          <input v-model="username" type="text" placeholder="Powtórz hasło" class="placeholder:text-[#C8C8C8] p-3 focus:outline-none border border-[#AFB1B6] rounded w-full">
        </div>
        <div @click="registerUser()" class="bg-[#295046] cursor-pointer w-full px-8 py-3.5 rounded-full text-white flex justify-center mt-6">
          Zarejestruj się
        </div>
        <div class="w-full mx-auto text-center mt-6 font-medium">
          Nie masz konta? <nuxt-link to="/auth/register" class="underline">Zarejestruj się</nuxt-link>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const email = ref('');
const password = ref('');
const username = ref('');

const registerSuccess = ref(false);

definePageMeta({
  layout: 'auth'
})

async function registerUser(){
  const result = await GqlAuthRegister({ input: { email: email.value, password: password.value, username: username.value }});
  registerSuccess.value = true;
}
</script>

<style lang="scss" scoped>

</style>