<template>
    <div class="w-full h-96">
      <GMapMap
        :center="{ lat: -6.1751, lng: 106.8650 }"
        :zoom="12"
        style="width: 100%; height: 100%"
      >
        <GMapMarker
          :position="{ lat: -6.1751, lng: 106.8650 }"
        />
      </GMapMap>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GoogleMap',
  }
  </script>
  