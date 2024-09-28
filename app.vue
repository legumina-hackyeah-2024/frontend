<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: 'HackYeah'
})
import {onMounted} from 'vue';

</script>

<style>
.h{
  height: calc(100vh - 72.8px)
}

.stiff-map .leaflet-top.leaflet-left{
  display: none;
}
</style>