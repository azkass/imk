<template>
  <div class="bg-[#F5F7FA]">
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
        <div class="flex flex-row items-baseline mb-0">
          <div class="mb-0">
            <v-card-title class="text-2xl">Filter</v-card-title>
          </div>
          <div class="md:ml-1 sm:ml-12 xl:ml-0 2xl:ml-28 mb-0">
            <p class="text-gray-700 mb-4">Menampilkan 1 - 10 dari 234 Putusan</p>
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
        <v-row class="mt-[-23px]">
          <v-col cols="3">
            <v-card>
              <v-card-text>
                <h2 class="mb-1 text-[17px] font-bold">Kata Kunci</h2>
                <v-text-field class="mb-[-15px]" label="Masukkan Kata Kunci" v-model="keyword" />

                <h2 class="mb-2 text-[17px] font-bold">Direktori</h2>
                <v-combobox
                  :items="directories"
                  label="Pilih Direktori"
                  variant="outlined"
                  v-model="selectedDirectory"
                ></v-combobox>

                <h2 class="mb-2 text-[17px] font-bold">Jenis Putusan</h2>
                <v-combobox
                  :items="decisionTypes"
                  label="Pilih Jenis Putusan"
                  variant="outlined"
                  v-model="selectedDecisionType"
                ></v-combobox>

                <h2 class="mb-2 text-[17px] font-bold">Pengadilan</h2>
                <v-combobox
                  :items="courts"
                  label="Pilih Pengadilan"
                  variant="outlined"
                  v-model="selectedCourt"
                ></v-combobox>
                
                <h2 class="mb-2 text-[17px] font-bold">Lembaga Pengadilan</h2>
                <v-combobox
                  :items="institutions"
                  label="Pilih Lembaga Pengadilan"
                  variant="outlined"
                  v-model="selectedInstitution"
                ></v-combobox>

                <h2 class="mb-2 text-[17px] font-bold">Klasifikasi</h2>
                <v-combobox
                  :items="classifications"
                  label="Pilih Klasifikasi Putusan"
                  variant="outlined"
                  v-model="selectedClassification"
                ></v-combobox>

                <h2 class="mb-2 text-[17px] font-bold">Amar</h2>
                <v-combobox
                  :items="decisions"
                  label="Pilih Amar"
                  variant="outlined"
                  v-model="selectedDecision"
                ></v-combobox>

                <h2 class="mb-2 text-[17px] font-bold">Tingkat Proses</h2>
                <v-combobox
                  :items="processLevels"
                  label="Pilih Tingkat Proses"
                  variant="outlined"
                  v-model="selectedProcessLevel"
                ></v-combobox>

                <!-- Filter Tahun Putus -->
                <h2 class="mb-2 text-[17px] font-bold">Tahun Putus</h2>
                <v-range-slider
                  v-model="tempTahunPutus"
                  :max="2024"
                  :min="1984"
                  :step="1"
                  thumb-label="always"
                  hide-details
                  track-color="brown"
                  thumb-color="brown"
                ></v-range-slider>
                <div class="range-inputs">
                  <v-text-field
                    v-model="tempTahunPutus[0]"
                    density="compact"
                    style="width: 70px; text-align: center;"
                    type="number"
                    variant="outlined"
                    hide-details
                    single-line
                  ></v-text-field>
                  <div style="flex-grow: 1"></div>
                  <v-text-field
                    v-model="tempTahunPutus[1]"
                    density="compact"
                    style="width: 70px; text-align: center;"
                    type="number"
                    variant="outlined"
                    hide-details
                    single-line
                  ></v-text-field>
                </div>

                <h2 class="mt-[10px] mb-2 text-[17px] font-bold">Tahun Register</h2>
                <v-range-slider
                  v-model="tempTahunRegister"
                  :max="2024"
                  :min="1984"
                  :step="1"
                  thumb-label="always"
                  hide-details
                  track-color="brown"
                  thumb-color="brown"
                ></v-range-slider>
                <div class="range-inputs">
                  <v-text-field
                    v-model="tempTahunRegister[0]"
                    density="compact"
                    style="width: 70px; text-align: center;"
                    type="number"
                    variant="outlined"
                    hide-details
                    single-line
                  ></v-text-field>
                  <div style="flex-grow: 1"></div>
                  <v-text-field
                    v-model="tempTahunRegister[1]"
                    density="compact"
                    style="width: 70px; text-align: center;"
                    type="number"
                    variant="outlined"
                    hide-details
                    single-line
                  ></v-text-field>
                </div>

                <h2 class="mr-8 mt-[10px] mb-2 text-[17px] font-bold">Tahun Upload</h2>
                <v-range-slider
                  v-model="tempTahunUpload"
                  :max="2024"
                  :min="1984"
                  :step="1"
                  thumb-label="always"
                  hide-details
                  track-color="brown"
                  thumb-color="brown"
                ></v-range-slider>
                <div class="range-inputs">
                  <v-text-field
                    v-model="tempTahunUpload[0]"
                    density="compact"
                    style="width: 70px; text-align: center;"
                    type="number"
                    variant="outlined"
                    hide-details
                    single-line
                  ></v-text-field>
                  <div style="flex-grow: 1"></div>
                  <v-text-field
                    v-model="tempTahunUpload[1]"
                    density="compact"
                    style="width: 70px; text-align: center;"
                    type="number"
                    variant="outlined"
                    hide-details
                    single-line
                  ></v-text-field>
                </div>

                <!-- Add other filters here if necessary -->

                <div class="flex justify-center mt-4">
                  <v-btn color="brown" @click="applyFiltersAndNavigate">Terapkan</v-btn>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="9">
            <v-list class="mt-[-11px] bg-[#F5F7FA]">
              <v-list-item v-for="item in state.rooms" :key="item.id" class="mb-4">
                <v-card class="pa-4 rounded-2xl shadow-2xl">
                  <div v-if="item.jenisPutusan === 'Putusan Penting'">
                      <div  class="flex items-center mb-2 justify-between">
                      <div>
                        <v-icon color="green" v-if="item.jenisPutusan === 'Putusan Penting'">mdi-check-circle</v-icon>
                      <span class="ml-2 text-green-600" v-if="item.jenisPutusan === 'Putusan Penting'">Berkekuatan Hukum Tetap</span>
                      </div>
                      <div class="flex justify-end">
                        <div class="bg-[#8e4202] pr-3 pl-3 pa-1 pb-1 rounded-xl text-white">
                          {{ item.jenisPutusan }}
                        </div>
                      </div>
                    </div>
                    <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
                      <p class="mb-2">{{ item.case }}</p>
                      <div class="mt-4">
                        <div class="flex flex-col">
                          <hr class="border-b-2 border-gray-500 mb-4">
                          <div class="flex justify-between items-center text-gray-600">
                            <div>
                              <span class="font-bold text-[#8e4202]">Register:</span> {{ item.registerDate }}
                              <span class="mx-2">|</span>
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
                  </div>
                  <div v-else>
                    <div class="flex justify-between">
                      <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
                      <div class="bg-[#8e4202] pr-3 pl-3 pa-1 pb-1 rounded-xl text-white">
                          {{ item.jenisPutusan }}
                        </div>
                    </div>
                    
                    <p class="mb-2">{{ item.case }}</p>
                    <div class="mt-4">
                      <div class="flex flex-col">
                        <hr class="border-b-2 border-gray-500 mb-4">
                        <div class="flex justify-between items-center text-gray-600">
                          <div>
                            <span class="font-bold text-[#8e4202]">Register:</span> {{ item.registerDate }}
                            <span class="mx-2">|</span>
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
                  </div>
                </v-card>
              </v-list-item>
            </v-list>

            <!-- Pagination Section -->
            
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
    </v-container>
    <FooterBar />
  </div>
