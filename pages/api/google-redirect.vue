<template>
  <div> 
    <div class="mt-12">
      <div class="text-[#19191B]">
        <div class="text-sm font-medium mb-2">
          Username
        </div>
        <input v-model="username" type="text" placeholder="Podaj nazwę użytkownika" class="placeholder:text-[#C8C8C8] p-3 focus:outline-none border border-[#AFB1B6] rounded w-full">
      </div>
      <div @click="handleGoogleLogin()" class="bg-[#295046] cursor-pointer w-full px-8 py-3.5 rounded-full text-white flex justify-center mt-6">
        Zaczynajmy
      </div>
      <div class="w-full text-center mt-6 font-medium">
        Nie masz konta? <nuxt-link to="/auth/register" class="underline">Zarejestruj się</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

const userStore = useUserStore();

const username = ref('')

const route = useRoute();
definePageMeta({
  layout: 'auth'
})

async function handleGoogleLogin(){
  const response = await GqlAuthGoogleLogin({input: {username: username.value, code: route.query.code}});
  console.log(response);
  useGqlToken(response.authGoogleLogin.sessionToken);
  const user = await GqlGetUser();

  userStore.user = user.userMe;
  console.log(user);
  navigateTo('/');
}

onMounted(() => {
  console.log(route.query.code);
})
</script>

<style lang="scss" scoped>

</style>