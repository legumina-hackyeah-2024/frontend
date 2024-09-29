<template>
  <div>
    <div class="mt-12">
      <div class="text-[#19191B]">
        <div class="text-sm font-medium mb-2">
          Email
        </div>
        <input v-model="email" type="text" placeholder="Wpisz swój email"
          class="placeholder:text-[#C8C8C8] p-3 focus:outline-none border border-[#AFB1B6] rounded w-full">
      </div>
      <div class="mt-4">
        <div class="text-sm font-medium mb-2">
          Hasło
        </div>
        <input v-model="password" type="password" placeholder="Wpisz hasło"
          class="placeholder:text-[#C8C8C8] p-3 focus:outline-none border border-[#AFB1B6] rounded w-full">
      </div>
      <div v-if="loginFailed" class="mt-2 text-red-600 text-center font-bold">
        Login Failed
      </div>
      <div @click="handleLogin()"
        class="bg-[#295046] cursor-pointer w-full px-8 py-3.5 rounded-full text-white flex justify-center mt-6">
        Zaloguj się
      </div>
      <div class="w-full text-center mt-6 font-medium">
        Nie masz konta? <nuxt-link to="/auth/register" class="underline">Zarejestruj się</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const userStore = useUserStore();

const email = ref('');
const password = ref('');

const loginFailed = ref(false);

async function handleLogin() {
  loginFailed.value = false;
  try {
    const result = await GqlLoginUser({ input: { email: email.value, password: password.value } });
    useGqlToken(result.authLogin.sessionToken);
    const user = await GqlGetUser();

    userStore.user = user.userMe;
    localStorage.setItem('user', JSON.stringify(user.userMe))
    navigateTo('/');
  } catch (err) {
    console.log(err);
    loginFailed.value = true
  }
}

definePageMeta({
  layout: 'auth'
})
</script>

<style lang="scss" scoped></style>