</template>

<script>
import FooterBar from "@/components/FooterBar.vue";
import NavBar from "@/components/NavBar.vue";
import { onMounted, reactive, ref, watch } from "vue";
import { useRouter } from "vue-router"; // Pastikan useRouter diimpor dari 'vue-router'

export default {
  name: "PutusanPenting",
  components: {
    NavBar,
    FooterBar,
  },
  setup() {
    const router = useRouter(); // Mendapatkan instance router
    
    const state = reactive({
      rooms: [],
      isLoading: true,
      error: null,
      progress: 0,
      totalPages: 1,
    });

    const selectedSort = ref(null);
    const selectedDirection = ref(null);
    const keyword = ref("");
    const selectedDirectory = ref(null);
    const selectedDecisionType = ref(null);
    const selectedCourt = ref(null);
    const selectedInstitution = ref(null);
    const selectedRegion = ref(null);
    const selectedClassification = ref(null);
    const selectedDecision = ref(null);
    const selectedProcessLevel = ref(null);
    const tahunPutus = ref([null, null]);
    const tahunRegister = ref([null, null]);
    const tahunUpload = ref([null, null]);
    const tempTahunPutus = ref([null, null]);
    const tempTahunRegister = ref([null, null]);
    const tempTahunUpload = ref([null, null]);
    const page = ref(1);
    const itemsPerPage = 10;

    const data = [
      {
        id: 1,
        title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
        case: "PT MEGA AUTO",
        desicionDate: "17-05-2024",
        registerDate: "01-05-2024",
        uploadData: "30-05-2024",
        views: 1200,
        downloads: 440,
        direktori: "Putusan",
        jenisPutusan: "Putusan Biasa",
        pengadilan: "Mahkamah Agung",
        lembagaPengadilan: "PA Jakarta Pusat",
        klasifikasi: "Perdata",
        amar: "Terbukti",
        tingkatProses: "Kasasi"
      },
      {
        id: 2,
        title: "jaya jaya",
        case: "PT MEGA AUTO",
        desicionDate: "17-05-2024",
        registerDate: "01-05-2024",
        uploadData: "30-05-2024",
        views: 220,
        downloads: 440,
        direktori: "Putusan penting",
        jenisPutusan: "Putusan Penting",
        pengadilan: "Pengadilan Umum",
        lembagaPengadilan: "PA Jakarta Barat",
        klasifikasi: "Pidana Umum",
        amar: "Bebas",
        tingkatProses: "Pertama"
      },
      {
        id: 3,
        title: "elvina",
        case: "PT MEGA AUTO",
        desicionDate: "17-05-2024",
        registerDate: "01-05-2024",
        uploadData: "30-05-2024",
        views: 220,
        downloads: 440,
        direktori: "Putusan",
        jenisPutusan: "Putusan Biasa",
        pengadilan: "Pengadilan Agama",
        lembagaPengadilan: "PA Jakarta Selatan",
        klasifikasi: "Perceraian",
        amar: "Terbukti",
        tingkatProses: "Banding"
      },
      {
        id: 4,
        title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
        case: "PT MEGA AUTO",
        desicionDate: "17-05-2024",
        registerDate: "01-05-2024",
        uploadData: "30-05-2024",
        views: 220,
        downloads: 440,
        direktori: "Putusan penting",
        jenisPutusan: "Putusan Penting",
        pengadilan: "Pengadilan Militer",
        lembagaPengadilan: "PA Jakarta Timur",
        klasifikasi: "Pidana Khusus",
        amar: "Lepas",
        tingkatProses: "Kasasi"
      },
      {
        id: 5,
        title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
        case: "PT MEGA AUTO",
        desicionDate: "17-05-2024",
        registerDate: "01-05-2024",
        uploadData: "30-05-2024",
        views: 220,
        downloads: 440,
        direktori: "Putusan",
        jenisPutusan: "Putusan Biasa",
        pengadilan: "Pengadilan Tata Usaha Negara",
        lembagaPengadilan: "PA Jakarta",
        klasifikasi: "Perdata Agama",
        amar: "Tidak Dapat Diterima",
        tingkatProses: "Peninjauan kembali"
      },
      {
        id: 6,
        title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
        case: "PT MEGA AUTO AGHAG",
        registerDate: "01-05-2024",
        desicionDate: "17-05-2024",
        uploadData: "29-02-2024",
        views: 220,
        downloads: 440,
        direktori: "Putusan",
        jenisPutusan: "Putusan Biasa",
        pengadilan: "Pengadilan Pajak",
        lembagaPengadilan: "PA Jakarta Barat",
        klasifikasi: "Pencurian",
        amar: "Tolak",
        tingkatProses: "Kasasi"
      },
      {
        id: 7,
        title: "Putusan Mahkamah Agung Nomor 123 K/Pdt.Sus-PHI/2024",
        case: "PT XYZ",
        desicionDate: "10-04-2024",
        registerDate: "01-05-2024",
        uploadData: "25-04-2024",
        views: 800,
        downloads: 300,
        direktori: "Restatement",
        jenisPutusan: "Putusan Penting",
        pengadilan: "Pengadilan Umum",
        lembagaPengadilan: "PA Jakarta Utara",
        klasifikasi: "Pidana Khusus",
        amar: "Terbukti",
        tingkatProses: "Banding"
      },
      {
        id: 8,
        title: "Putusan Mahkamah Agung Nomor 456 K/Pdt.Sus-PHI/2024",
        case: "PT ABC",
        desicionDate: "05-06-2024",
        registerDate: "01-05-2024",
        uploadData: "20-06-2024",
        views: 500,
        downloads: 200,
        direktori: "Rumusan Kamar",
        jenisPutusan: "Putusan Biasa",
        pengadilan: "Pengadilan Agama",
        lembagaPengadilan: "PA Jakarta Selatan",
        klasifikasi: "Perdata",
        amar: "Lepas",
        tingkatProses: "Kasasi"
      },
      {
        id: 9,
        title: "Putusan Mahkamah Agung Nomor 789 K/Pdt.Sus-PHI/2024",
        case: "PT DEF",
        desicionDate: "15-07-2024",
        registerDate: "01-05-2024",
        uploadData: "30-07-2024",
        views: 600,
        downloads: 250,
        direktori: "Rumusan Rakernas",
        jenisPutusan: "Putusan Penting",
        pengadilan: "Pengadilan Militer",
        lembagaPengadilan: "PA Jakarta Barat",
        klasifikasi: "Pidana Umum",
        amar: "Tidak Dapat Diterima",
        tingkatProses: "Pertama"
      },
      {
        id: 10,
        title: "Putusan Mahkamah Agung Nomor 101 K/Pdt.Sus-PHI/2024",
        case: "PT GHI",
        desicionDate: "20-08-2024",
        registerDate: "01-05-2024",
        uploadData: "05-09-2024",
        views: 700,
        downloads: 300,
        direktori: "Yurisprudensi",
        jenisPutusan: "Putusan Biasa",
        pengadilan: "Pengadilan Tata Usaha Negara",
        lembagaPengadilan: "PA Jakarta Timur",
        klasifikasi: "Perdata Agama",
        amar: "Tolak",
        tingkatProses: "Kasasi"
      },
      {
        id: 11,
        title: "Putusan Mahkamah Agung Nomor 654 K/Pdt.Sus-PHI/2024",
        case: "PT JKL",
        desicionDate: "02-02-2024",
        registerDate: "01-02-2024",
        uploadData: "14-02-2024",
        views: 450,
        downloads: 150,
        direktori: "Putusan",
        jenisPutusan: "Putusan Penting",
        pengadilan: "Pengadilan Umum",
        lembagaPengadilan: "PA Jakarta Barat",
        klasifikasi: "Narkotika dan Psikotropika",
        amar: "Bebas",
        tingkatProses: "Kasasi"
      },
      {
        id: 12,
        title: "Putusan Mahkamah Agung Nomor 789 K/Pdt.Sus-PHI/2024",
        case: "PT MNO",
        desicionDate: "10-11-2023",
        registerDate: "01-11-2023",
        uploadData: "15-11-2023",
        views: 600,
        downloads: 300,
        direktori: "Putusan penting",
        jenisPutusan: "Putusan Penting",
        pengadilan: "Pengadilan Tata Usaha Negara",
        lembagaPengadilan: "PA Jakarta Utara",
        klasifikasi: "Perbuatan Melawan Hukum",
        amar: "Lepas",
        tingkatProses: "Pertama"
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
        tingkatProses: "Banding"
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
        tingkatProses: "Kasasi"
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
        klasifikasi: "Pidana Khusus",
        amar: "Tidak Dapat Diterima",
        tingkatProses: "Banding"
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
        klasifikasi: "Pidana Umum",
        amar: "Lepas",
        tingkatProses: "Pertama"
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
        tingkatProses: "Kasasi"
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
        tingkatProses: "Banding"
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
        tingkatProses: "Pertama"
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
        tingkatProses: "Kasasi"
      }
    ];

    const applyFilters = () => {
      state.isLoading = true;
      state.progress = 0;

      tahunPutus.value = [...tempTahunPutus.value];
      tahunRegister.value = [...tempTahunRegister.value];
      tahunUpload.value = [...tempTahunUpload.value];

      const params = {
        keyword: keyword.value,
        direktori: selectedDirectory.value,
        jenisPutusan: selectedDecisionType.value,
        pengadilan: selectedCourt.value,
        lembaga: selectedInstitution.value,
        region: selectedRegion.value,
        klasifikasi: selectedClassification.value,
        amar: selectedDecision.value,
        proses: selectedProcessLevel.value,
        tahunPutus: tahunPutus.value,
        tahunRegister: tahunRegister.value,
        tahunUpload: tahunUpload.value,
        sort: selectedSort.value,
        direction: selectedDirection.value,
      };

      console.log("Filter params:", params);

      try {
        let filteredData = data.filter(item => {
          const tahunPutusValue = new Date(item.desicionDate.split('-').reverse().join('-')).getFullYear();
          const tahunRegisterValue = new Date(item.registerDate.split('-').reverse().join('-')).getFullYear();
          const tahunUploadValue = new Date(item.uploadData.split('-').reverse().join('-')).getFullYear();

          return (
            (!selectedDirectory.value || selectedDirectory.value === "Semua" || item.direktori === selectedDirectory.value) &&
            (!selectedDecisionType.value || selectedDecisionType.value === "Semua" || item.jenisPutusan === selectedDecisionType.value) &&
            (!selectedCourt.value || selectedCourt.value === "Semua" || item.pengadilan === selectedCourt.value) &&
            (!selectedInstitution.value || selectedInstitution.value === "Semua" || item.lembagaPengadilan === selectedInstitution.value) &&
            (!selectedRegion.value || selectedRegion.value === "Semua" || item.region === selectedRegion.value) &&
            (!selectedClassification.value || selectedClassification.value === "Semua" || item.klasifikasi === selectedClassification.value) &&
            (!selectedDecision.value || selectedDecision.value === "Semua" || item.amar === selectedDecision.value) &&
            (!selectedProcessLevel.value || selectedProcessLevel.value === "Semua" || item.tingkatProses === selectedProcessLevel.value) &&
            (!keyword.value || item.title.includes(keyword.value) || item.case.includes(keyword.value)) &&
            (!tahunPutus.value[0] || !tahunPutus.value[1] || (tahunPutusValue >= tahunPutus.value[0] && tahunPutusValue <= tahunPutus.value[1])) &&
            (!tahunRegister.value[0] || !tahunRegister.value[1] || (tahunRegisterValue >= tahunRegister.value[0] && tahunRegisterValue <= tahunRegister.value[1])) &&
            (!tahunUpload.value[0] || !tahunUpload.value[1] || (tahunUploadValue >= tahunUpload.value[0] && tahunUpload.value <= tahunUpload.value[1]))
          );
        });

        if (selectedSort.value && selectedSort.value !== "-") {
          filteredData.sort((a, b) => {
            let sortField = "";
            switch (selectedSort.value) {
              case "Tanggal Putusan":
                sortField = "desicionDate";
                break;
              case "Tanggal Register":
                sortField = "registerDate";
                break;
              case "Tanggal Upload":
                sortField = "uploadData";
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

            if (selectedSort.value === "Tanggal Putusan" || selectedSort.value === "Tanggal Register" || selectedSort.value === "Tanggal Upload") {
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
        const start = (page.value - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        state.rooms = data.slice(start, end);

        tempTahunPutus.value = [...tahunPutus.value];
        tempTahunRegister.value = [...tahunRegister.value];
        tempTahunUpload.value = [...tahunUpload.value];

        state.isLoading = false;
      } catch (error) {
        console.error("Failed to load data:", error);
        state.error = "Failed to load data";
        state.isLoading = false;
      }
    };

    const clearFilters = () => {
      tahunPutus.value = [null, null];
      tahunRegister.value = [null, null];
      tahunUpload.value = [null, null];
      tempTahunPutus.value = [null, null];
      tempTahunRegister.value = [null, null];
      tempTahunUpload.value = [null, null];
      applyFilters();
    };

    watch(selectedSort, applyFilters);
    watch(selectedDirection, applyFilters);

    onMounted(fetchInitialData);

    return {
      state,
      selectedSort,
      selectedDirection,
      keyword,
      selectedDirectory,
      selectedDecisionType,
      selectedCourt,
      selectedInstitution,
      selectedRegion,
      selectedClassification,
      selectedDecision,
      selectedProcessLevel,
      tahunPutus,
      tahunRegister,
      tahunUpload,
      tempTahunPutus,
      tempTahunRegister,
      tempTahunUpload,
      applyFilters,
      clearFilters,
      applyFiltersAndNavigate,
      page,
    };
  },
  data() {
    return {
      items: [
        {
          title: "Dashboard",
          disabled: false,
          href: "breadcrumbs_dashboard",
        },
        {
          title: "Link 1",
          disabled: false,
          href: "breadcrumbs_link_1",
        },
        {
          title: "Link 2",
          disabled: false,
          href: "breadcrumbs_link_2",
        },
        {
          title: "Link 3",
          disabled: true,
          href: "breadcrumbs_link_2",
        },
      ],
      directories: ["Semua", "Putusan", "Kompilasi Kaidah Hukum","Restatement", "Rumusan Kamar", "Rumusan Rakernas", "Yurisprudensi", "Peraturan"],
      decisionTypes: ["Semua", "Putusan Biasa", "Putusan Penting"],
      courts: ["Semua", "Mahkamah Agung", "Pengadilan Umum", "Pengadilan Agama", "Pengadilan Militer", "Pengadilan Tata Usaha Negara", "Pengadilan Pajak"],
      institutions: ["Semua", "PTA Jakarta", "PA Jakarta Pusat", "PA Jakarta Barat", "PA Jakarta Selatan", "PA Jakarta Timur", "PA Jakarta"],
      regions: ["Semua", "Daerah 1", "Daerah 2", "Daerah 3"],
      classifications: ["Semua", "Narkotika dan Psikotropika", "Pencurian", "Penganiayaan", "Perbuatan Melawan Hukum", "Perceraian", "Perdata", "Perdata Agama", "Pidana Khusus", "Pidana Umum"],
      decisions: ["Semua", "Bebas", "Lepas", "Terbukti", "Tidak Dapat Diterima", "Tolak"],
      processLevels: ["Semua", "Pertama", "Banding", "Kasasi", "Peninjauan kembali"],
      directionOptions: ["Menurun", "Menaik"],
      sortOptions: ["-", "Tanggal Putusan", "Tanggal Register", "Tanggal Upload", "Total View", "Total Download"],
    };
  },
  computed: {
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
.rounded-xl-custom {
  border-radius: 0.75rem !important;
}
.range-inputs {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin-top: 10px;
}
</style>
