<template>
  
  <LMap
    :zoom="13"
    :center="initialPosition"
    style="height: 100vh; width: 100%"
  >
    <LTileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <LMarker v-for="marker in markers" :lat-lng="[marker[0], marker[1]]"></LMarker>
    <LControlZoom position="bottomright" />
  </LMap>
</template>

<script setup>
import { LControlZoom } from '@vue-leaflet/vue-leaflet';
import {onMounted} from 'vue';

const initialPosition = ref([0, 0]);
const center = [51.505, -0.09];
const zoom = 13;

const markers = [
  [51.505, -0.09],
  [51.515, -0.1],
  [51.525, -0.11],
  [51.535, -0.12],
  [51.545, -0.13],
  [51.555, -0.14],
  [51.565, -0.15],
  [51.575, -0.16],
  [51.585, -0.17],
  [51.595, -0.18]
];

function geoSuccess(position){
  initialPosition.value = [position.coords.latitude, position.coords.longitude]
}

function geoFail(err){
  alert(err.message);
}

onMounted(() => {
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(geoSuccess, geoFail)
  }
})
</script>

<style>
/* Add any additional styles if needed */
</style>
