<script>
import FooterBar from "@/components/FooterBar.vue";
import NavBar from "@/components/NavBar.vue";
import axios from 'axios';
import { onMounted, reactive } from 'vue';

export default {
  name: 'PutusanPenting',
  components: {
    NavBar,
    FooterBar
  },
  setup() {
    const state = reactive({
      rooms: [],
      isLoading: true, // Loading state
      error: null, // Error state
      progress: 0 // Progress state
    });

    onMounted(async () => {
      const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=rKRJJY6SBZIle_bNxvFwcLZZeL01bW8IbF6U7DfOkSsAAbcYfuImTxSTV49jt5a5r-3nWAdXUg8fVtsrK80o_cHnDSSLVJfcm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFbZOPdJNd0Sfm3Xvw--4enrvABcV9HHjPNMShBm0GAgdi7y-9NuW2SypvfnIrU3owJyiaZuXiQgSPiotnGeGRBPW4AB04xCXw&lib=MfpHo1ZqILUJLrMlnooR57QsOTUkVJA1d';
      try {
        // Start progress interval
        const progressInterval = setInterval(() => {
          if (state.progress < 90) {
            state.progress += 10;
          }
        }, 500); // Increase progress every 500ms

        const response = await axios.get(url);
        state.rooms = response.data;

        // Wait until progress reaches 100%
        clearInterval(progressInterval);
        if (state.progress < 100) {
          const incrementProgress = setInterval(() => {
            state.progress += 10;
            if (state.progress >= 100) {
              clearInterval(incrementProgress);
              state.isLoading = false; // Set loading state to false when progress reaches 100%
            }
          }, 50);
        } else {
          state.isLoading = false; // Set loading state to false when progress is already 100%
        }
      } catch (error) {
        console.error(error);
        state.error = 'Failed to load data'; // Set error state
        state.isLoading = false; // Stop loading state on error
      }
    });

    return {
      state
    };
  },
  data() {
    return {
      page: 1,
      totalPages: 25,  // Assuming there are 25 pages
      items: [
        {
          title: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          title: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },    
        {
          title: 'Link 2',
          disabled: false,
          href: 'breadcrumbs_link_2',
        },
        {
          title: 'Link 3',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
      directories: ["Direktori 1", "Direktori 2", "Direktori 3"],
      courts: ["Peradilan 1", "Peradilan 2", "Peradilan 3"],
      years: ["2021", "2022", "2023", "2024"]
    };
  },
  computed: {
    paginationRange() {
      const current = this.page;
      const last = this.totalPages;
      const delta = 2; // Number of pages to display around the current page
      const left = current - delta;
      const right = current + delta;
      const range = [];

      range.push(1);

      if (left > 2) {
        range.push('...');
      }

      for (let i = Math.max(2, left); i <= Math.min(last - 1, right); i++) {
        range.push(i);
      }

      if (right < last - 1) {
        range.push('...');
      }

      range.push(last);

      return range;
    }
  },
  methods: {
    goToPage(page) {
      if (page !== '...') {
        this.page = page;
      }
    },
    prevPage() {
      if (this.page > 1) {
        this.page--;
      }
    },
    nextPage() {
      if (this.page < this.totalPages) {
        this.page++;
      }
    }
  }
}
</script>

<template>
  <div>
    <NavBar />
    <v-container>
      <!-- Breadcrumbs Section -->
      <v-breadcrumbs :items="items" item-class="breadcrumb-item">
        <template v-slot:divider>
          <v-icon class="text-[#8e4202]" icon="mdi-chevron-right"></v-icon>
        </template>
        <template v-slot:prepend>
          <v-icon class="text-[#8e4202]">mdi-home</v-icon>
        </template>
      </v-breadcrumbs>

      <!-- Title Section -->
      <h1 class="text-2xl font-bold mb-4">Putusan</h1>
      <hr class="border-b-2 border-gray-800 mb-4">
      <p class="mb-8">
        Putusan merupakan suatu pernyataan hakim sebagai pejabat negara yang diucapkan di muka persidangan dengan tujuan untuk mengakhiri atau menyelesaikan suatu perkara atau sengketa antara para pihak yang saling berkepentingan
      </p>

      <!-- Loading Indicator -->
      <div v-if="state.isLoading" class="flex flex-col items-center">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
        <p class="mt-2">Loading... {{ state.progress >= 0 ? state.progress + '%' : '' }}</p>
      </div>
      
      <!-- Error Message -->
      <p v-if="state.error" class="text-red-600">{{ state.error }}</p>

      <!-- Content Section -->
      <div v-if="!state.isLoading && !state.error">
        <div class="flex flex-row items-baseline space-x-32">
          <v-card-title class="text-3xl">Filter</v-card-title>
          <p class="text-gray-700 mb-4">Menampilkan 1 - 10 dari 234 Putusan</p>
        </div>
        <v-row>
          <v-col cols="3">
            <v-card>
              <v-card-text>
                <h2 class="mb-1 text-[17px] font-bold">Kata kunci</h2>
                <v-text-field class="mb-[-15px]" label="Masukkan Kata Kunci" />

                <h2 class="mb-2 text-[17px] font-bold">Direktori</h2>
                <v-combobox class="mb-[-15px] rounded-full" clearable label="Direktori"
                  :items="directories"
                  variant="outlined"
                ></v-combobox>

                <h2 class="mb-2 text-[17px] font-bold">Pengadilan</h2>
                <v-combobox class="mb-[-15px]" clearable label="Pengadilan"
                  :items="courts"
                  variant="outlined"
                ></v-combobox>
                <h2 class="mb-2 text-[17px] font-bold">Daerah</h2>
                <v-combobox class="mb-[-15px]" clearable label="Daerah"
                  :items="directories"
                  variant="outlined"
                ></v-combobox>
                <h2 class="mb-2 text-[17px] font-bold">Klasifikasi</h2>
                <v-combobox class="mb-[-15px]" clearable label="Klasifikasi"
                  :items="directories"
                  variant="outlined"
                ></v-combobox>
                <h2 class="mb-2 text-[17px] font-bold">Amar</h2>
                <v-combobox class="mb-[-15px]" clearable label="Amar"
                  :items="directories"
                  variant="outlined"
                ></v-combobox>
                <h2 class="mb-2 text-[17px] font-bold">Tingkat Proses</h2>
                <v-combobox class="mb-[-15px]" clearable label="Tingkat Proses"
                  :items="directories"
                  variant="outlined"
                ></v-combobox>

                <h2 class="mb-2 text-[17px] font-bold">Tahun</h2>
                <v-row>
                  <v-col cols="4">
                    <h5 class="font-bold">Putus</h5>
                    <v-text-field />
                  </v-col>
                  <v-col cols="4">
                    <h5 class="font-bold">Register</h5>
                    <v-text-field />
                  </v-col>
                  <v-col cols="4">
                    <h5 class="font-bold">Putus</h5>
                    <v-text-field  />
                  </v-col>
                </v-row>
                <div class="flex justify-center mt-4">
                  <v-btn color="brown">Terapkan</v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="9">
            <v-list class="mt-[-11px]">
              <v-list-item v-for="item in state.rooms" :key="item.id" class="mb-4">
                <v-card class="pa-4 rounded-lg shadow-lg">
                  <div class="flex items-center mb-2">
                    <v-icon color="green">mdi-check-circle</v-icon>
                    <span class="ml-2 text-green-600">Berkekuatan Hukum Tetap</span>
                  </div>
                  <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
                  <p class="mb-2">{{ item.case }}</p>
                  <div class="mt-9">
                    <div class="flex flex-col">
                      <hr class="border-b-2 border-gray-500 mb-4">
                      <div class="flex justify-between items-center text-gray-600">
                        <div>
                          <span class="font-bold text-[#8e4202]">Putus:</span> {{ item.desicionDate }}
                          <span class="mx-2">|</span>
                          <span class="font-bold text-[#8e4202]">Upload:</span> {{ item.uploadData }}
                        </div>
                        <div class="flex items-center">
                          <v-icon>mdi-eye</v-icon>
                          <span class="ml-1">{{ item.views }}</span>
                          <v-icon class="ml-4">mdi-download</v-icon>
                          <span class="ml-1">{{ item.downloads }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-list-item>
            </v-list>

            <!-- Pagination Section -->
            <div class="flex justify-center mt-4">
              <nav class="flex items-center space-x-2">
                <button @click="goToPage(1)" :disabled="page === 1" class="pagination-button">« Awal</button>
                <button @click="prevPage" :disabled="page === 1" class="pagination-button">‹ Kembali</button>
                <span v-for="n in paginationRange" :key="n">
                  <button 
                    v-if="n !== '...'" 
                    @click="goToPage(n)" 
                    :class="['pagination-button', { 'bg-brown-500 text-white': page === n }]"
                  >{{ n }}</button>
                  <span v-else class="pagination-dots">...</span>
                </span>
                <button @click="nextPage" :disabled="page === totalPages" class="pagination-button">Selanjutnya ›</button>
                <button @click="goToPage(totalPages)" :disabled="page === totalPages" class="pagination-button">Akhir »</button>
              </nav>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <FooterBar />
  </div>
</template>

<style scoped>
.breadcrumb-item {
  color: #8e4202;
}
.bg-brown-500 {
  background-color: #8e4202 !important;
}
.text-white {
  color: white !important;
}
.pagination-button {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  background-color: white;
  cursor: pointer;
}
.pagination-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.pagination-dots {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  background-color: white;
  cursor: not-allowed;
}
</style>
