<template>
    <div class="fixed inset-0 flex items-center justify-center bg-[#F5F7FA] bg-opacity-70">
      <div class="bg-white p-4 rounded-lg shadow-lg w-1/3">
        <div v-if="progress < 100" class="flex justify-between items-center mb-2">
          <h3 class="text-xl">Downloading {{ type }}</h3>
          <span class="text-xl">{{ progress }}%</span>
        </div>
        <div v-else class="flex justify-between items-center mb-2">
          <h3 class="text-xl">Download {{ type }} Berhasil</h3>
        </div>
        <div v-if="progress < 100" class="w-full bg-gray-200 rounded-full h-4">
          <div class="bg-blue-500 h-4 rounded-full" :style="{ width: progress + '%' }"></div>
        </div>
        <div class="mt-4 text-right">
          <button @click="closePopup" class="bg-red-500 text-white px-4 py-2 rounded-md">Close</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      type: String,
    },
    data() {
      return {
        progress: 0,
      }
    },
    methods: {
      startDownload() {
        let interval = setInterval(() => {
          this.progress += 20;
          if (this.progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              this.closePopup();
            }, 2000);
          }
        }, 500);
      },
      closePopup() {
        this.$emit('close');
      },
    },
    mounted() {
      this.startDownload();
    }
  }
  </script>
  
  <style scoped>
  .fixed {
    position: fixed;
  }
  </style>
  