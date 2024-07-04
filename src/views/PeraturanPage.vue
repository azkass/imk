<template>
  <NavBar />
    <div class="bg-[#F5F7FA]">
      <!-- <v-container> -->
        <div class="px-16 pb-16">
        <!-- Breadcrumbs Section -->
        <v-breadcrumbs :items="items" item-class="breadcrumb-item" class="px-0 sm:my-4 md:my-0 breadcrumbs text-[#8e4202]">
          <template v-slot:divider>
            <v-icon class="" icon="mdi-chevron-right"></v-icon>
          </template>
          <template v-slot:prepend>
            <a href="/">
              <v-icon class="text-[#8e4202]">mdi-home</v-icon>
            </a>
          </template>
        </v-breadcrumbs>
  
        <!-- Title Section -->
        <h1 class="text-2xl md:text-3xl font-bold mb-4">Peraturan</h1>
        <hr class="border-b-2 border-gray-800 mb-4">
        <p class="mb-8 text-sm md:text-base">
          Peraturan Perundang-undangan dalam konteks direktori Mahkamah Agung (MA) adalah kumpulan dokumen hukum dari berbagai lembaga berwenang yang berfungsi sebagai panduan dan dasar hukum dalam proses peradilan serta pelaksanaan hukum di Indonesia.
        </p>
  
        <!-- Loading Indicator -->
        <div v-if="state.isLoading" class="flex flex-col items-center">
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
          <p class="mt-2 text-sm md:text-base">Loading... {{ state.progress >= 0 ? state.progress + '%' : '' }}</p>
        </div>
        
        <!-- Error Message -->
        <p v-if="state.error" class="text-red-600">{{ state.error }}</p>
  
        <!-- Content Section -->
        <div v-if="!state.isLoading && !state.error">
          <!-- <div class="flex-row items-baseline mb-0 hidden md:flex">
            <div class="mb-0">
              <v-card-title class="text-2xl">Filter</v-card-title>
            </div>
            <div class="md:ml-1 sm:ml-12 xl:ml-0 2xl:ml-28 mb-0">
              <p class="text-gray-700 mb-4">Menampilkan {{ (page - 1) * itemsPerPage + 1 }} - {{ Math.min(page * itemsPerPage, state.totalItems) }} dari {{ state.totalItems }} Putusan</p>
            </div>
            <div class="flex justify-end space-x-4 ml-auto mb-0">
              <v-card-title class="text-xl items-center mb-0">Urutkan berdasarkan</v-card-title>
              <v-combobox
                :items="sortOptions"
                label="Urutkan"
                variant="outlined"
                class="w-48 items-end mb-0"
                v-model="selectedSort"
                @change="applyFilters"
              ></v-combobox>
              <v-combobox
                :items="directionOptions"
                label="Arah"
                variant="outlined"
                class="w-32 items-end border-red-500 mb-0"
                v-model="selectedDirection"
                @change="applyFilters"
              ></v-combobox>
            </div>
          </div> -->
          <!-- Filter Buttons for Mobile -->
          <div class="flex md:hidden justify-center mb-4 space-x-6">
            <v-btn @click="showSortFilter = true">Urutkan</v-btn>
            <v-btn @click="showCategoryFilter = true">Filter</v-btn>
          </div>
  
          <v-row justify="center mt-[-23px]">
            <!-- Filters for Desktop -->
            <v-col cols="3" class="hidden md:block">
              <div class="mb-5">
              <v-card-title class="text-2xl">Filter</v-card-title>
            </div>
              <v-card class="pa-4 rounded-2xl shadow-2xl">
                <h2 class="mb-1 text-[17px] font-bold">Kata Kunci</h2>
                <v-text-field class="mb-4" label="Masukkan Kata Kunci" v-model="keyword" />
  
                <h2 class="mb-2 text-[17px] font-bold">Direktori</h2>
                <v-combobox :items="directories" label="Pilih Direktori" variant="outlined" v-model="selectedDirectory"></v-combobox>
  
                <h2 class="mb-2 text-[17px] font-bold">Klasifikasi</h2>
                <v-combobox :items="classifications" label="Pilih Klasifikasi Rumusan Rakernas" variant="outlined" v-model="selectedClassification"></v-combobox>
  
                <h2 class="mb-2 text-[17px] font-bold">Tahun Dokumen</h2>
                <v-range-slider v-model="tempTahunPenerbitan" :max="2024" :min="1984" :step="1" :thumb-label="computedThumbLabel"
      @start="showLabel = true"
      @end="showLabel = false"
      hide-details track-color="brown" thumb-color="brown"></v-range-slider>
                <div class="range-inputs">
                  <v-text-field v-model="tempTahunPenerbitan[0]" density="compact" style="width: 70px; text-align: center;" type="number" variant="outlined" hide-details single-line></v-text-field>
                  <div style="flex-grow: 1"></div>
                  <v-text-field v-model="tempTahunPenerbitan[1]" density="compact" style="width: 70px; text-align: center;" type="number" variant="outlined" hide-details single-line></v-text-field>
                </div>
  
                <div class="flex justify-center mt-4">
                  <v-btn color="#8e4202" @click="applyFiltersAndNavigate">Terapkan</v-btn>
                </div>
              </v-card>
            </v-col>
            
            <!-- List of Items -->
            <v-col cols="12" md="9">
              <div class="flex-row items-baseline mb-0 hidden md:flex">
              <div class="mb-0 ml-3">
                <p class="text-gray-700 mb-4">Menampilkan {{ (page - 1) * itemsPerPage + 1 }} - {{ Math.min(page * itemsPerPage, state.totalItems) }} dari {{ state.totalItems }} Putusan</p>
              </div>
              <div class="flex justify-end space-x-4 ml-auto mb-0">
                <v-card-title class="text-xl items-center mb-0">Urutkan berdasarkan</v-card-title>
                <v-combobox
                  :items="sortOptions"
                  label="Urutkan"
                  variant="outlined"
                  class="w-48 items-end mb-0"
                  v-model="selectedSort"
                  @change="applyFilters"
                ></v-combobox>
                <v-combobox
                  :items="directionOptions"
                  label="Arah"
                  variant="outlined"
                  class="w-32 items-end border-red-500 mb-0"
                  v-model="selectedDirection"
                  @change="applyFilters"
                ></v-combobox>
              </div>
            </div>
            <div v-if="state.rooms.length === 0" class="flex justify-center mt-4">
              
              
              <div class="flex justify-center items-center mt-40">
                <div class="text-center">
                  <div class="flex justify-center items-center mb-2">
                    <img class="h-20 block" src="../assets/nodata.png" alt="data tidak ditemukan">
                  </div>
                  <h4 class="text-2xl font-bold">Data tidak ditemukan!</h4>
                  <p class="text-gray-500 w-[380px]">
                    <span class="text-gray-700 font-semibold">Maaf!</span>
                    Kami tidak menemukan apa pun yang cocok dengan kata kunci Anda. Coba ubah kata kunci Anda untuk hasil yang lebih baik.
                  </p>
                </div>
              </div>
              <!-- <v-alert type="warning" border="left" elevation="2" prominent>
                Tidak ada data ditemukan berdasarkan filter yang diterapkan.
              </v-alert> -->
            </div>
            <div v-else class="">
              <v-list class="bg-[#F5F7FA] w-full">
                <v-list-item v-for="item in state.rooms" :key="item.id" class="mb-4">
                  <a href="/isi-peraturan">
                  <v-card class="pa-4 rounded-2xl shadow-2xl w-full">
                    <div>
                      <div class="flex items-center mb-2 justify-between">
                        <div class="flex items-center text-[#8e4202]">
                          <v-icon icon="mdi-folder-open"></v-icon>
                          <span class="md:ml-0 sm:ml-0 sm:w-[18px] md:w-[254px] font-bold">Instruksi Presiden</span>
                        </div>
                        <div class="flex justify-end">
                          <div class="bg-[#8e4202] sm:p-2 md:pr-3 md:pl-3 md:py-1 rounded-lg text-white text-center">
                            {{ item.jenisPutusan }}
                          </div>
                        </div>
                      </div>
                      <h3 class="text-xl font-bold mb-2 hover:underline">{{ item.title }}</h3>
                      <p class="mb-4 text-gray-500"><span class="text-black">Tentang: </span>{{ item.case }}</p>
                      <div class="mt-4">
                        <div class="flex flex-col">
                          <hr class="border-b-2 border-gray-500 mb-4">
                          <div class="flex justify-end items-center text-gray-600">
                            <div class="flex items-center">
                              <v-icon>mdi-eye</v-icon>
                              <span class="ml-1">{{ item.views }}</span>
                              <v-icon class="ml-4">mdi-download</v-icon>
                              <span class="ml-1">{{ item.downloads }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- <div v-else>
                      <div class="flex justify-between items-center mb-2">
                        <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
                        <div class="bg-[#8e4202] sm:p-0 pr-3 pl-3 py-1 rounded-xl text-white text-center">
                          {{ item.jenisPutusan }}
                        </div>
                      </div>
                      <p class="mb-2">{{ item.case }}</p>
                      <div class="mt-4">
                        <div class="flex flex-col">
                          <hr class="border-b-2 border-gray-500 mb-4">
                          <div class="flex justify-end items-center text-gray-600">
                            <div class="flex items-center">
                              <v-icon>mdi-eye</v-icon>
                              <span class="ml-1">{{ item.views }}</span>
                              <v-icon class="ml-4">mdi-download</v-icon>
                              <span class="ml-1">{{ item.downloads }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> -->
                  </v-card>
                </a>
                </v-list-item>
              </v-list>
            </div>
  
              <!-- Pagination -->
              <div class="flex justify-center mt-4" v-if="state.totalPages > 1">
                <nav class="flex items-center space-x-2">
                  <button
                    @click="goToPage(1)"
                    :disabled="page === 1"
                    class="pagination-button"
                  >
                    « Awal
                  </button>
                  <button
                    @click="prevPage"
                    :disabled="page === 1"
                    class="pagination-button"
                  >
                    ‹ Kembali
                  </button>
                  <span v-for="n in paginationRange" :key="n">
                    <button
                      v-if="n !== '...'"
                      @click="goToPage(n)"
                      :class="['pagination-button', { 'bg-brown-500 text-white': page === n }]"
                    >
                      {{ n }}
                    </button>
                    <span v-else class="pagination-dots">...</span>
                  </span>
                  <button
                    @click="nextPage"
                    :disabled="page === state.totalPages"
                    class="pagination-button"
                  >
                    Selanjutnya ›
                  </button>
                  <button
                    @click="goToPage(state.totalPages)"
                    :disabled="page === state.totalPages"
                    class="pagination-button"
                  >
                    Akhir »
                  </button>
                </nav>
              </div>
            </v-col>
          </v-row>
        </div>
      <div>
          
        </div>
      </div>
  
      <!-- Bottom Sheet for Sort Filter (Mobile) -->
      <v-bottom-sheet v-model="showSortFilter" class="d-md-none">
        <v-card>
          <v-card-title class="text-xl flex justify-between items-center">
            Urutkan berdasarkan
            <v-icon @click="showSortFilter = false" class="cursor-pointer">mdi-close</v-icon>
          </v-card-title>
          <v-card-text>
            <v-combobox :items="sortOptions" label="Urutkan" variant="outlined" class="w-full" v-model="selectedSort" @change="applyFilters"></v-combobox>
            <v-combobox :items="directionOptions" label="Arah" variant="outlined" class="w-full mt-4" v-model="selectedDirection" @change="applyFilters"></v-combobox>
            <div class="flex justify-center mt-4">
              <v-btn color="#8e4202" @click="showSortFilter = false">Terapkan</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-bottom-sheet>
  
      <!-- Dialog for Sort Filter (Web) -->
      <v-dialog v-model="showSortFilter" max-width="600px" class="d-none d-md-block">
        <v-card>
          <v-card-title class="text-xl flex justify-between items-center">
            Urutkan berdasarkan
            <v-icon @click="showSortFilter = false" class="cursor-pointer">mdi-close</v-icon>
          </v-card-title>
          <v-card-text>
            <v-combobox :items="sortOptions" label="Urutkan" variant="outlined" class="w-full" v-model="selectedSort" @change="applyFilters"></v-combobox>
            <v-combobox :items="directionOptions" label="Arah" variant="outlined" class="w-full mt-4" v-model="selectedDirection" @change="applyFilters"></v-combobox>
            <div class="flex justify-center mt-4">
              <v-btn color="#8e4202" @click="showSortFilter = false">Terapkan</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
  
      <!-- Bottom Sheet for Category Filter (Mobile) -->
      <v-bottom-sheet v-model="showCategoryFilter" class="d-md-none">
        <v-card>
          <v-card-title class="text-xl flex justify-between items-center">
            Filter Kategori
            <v-icon @click="showCategoryFilter = false" class="cursor-pointer">mdi-close</v-icon>
          </v-card-title>
          <v-card-text>
            <h2 class="mb-1 text-[17px] font-bold">Kata Kunci</h2>
            <v-text-field class="mb-4" label="Masukkan Kata Kunci" v-model="keyword" />
  
            <h2 class="mb-2 text-[17px] font-bold">Direktori</h2>
            <v-combobox :items="directories" label="Pilih Direktori" variant="outlined" v-model="selectedDirectory"></v-combobox>
  
            <h2 class="mb-2 text-[17px] font-bold">Klasifikasi</h2>
            <v-combobox :items="classifications" label="Pilih Klasifikasi Rumusan Rakernas" variant="outlined" v-model="selectedClassification"></v-combobox>
  
            <h2 class="mb-2 text-[17px] font-bold">Tahun Penerbitan</h2>
            <v-range-slider v-model="tempTahunPenerbitan" :max="2024" :min="1984" :step="1" thumb-label="always" hide-details track-color="brown" thumb-color="brown"></v-range-slider>
            <div class="range-inputs">
              <v-text-field v-model="tempTahunPenerbitan[0]" density="compact" style="width: 70px; text-align: center;" type="number" variant="outlined" hide-details single-line></v-text-field>
              <div style="flex-grow: 1"></div>
              <v-text-field v-model="tempTahunPenerbitan[1]" density="compact" style="width: 70px; text-align: center;" type="number" variant="outlined" hide-details single-line></v-text-field>
            </div>
  
            <div class="flex justify-center mt-4">
              <v-btn color="#8e4202" @click="applyFiltersAndNavigate">Terapkan</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-bottom-sheet>
  
      <!-- Dialog for Category Filter (Web) -->
      <v-dialog v-model="showCategoryFilter" max-width="600px" class="d-none d-md-block">
        <v-card>
          <v-card-title class="text-xl flex justify-between items-center">
            Filter Kategori
            <v-icon @click="showCategoryFilter = false" class="cursor-pointer">mdi-close</v-icon>
          </v-card-title>
          <v-card-text>
            <h2 class="mb-1 text-[17px] font-bold">Kata Kunci</h2>
            <v-text-field class="mb-4" label="Masukkan Kata Kunci" v-model="keyword" />
  
            <h2 class="mb-2 text-[17px] font-bold">Direktori</h2>
            <v-combobox :items="directories" label="Pilih Direktori" variant="outlined" v-model="selectedDirectory"></v-combobox>
  
            <h2 class="mb-2 text-[17px] font-bold">Klasifikasi</h2>
            <v-combobox :items="classifications" label="Pilih Klasifikasi Rumusan Rakernas" variant="outlined" v-model="selectedClassification"></v-combobox>
  
            <h2 class="mb-2 text-[17px] font-bold">Tahun Dokumen</h2>
            <v-range-slider v-model="tempTahunPenerbitan" :max="2024" :min="1984" :step="1" thumb-label="always" hide-details track-color="brown" thumb-color="brown"></v-range-slider>
            <div class="range-inputs">
              <v-text-field v-model="tempTahunPenerbitan[0]" density="compact" style="width: 70px; text-align: center;" type="number" variant="outlined" hide-details single-line></v-text-field>
              <div style="flex-grow: 1"></div>
              <v-text-field v-model="tempTahunPenerbitan[1]" density="compact" style="width: 70px; text-align: center;" type="number" variant="outlined" hide-details single-line></v-text-field>
            </div>
  
            <div class="flex justify-center mt-4">
              <v-btn color="#8e4202" @click="applyFiltersAndNavigate">Terapkan</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
  
      <FooterBar />
    </div>
  </template>
  
  <script>
  import FooterBar from "@/components/FooterBar.vue";
  import NavBar from "@/components/NavBar.vue";
  import { onMounted, reactive, ref, watch } from "vue";
  import { useRouter } from "vue-router";
  
  export default {
    name: "PutusanPenting",
    components: {
      NavBar,
      FooterBar,
    },
    setup() {
      const router = useRouter();
      const state = reactive({
        rooms: [],
        isLoading: true,
        error: null,
        progress: 0,
        totalPages: 1,
        totalItems: 0,
      });
  
      const showSortFilter = ref(false);
      const showCategoryFilter = ref(false);
  
      const selectedSort = ref(null);
      const selectedDirection = ref(null);
      const keyword = ref("");
      const selectedDirectory = ref("Semua");
      const selectedClassification = ref("Semua");
      const tahunPenerbitan = ref([1984, 2024]);
      const tempTahunPenerbitan = ref([1984, 2024]);
      const page = ref(1);
      const itemsPerPage = 10;
  
        
    const data = [
          {
            id: 1,
            title: "Instruksi Presiden Nomor 17/DSN-MUI/IX/2000 Tahun 2020",
            case: "Saksi Atas Nasabah Mampu Yang Menunda-nunda Pembayaran",
            desicionDate: "17-05-2024",
            registerDate: "01-05-2024",
            uploadData: "30-05-2024",
            views: 1200,
            downloads: 440,
            direktori: "Putusan",
            jenisPutusan: "Peraturan",
            pengadilan: "Mahkamah Agung",
            lembagaPengadilan: "PA Jakarta Pusat",
            klasifikasi: "Pembatalan Perjanjian",
            amar: "Terbukti",
            tingkatProses: "Kasasi",
            tahunPenerbitan:"2021"
          },
          {
            id: 2,
            title: "Instruksi Presiden Nomor 17/DSN-MUI/IX/2000 Tahun 2020",
            case: "Saksi Atas Nasabah Mampu Yang Menunda-nunda Pembayaran",
            desicionDate: "17-05-2024",
            registerDate: "01-05-2024",
            uploadData: "30-05-2024",
            views: 1200,
            downloads: 440,
            direktori: "Putusan",
            jenisPutusan: "Peraturan",
            pengadilan: "Mahkamah Agung",
            lembagaPengadilan: "PA Jakarta Pusat",
            klasifikasi: "Pembatalan Perjanjian",
            amar: "Terbukti",
            tingkatProses: "Kasasi",
            tahunPenerbitan:"2021"
          },
          {
            id: 3,
            title: "Instruksi Presiden Nomor 17/DSN-MUI/IX/2000 Tahun 2020",
            case: "Saksi Atas Nasabah Mampu Yang Menunda-nunda Pembayaran",
            desicionDate: "17-05-2024",
            registerDate: "01-05-2024",
            uploadData: "30-05-2024",
            views: 1200,
            downloads: 440,
            direktori: "Putusan",
            jenisPutusan: "Peraturan",
            pengadilan: "Mahkamah Agung",
            lembagaPengadilan: "PA Jakarta Pusat",
            klasifikasi: "Pembatalan Perjanjian",
            amar: "Terbukti",
            tingkatProses: "Kasasi",
            tahunPenerbitan:"2021"
          },
          {
            id: 4,
            title: "Instruksi Presiden Nomor 17/DSN-MUI/IX/2000 Tahun 2020",
            case: "Saksi Atas Nasabah Mampu Yang Menunda-nunda Pembayaran",
            desicionDate: "17-05-2024",
            registerDate: "01-05-2024",
            uploadData: "30-05-2024",
            views: 1200,
            downloads: 440,
            direktori: "Putusan",
            jenisPutusan: "Peraturan",
            pengadilan: "Mahkamah Agung",
            lembagaPengadilan: "PA Jakarta Pusat",
            klasifikasi: "Pembatalan Perjanjian",
            amar: "Terbukti",
            tingkatProses: "Kasasi",
            tahunPenerbitan:"2021"
          },
          {
            id: 5,
            title: "Instruksi Presiden Nomor 17/DSN-MUI/IX/2000 Tahun 2020",
            case: "Saksi Atas Nasabah Mampu Yang Menunda-nunda Pembayaran",
            desicionDate: "17-05-2024",
            registerDate: "01-05-2024",
            uploadData: "30-05-2024",
            views: 1200,
            downloads: 440,
            direktori: "Putusan",
            jenisPutusan: "Peraturan",
            pengadilan: "Mahkamah Agung",
            lembagaPengadilan: "PA Jakarta Pusat",
            klasifikasi: "Pembatalan Perjanjian",
            amar: "Terbukti",
            tingkatProses: "Kasasi",
            tahunPenerbitan:"2021"
          },
          {
            id: 6,
            title: "Instruksi Presiden Nomor 17/DSN-MUI/IX/2000 Tahun 2020",
            case: "Saksi Atas Nasabah Mampu Yang Menunda-nunda Pembayaran",
            desicionDate: "17-05-2024",
            registerDate: "01-05-2024",
            uploadData: "30-05-2024",
            views: 1200,
            downloads: 440,
            direktori: "Putusan",
            jenisPutusan: "Peraturan",
            pengadilan: "Mahkamah Agung",
            lembagaPengadilan: "PA Jakarta Pusat",
            klasifikasi: "Pembatalan Perjanjian",
            amar: "Terbukti",
            tingkatProses: "Kasasi",
            tahunPenerbitan:"2021"
          },
          {
            id: 7,
            title: "Instruksi Presiden Nomor 17/DSN-MUI/IX/2000 Tahun 2020",
            case: "Saksi Atas Nasabah Mampu Yang Menunda-nunda Pembayaran",
            desicionDate: "17-05-2024",
            registerDate: "01-05-2024",
            uploadData: "30-05-2024",
            views: 1200,
            downloads: 440,
            direktori: "Putusan",
            jenisPutusan: "Peraturan",
            pengadilan: "Mahkamah Agung",
            lembagaPengadilan: "PA Jakarta Pusat",
            klasifikasi: "Pembatalan Perjanjian",
            amar: "Terbukti",
            tingkatProses: "Kasasi",
            tahunPenerbitan:"2021"
          },
          {
            id: 8,
            title: "Instruksi Presiden Nomor 17/DSN-MUI/IX/2000 Tahun 2020",
            case: "Saksi Atas Nasabah Mampu Yang Menunda-nunda Pembayaran",
            desicionDate: "17-05-2024",
            registerDate: "01-05-2024",
            uploadData: "30-05-2024",
            views: 1200,
            downloads: 440,
            direktori: "Putusan",
            jenisPutusan: "Peraturan",
            pengadilan: "Mahkamah Agung",
            lembagaPengadilan: "PA Jakarta Pusat",
            klasifikasi: "Pembatalan Perjanjian",
            amar: "Terbukti",
            tingkatProses: "Kasasi",
            tahunPenerbitan:"2021"
          },
          {
            id: 9,
            title: "Instruksi Presiden Nomor 17/DSN-MUI/IX/2000 Tahun 2020",
            case: "Saksi Atas Nasabah Mampu Yang Menunda-nunda Pembayaran",
            desicionDate: "17-05-2024",
            registerDate: "01-05-2024",
            uploadData: "30-05-2024",
            views: 1200,
            downloads: 440,
            direktori: "Putusan",
            jenisPutusan: "Peraturan",
            pengadilan: "Mahkamah Agung",
            lembagaPengadilan: "PA Jakarta Pusat",
            klasifikasi: "Pembatalan Perjanjian",
            amar: "Terbukti",
            tingkatProses: "Kasasi",
            tahunPenerbitan:"2021"
          },
          {
            id: 10,
            title: "Instruksi Presiden Nomor 17/DSN-MUI/IX/2000 Tahun 2020",
            case: "Saksi Atas Nasabah Mampu Yang Menunda-nunda Pembayaran",
            desicionDate: "17-05-2024",
            registerDate: "01-05-2024",
            uploadData: "30-05-2024",
            views: 1200,
            downloads: 440,
            direktori: "Putusan",
            jenisPutusan: "Peraturan",
            pengadilan: "Mahkamah Agung",
            lembagaPengadilan: "PA Jakarta Pusat",
            klasifikasi: "Pembatalan Perjanjian",
            amar: "Terbukti",
            tingkatProses: "Kasasi",
            tahunPenerbitan:"2021"
          },
          {
            id: 11,
            title: "Instruksi Presiden Nomor 17/DSN-MUI/IX/2000 Tahun 2020",
            case: "Saksi Atas Nasabah Mampu Yang Menunda-nunda Pembayaran",
            desicionDate: "17-05-2024",
            registerDate: "01-05-2024",
            uploadData: "30-05-2024",
            views: 1200,
            downloads: 440,
            direktori: "Putusan",
            jenisPutusan: "Peraturan",
            pengadilan: "Mahkamah Agung",
            lembagaPengadilan: "PA Jakarta Pusat",
            klasifikasi: "Pembatalan Perjanjian",
            amar: "Terbukti",
            tingkatProses: "Kasasi",
            tahunPenerbitan:"2021"
          },
          {
            id: 12,
            title: "Instruksi Presiden Nomor 17/DSN-MUI/IX/2000 Tahun 2020",
            case: "Saksi Atas Nasabah Mampu Yang Menunda-nunda Pembayaran",
            desicionDate: "17-05-2024",
            registerDate: "01-05-2024",
            uploadData: "30-05-2024",
            views: 1200,
            downloads: 440,
            direktori: "Putusan",
            jenisPutusan: "Peraturan",
            pengadilan: "Mahkamah Agung",
            lembagaPengadilan: "PA Jakarta Pusat",
            klasifikasi: "SEMA",
            amar: "Terbukti",
            tingkatProses: "Kasasi",
            tahunPenerbitan:"2021"
          },
          {
            id: 13,
            title: "Putusan Mahkamah Agung Nomor 246 K/Pdt.Sus-PHI/2024",
            case: "PT PQR",
            desicionDate: "05-10-2024",
            registerDate: "01-10-2024",
            uploadData: "20-10-2024",
            views: 780,
            downloads: 320,
            direktori: "Putusan",
            jenisPutusan: "Putusan Biasa",
            pengadilan: "Pengadilan Agama",
            lembagaPengadilan: "PA Jakarta Selatan",
            klasifikasi: "Perceraian",
            amar: "Terbukti",
            tingkatProses: "Banding",
            tahunPenerbitan:"2021"
          },
          {
            id: 14,
            title: "Putusan Mahkamah Agung Nomor 135 K/Pdt.Sus-PHI/2024",
            case: "PT STU",
            desicionDate: "08-09-2024",
            registerDate: "01-09-2024",
            uploadData: "25-09-2024",
            views: 520,
            downloads: 210,
            direktori: "Rumusan Kamar",
            jenisPutusan: "Putusan Biasa",
            pengadilan: "Pengadilan Pajak",
            lembagaPengadilan: "PA Jakarta Barat",
            klasifikasi: "Pencurian",
            amar: "Tolak",
            tingkatProses: "Banding",
            tahunPenerbitan:"2021"
          },
          {
            id: 15,
            title: "Putusan Mahkamah Agung Nomor 357 K/Pdt.Sus-PHI/2024",
            case: "PT VWX",
            desicionDate: "12-08-2024",
            registerDate: "01-08-2024",
            uploadData: "30-08-2024",
            views: 630,
            downloads: 270,
            direktori: "Restatement",
            jenisPutusan: "Putusan Penting",
            pengadilan: "Pengadilan Militer",
            lembagaPengadilan: "PA Jakarta Timur",
            klasifikasi: "Klausula Baku",
            amar: "Tidak Dapat Diterima",
            tingkatProses: "Banding",
            tahunPenerbitan:"2021"
          },
          {
            id: 16,
            title: "Putusan Mahkamah Agung Nomor 468 K/Pdt.Sus-PHI/2024",
            case: "PT YZA",
            desicionDate: "01-07-2024",
            registerDate: "01-07-2024",
            uploadData: "15-07-2024",
            views: 590,
            downloads: 250,
            direktori: "Rumusan Rakernas",
            jenisPutusan: "Putusan Penting",
            pengadilan: "Pengadilan Agama",
            lembagaPengadilan: "PA Jakarta Utara",
            klasifikasi: "Grosse Akta",
            amar: "Lepas",
            tingkatProses: "Banding",
            tahunPenerbitan:"2021"
          },
          {
            id: 17,
            title: "Putusan Mahkamah Agung Nomor 579 K/Pdt.Sus-PHI/2024",
            case: "PT BCD",
            desicionDate: "20-06-2024",
            registerDate: "01-06-2024",
            uploadData: "05-07-2024",
            views: 700,
            downloads: 280,
            direktori: "Putusan",
            jenisPutusan: "Putusan Biasa",
            pengadilan: "Pengadilan Tata Usaha Negara",
            lembagaPengadilan: "PA Jakarta Timur",
            klasifikasi: "Perdata Agama",
            amar: "Terbukti",
            tingkatProses: "Banding",
            tahunPenerbitan:"2021"
          },
          {
            id: 18,
            title: "Putusan Mahkamah Agung Nomor 680 K/Pdt.Sus-PHI/2024",
            case: "PT EFG",
            desicionDate: "15-05-2021",
            registerDate: "01-05-2024",
            uploadData: "25-05-2024",
            views: 550,
            downloads: 220,
            direktori: "Yurisprudensi",
            jenisPutusan: "Putusan Penting",
            pengadilan: "Pengadilan Umum",
            lembagaPengadilan: "PA Jakarta Selatan",
            klasifikasi: "Perdata",
            amar: "Tolak",
            tingkatProses: "Banding",
            tahunPenerbitan:"2021"
          },
          {
            id: 19,
            title: "Putusan Mahkamah Agung Nomor 791 K/Pdt.Sus-PHI/2024",
            case: "PT HIJ",
            desicionDate: "10-04-2024",
            registerDate: "01-04-2024",
            uploadData: "20-04-2024",
            views: 620,
            downloads: 240,
            direktori: "Putusan penting",
            jenisPutusan: "Putusan Biasa",
            pengadilan: "Pengadilan Pajak",
            lembagaPengadilan: "PA Jakarta Utara",
            klasifikasi: "Narkotika dan Psikotropika",
            amar: "Lepas",
            tingkatProses: "Banding",
            tahunPenerbitan:"2021"
          },
          {
            id: 20,
            title: "Putusan Mahkamah Agung Nomor 902 K/Pdt.Sus-PHI/2024",
            case: "PT KLM",
            desicionDate: "05-03-2024",
            registerDate: "01-03-2024",
            uploadData: "15-03-2024",
            views: 750,
            downloads: 310,
            direktori: "Rumusan Kamar",
            jenisPutusan: "Putusan Penting",
            pengadilan: "Pengadilan Militer",
            lembagaPengadilan: "PA Jakarta Selatan",
            klasifikasi: "Penganiayaan",
            amar: "Terbukti",
            tingkatProses: "Banding",
            tahunPenerbitan:"2021"
          }
        ];
    
        const applyFilters = () => {
        state.isLoading = true;
        state.progress = 0;
  
        tahunPenerbitan.value = [...tempTahunPenerbitan.value];
  
        const params = {
          keyword: keyword.value,
          direktori: selectedDirectory.value,
          klasifikasi: selectedClassification.value,
          tahunPenerbitan: tahunPenerbitan.value,
          sort: selectedSort.value,
          direction: selectedDirection.value,
        };
  
        console.log("Filter params:", params);
  
        try {
          let filteredData = data.filter(item => {
            const tahunPenerbitanValue = parseInt(item.tahunPenerbitan, 10);
  
            return (
              (selectedDirectory.value === "Semua" || !selectedDirectory.value || item.direktori === selectedDirectory.value) &&
              (selectedClassification.value === "Semua" || !selectedClassification.value || item.klasifikasi === selectedClassification.value) &&
              (!keyword.value || item.title.includes(keyword.value) || item.case.includes(keyword.value)) &&
              (tahunPenerbitan.value[0] <= tahunPenerbitanValue && tahunPenerbitanValue <= tahunPenerbitan.value[1])
            );
          });
  
          console.log("Original data length:", data.length);
          console.log("Filtered data length:", filteredData.length);
  
          if (selectedSort.value && selectedSort.value !== "-") {
            filteredData.sort((a, b) => {
              let sortField = "";
              switch (selectedSort.value) {
                case "Tanggal Putusan":
                  sortField = "desicionDate";
                  break;
                case "Total View":
                  sortField = "views";
                  break;
                case "Total Download":
                  sortField = "downloads";
                  break;
                default:
                  sortField = selectedSort.value;
              }
  
              let aValue = a[sortField];
              let bValue = b[sortField];
  
              if (selectedSort.value === "Tanggal Putusan") {
                aValue = new Date(aValue.split('-').reverse().join('-'));
                bValue = new Date(bValue.split('-').reverse().join('-'));
              }
  
              if (selectedDirection.value === "Menaik") {
                return aValue > bValue ? 1 : -1;
              } else {
                return aValue < bValue ? 1 : -1;
              }
            });
          }
  
          state.totalItems = filteredData.length;
          state.totalPages = Math.ceil(filteredData.length / itemsPerPage);
          const start = (page.value - 1) * itemsPerPage;
          const end = start + itemsPerPage;
          state.rooms = filteredData.slice(start, end);
  
          console.log("Filtered data:", state.rooms);
  
          state.isLoading = false;
        } catch (error) {
          console.error("Failed to load data:", error);
          state.error = "Failed to load data";
          state.isLoading = false;
        }
      };
  
      const applyFiltersAndNavigate = () => {
        applyFilters();
  
        if (selectedDirectory.value && selectedDirectory.value !== "Semua") {
          const routeName = selectedDirectory.value.split(' ').join('-').toLowerCase(); // Converting to kebab-case
          router.push({ path: `/${routeName}` }); // Use router instance
        }
      };
  
      const fetchInitialData = async () => {
        state.isLoading = true;
        state.progress = 0;
        state.rooms = [];
  
        try {
          state.totalPages = Math.ceil(data.length / itemsPerPage);
          state.totalItems = data.length;
          const start = (page.value - 1) * itemsPerPage;
          const end = start + itemsPerPage;
          state.rooms = data.slice(start, end);
  
          tempTahunPenerbitan.value = [...tahunPenerbitan.value];
  
          state.isLoading = false;
        } catch (error) {
          console.error("Failed to load data:", error);
          state.error = "Failed to load data";
          state.isLoading = false;
        }
      };
  
      const clearFilters = () => {
        tahunPenerbitan.value = [1984, 2024];
        tempTahunPenerbitan.value = [1984, 2024];
        applyFilters();
      };
  
      watch(selectedSort, applyFilters);
      watch(selectedDirection, applyFilters);
  
      onMounted(fetchInitialData);
  
      return {
        state,
        showSortFilter,
        showCategoryFilter,
        selectedSort,
        selectedDirection,
        keyword,
        selectedDirectory,
        selectedClassification,
        tahunPenerbitan,
        tempTahunPenerbitan,
        applyFilters,
        clearFilters,
        applyFiltersAndNavigate,
        page,
        itemsPerPage,
      };
    },
    data() {
      return {
        items: [
          {
            title: "Direktori",
            disabled: false,
            href: "/direktori",
          },
          {
            title: "Peraturan",
            disabled: true
          }
        ],
        directories: ["Semua", "Putusan", "Kompilasi Kaidah Hukum", "Restatement", "Rumusan Kamar", "Rumusan Rakernas", "Yurisprudensi", "Peraturan"],
        classifications: ["Semua","Undang-Undang","Fatwa DSN","SEMA","PERMA","Putusan MK","Peraturan Pemerintah","Qanun","SK Ketua MA","Peraturan Presiden","Fatwa MA","Surat Panitera","Peratuan Lain-Lain","Peraturan Komisi Pengawas Persaingan Usaha"],
        directionOptions: ["Menurun", "Menaik"],
        sortOptions: ["-", "Tanggal Putusan", "Total View", "Total Download"],
        showLabel: false,
      };
    },
    computed: {
      computedThumbLabel() {
        return this.showLabel ? 'always' : false
      },
      paginationRange() {
        const current = this.page;
        const last = this.state.totalPages;
        const delta = 2;
        const left = current - delta;
        const right = current + delta;
        const range = [];
  
        range.push(1);
  
        if (left > 2) {
          range.push("...");
        }
  
        for (let i = Math.max(2, left); i <= Math.min(last - 1, right); i++) {
          range.push(i);
        }
  
        if (right < last - 1) {
          range.push("...");
        }
  
        range.push(last);
  
        return range;
      },
    },
    methods: {
      goToPage(pageNumber) {
        if (pageNumber !== "...") {
          this.page = pageNumber;
          this.applyFilters();
        }
      },
      prevPage() {
        if (this.page > 1) {
          this.page--;
          this.applyFilters();
        }
      },
      nextPage() {
        if (this.page < this.state.totalPages) {
          this.page++;
          this.applyFilters();
        }
      },
    },
  };
  </script>
  
  
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
  .range-inputs {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    margin-top: 10px;
  }
  
  .breadcrumbs {
    font-size: 1rem;
  }
  
  @media (max-width: 768px) {
    .breadcrumbs {
      font-size: 0.75rem; /* Ukuran font lebih kecil untuk mobile */
      padding: 0 0.5rem; /* Mengurangi padding untuk mobile */
    }
  
    .v-breadcrumbs__divider {
      margin: 0 0.25rem; /* Mengurangi margin untuk divider pada mobile */
    }
  
    .v-breadcrumbs__item {
      padding: 0.25rem 0; /* Mengurangi padding untuk item pada mobile */
    }
  
    /* Adjust pagination buttons for mobile */
    .pagination-button {
      padding: 0.25rem 0.5rem; /* Smaller padding for mobile */
      font-size: 0.75rem; /* Smaller font size for mobile */
    }
  
    .pagination-dots {
      padding: 0.25rem 0.5rem; /* Smaller padding for mobile */
      font-size: 0.75rem; /* Smaller font size for mobile */
    }
  }
  </style>
  