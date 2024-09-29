<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'HackYeah'
})
import { onMounted } from 'vue';

</script>

<style>
.h {
  height: calc(100vh - 72.8px)
}

.stiff-map .leaflet-top.leaflet-left {
  display: none;
}

@font-face {
  font-family: 'Caveat+Brush';
  src: url('~/assets/fonts/CaveatBrush-Regular.ttf');
}

@font-face {
  font-family: 'Sofia+Sans';
  src: url('~/assets/fonts/SofiaSans-Regular.ttf');
  weight: 400,
}

@font-face {
  font-family: 'Sofia+Sans';
  src: url('~/assets/fonts/SofiaSans-Medium.ttf');
  weight: 500,
}

@font-face {
  font-family: 'Sofia+Sans';
  src: url('~/assets/fonts/SofiaSans-SemiBold.ttf');
  weight: 600,
}

@font-face {
  font-family: 'Sofia+Sans';
  src: url('~/assets/fonts/SofiaSans-Bold.ttf');
  weight: 700,
}

body {
  font-family: 'Sofia+Sans'
}

.text-brush {
  font-family: 'Caveat+Brush';
}
</style>