import { defineNuxtPlugin } from '#app'
import * as VueLeaflet from '@vue-leaflet/vue-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default icon images for leaflet markers
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: import('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: import('leaflet/dist/images/marker-icon.png'),
  shadowUrl: import('leaflet/dist/images/marker-shadow.png')
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('LMap', VueLeaflet.LMap)
  nuxtApp.vueApp.component('LTileLayer', VueLeaflet.LTileLayer)
  nuxtApp.vueApp.component('LMarker', VueLeaflet.LMarker)
  nuxtApp.vueApp.component('LControlZoom', VueLeaflet.LControlZoom);
})