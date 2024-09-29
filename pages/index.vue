<template>
  <LMap :zoom="13" ref="map" :center="initialPosition" style="height: calc(100vh - 72.8px); width: 100%">
    <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <LMarker @click="getRouteDetails(route)" v-for="route in routes" :lat-lng="[route?.lat, route?.lng]"></LMarker>
    <LControlZoom position="bottomright" />
  </LMap>
  <LeftPanel @close="detailsVisible = false" :visible="detailsVisible">
    <div class="px-6 text-[#19191B] overflow-auto">
      <div class="text-2xl font-bold text-brush">
        {{ details.title }}
      </div>
      <div class="mt-6 flex gap-6 font-bold">
        <div>Długość: {{ details.distance }}km</div>
        <div>Trudność: <span v-for="i in details.difficulty">*</span></div>
      </div>
      <div class="mt-6">
        {{ details.description }}
      </div>
      <div class="mt-5 font-bold">
        Trasa
      </div>
      <div class="mt-5 rounded overflow-hidden">
        <LMap :zoom="13" :options="mapOptions" :center="[details.points[0].lat, details.points[0].lng]"
          style="height: 250px; width: 100%">
          <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <LMarker v-for="point in details.points" :lat-lng="[point?.lat, point?.lng]"></LMarker>
        </LMap>
      </div>
    </div>
  </LeftPanel>
</template>

<script setup>
import { LControlZoom } from '@vue-leaflet/vue-leaflet';
import { onMounted } from 'vue';

const initialPosition = ref([0, 0]);
const detailsVisible = ref(false);
const details = ref({});
const map = ref(null);
const center = [51.505, -0.09];
const zoom = 13;

const mapOptions = ref({
  dragging: true,
  scrollWheelZoom: true,
  doubleClickZoom: true,
  touchZoom: true,
  keyboard: true,
});

const routes = ref([]);

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

function getRouteDetails(route) {
  details.value = route;
  detailsVisible.value = true;
  console.log(details);
}

function geoSuccess(position) {
  initialPosition.value = [position.coords.latitude, position.coords.longitude]
}

function geoFail(err) {
  alert(err.message);
}

onMounted(async () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoFail)
  }

  const response = await GqlGetRoutes();
  console.log(response);
  routes.value = response.routes;

  console.log(map.value)

  // L.Routing.control({
  //   waypoints: [
  //       L.latLng(57.74, 11.94),
  //       L.latLng(57.6792, 11.949)
  //   ]
  // }).addTo(map);
})
</script>

<style>
/* Add any additional styles if needed */
</style>
