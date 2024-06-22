<template>
  <div class="bg-[#F5F7FA]">
    <NavBar />
    <v-container>
      <!-- Breadcrumbs Section -->
      <v-breadcrumbs :items="items" item-class="breadcrumb-item" class="breadcrumbs pl-0 text-[#8e4202]">
        <template v-slot:divider>
          <v-icon class="" icon="mdi-chevron-right"></v-icon>
        </template>
        <template v-slot:prepend>
          <v-icon class="">mdi-home</v-icon>
        </template>
      </v-breadcrumbs>

      <!-- Title Section -->
      <h1 class="text-2xl md:text-3xl font-bold mb-4">Putusan</h1>
      <hr class="border-b-2 border-gray-800 mb-4">
      <p class="mb-8 text-sm md:text-base">
        Putusan merupakan suatu pernyataan hakim sebagai pejabat negara yang diucapkan di muka persidangan dengan tujuan untuk mengakhiri atau menyelesaikan suatu perkara atau sengketa antara para pihak yang saling berkepentingan.
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
        <div class="hidden md:flex flex-row items-baseline mb-0">
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
        <!-- Filter Buttons for Mobile -->
        <div class="flex md:hidden justify-center mb-4 space-x-6">
          <v-btn @click="showSortFilter = true">Urutkan</v-btn>
          <v-btn @click="showCategoryFilter = true">Filter</v-btn>
        </div>

        <v-row class="center mt-[-23px]">
          <!-- Filters for Desktop -->
          <v-col cols="3" class="hidden md:block">
            <v-card class="pa-4 rounded-2xl">
              <!-- <v-card-text> -->
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
              <!-- </v-card-text> -->
            </v-card>
          </v-col>

          <!-- Content for Mobile and Desktop -->
          <v-col cols="12" md="9">
            <v-list class=" w-full bg-[#F5F7FA]">
              <v-list-item v-for="item in state.rooms" :key="item.id" class="mb-4">
                <v-card class="pa-4 rounded-2xl">
                  <div v-if="item.jenisPutusan === 'Putusan Penting'">
                    <div class="flex items-center mb-2 justify-between">
                      <div class="flex items-center">
                        <v-icon color="green">mdi-check-circle</v-icon>
                        <span class="md:ml-2 sm:ml-0 text-green-600 sm:w-[18px] md:w-[254px]">Berkekuatan Hukum Tetap</span>
                      </div>
                      <div class="flex justify-end">
                        <div class="bg-[#8e4202] sm:p-2 md:pr-3 md:pl-3 md:py-1 rounded-xl text-white text-center">
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
                    <div class="flex justify-between items-center mb-2">
                      <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
                      <div class="bg-[#8e4202] p-2 md:pr-3 md:pl-3 md:py-1 rounded-xl text-white text-center">
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
    <!-- Bottom Sheets for Mobile Filters -->
    <v-bottom-sheet v-model="showCategoryFilter">
    <v-card>
      <v-card-title class="text-xl flex justify-between items-center">
          Filter Kategori
          <v-icon @click="showCategoryFilter = false" class="cursor-pointer">mdi-close</v-icon>
        </v-card-title>
      <v-card-text>
        <!-- Filter content here (same as desktop) -->
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

        <!-- Filter Tahun Register -->
        <h2 class="mb-2 text-[17px] font-bold">Tahun Register</h2>
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

        <!-- Filter Tahun Upload -->
        <h2 class="mb-2 text-[17px] font-bold">Tahun Upload</h2>
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
        <div class="flex justify-center mt-4">
            <v-btn color="brown" @click="applyFiltersAndNavigate">Terapkan</v-btn>
          </div>

        <!-- Add other filters here if necessary -->
      </v-card-text>
    </v-card>
</v-bottom-sheet>

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
            <v-btn color="brown" @click="showSortFilter = false">Terapkan</v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-bottom-sheet>
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
    NavBar, FooterBar,
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

    const showCategoryFilter = ref(false);
const showSortFilter = ref(false);
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
    const tahunPutus = ref([1984, 2024]);
    const tahunRegister = ref([1984, 2024]);
    const tahunUpload = ref([1984, 2024]);
    const tempTahunPutus = ref([1984, 2024]);
    const tempTahunRegister = ref([1984, 2024]);
    const tempTahunUpload = ref([1984, 2024]);
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
        views: 120,
        downloads: 440,
        direktori: "Putusan",
        jenisPutusan: "Putusan Biasa",
        pengadilan: "Mahkamah Agung",
        lembagaPengadilan: "PA Jakarta Pusat",
        klasifikasi: "Perdata",
        amar: "Terbukti",
        tingkatProses: "Kasasi",
        tahunPutus: 2021,
        tahunRegister: 2024,
        tahunUpload: 2024
      },
      {
        id: 2,
        title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
        case: "PT MEGA AUTO",
        desicionDate: "17-05-2024",
        registerDate: "01-05-2024",
        uploadData: "30-05-2024",
        views: 1200,
        downloads: 440,
        direktori: "Putusan",
        jenisPutusan: "Putusan Penting",
        pengadilan: "Mahkamah Agung",
        lembagaPengadilan: "PA Jakarta Pusat",
        klasifikasi: "Perdata",
        amar: "Terbukti",
        tingkatProses: "Kasasi",
        tahunPutus: 2024,
        tahunRegister: 2024,
        tahunUpload: 2024
      },
      {
        id: 3,
        title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
        case: "PT MEGA AUTO",
        desicionDate: "17-05-2024",
        registerDate: "01-05-2024",
        uploadData: "30-05-2024",
        views: 1200,
        downloads: 440,
        direktori: "Putusan",
        jenisPutusan: "Putusan Penting",
        pengadilan: "Mahkamah Agung",
        lembagaPengadilan: "PA Jakarta Pusat",
        klasifikasi: "Perdata",
        amar: "Terbukti",
        tingkatProses: "Kasasi",
        tahunPutus: 2024,
        tahunRegister: 2024,
        tahunUpload: 2024
      }
      ,
      {
        id: 4,
        title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
        case: "PT MEGA AUTO",
        desicionDate: "17-05-2024",
        registerDate: "01-05-2024",
        uploadData: "30-05-2024",
        views: 1200,
        downloads: 440,
        direktori: "Putusan",
        jenisPutusan: "Putusan Penting",
        pengadilan: "Mahkamah Agung",
        lembagaPengadilan: "PA Jakarta Pusat",
        klasifikasi: "Perdata",
        amar: "Terbukti",
        tingkatProses: "Kasasi",
        tahunPutus: 2024,
        tahunRegister: 2024,
        tahunUpload: 2024
      }
      ,
      {
        id: 5,
        title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
        case: "PT MEGA AUTO",
        desicionDate: "17-05-2024",
        registerDate: "01-05-2024",
        uploadData: "30-05-2024",
        views: 1200,
        downloads: 440,
        direktori: "Putusan",
        jenisPutusan: "Putusan Penting",
        pengadilan: "Mahkamah Agung",
        lembagaPengadilan: "PA Jakarta Pusat",
        klasifikasi: "Perdata",
        amar: "Terbukti",
        tingkatProses: "Kasasi",
        tahunPutus: 2024,
        tahunRegister: 2024,
        tahunUpload: 2024
      }
      ,
      {
        id: 6,
        title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
        case: "PT MEGA AUTO",
        desicionDate: "17-05-2024",
        registerDate: "01-05-2024",
        uploadData: "30-05-2024",
        views: 1200,
        downloads: 440,
        direktori: "Putusan",
        jenisPutusan: "Putusan Penting",
        pengadilan: "Mahkamah Agung",
        lembagaPengadilan: "PA Jakarta Pusat",
        klasifikasi: "Perdata",
        amar: "Terbukti",
        tingkatProses: "Kasasi",
        tahunPutus: 2024,
        tahunRegister: 2024,
        tahunUpload: 2024
      }
      ,
      {
        id: 7,
        title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
        case: "PT MEGA AUTO",
        desicionDate: "17-05-2024",
        registerDate: "01-05-2024",
        uploadData: "30-05-2024",
        views: 1200,
        downloads: 440,
        direktori: "Putusan",
        jenisPutusan: "Putusan Penting",
        pengadilan: "Mahkamah Agung",
        lembagaPengadilan: "PA Jakarta Pusat",
        klasifikasi: "Perdata",
        amar: "Terbukti",
        tingkatProses: "Kasasi",
        tahunPutus: 2024,
        tahunRegister: 2024,
        tahunUpload: 2024
      }
      ,
      {
        id: 8,
        title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
        case: "PT MEGA AUTO",
        desicionDate: "17-05-2024",
        registerDate: "01-05-2024",
        uploadData: "30-05-2024",
        views: 1200,
        downloads: 440,
        direktori: "Putusan",
        jenisPutusan: "Putusan Penting",
        pengadilan: "Mahkamah Agung",
        lembagaPengadilan: "PA Jakarta Pusat",
        klasifikasi: "Perdata",
        amar: "Terbukti",
        tingkatProses: "Kasasi",
        tahunPutus: 2024,
        tahunRegister: 2024,
        tahunUpload: 2024
      }
      ,
      {
        id: 9,
        title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
        case: "PT MEGA AUTO",
        desicionDate: "17-05-2024",
        registerDate: "01-05-2024",
        uploadData: "30-05-2024",
        views: 1200,
        downloads: 440,
        direktori: "Putusan",
        jenisPutusan: "Putusan Penting",
        pengadilan: "Mahkamah Agung",
        lembagaPengadilan: "PA Jakarta Pusat",
        klasifikasi: "Perdata",
        amar: "Terbukti",
        tingkatProses: "Kasasi",
        tahunPutus: 2024,
        tahunRegister: 2024,
        tahunUpload: 2024
      }
      ,
      {
        id: 10,
        title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
        case: "PT MEGA AUTO",
        desicionDate: "17-05-2024",
        registerDate: "01-05-2024",
        uploadData: "30-05-2024",
        views: 1200,
        downloads: 440,
        direktori: "Putusan",
        jenisPutusan: "Putusan Penting",
        pengadilan: "Mahkamah Agung",
        lembagaPengadilan: "PA Jakarta Pusat",
        klasifikasi: "Perdata",
        amar: "Terbukti",
        tingkatProses: "Kasasi",
        tahunPutus: 2024,
        tahunRegister: 2024,
        tahunUpload: 2024
      }
      ,
      {
        id: 11,
        title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
        case: "PT MEGA AUTO",
        desicionDate: "17-05-2024",
        registerDate: "01-05-2024",
        uploadData: "30-05-2024",
        views: 1200,
        downloads: 440,
        direktori: "Putusan",
        jenisPutusan: "Putusan Penting",
        pengadilan: "Mahkamah Agung",
        lembagaPengadilan: "PA Jakarta Pusat",
        klasifikasi: "Perdata",
        amar: "Terbukti",
        tingkatProses: "Kasasi",
        tahunPutus: 2024,
        tahunRegister: 2024,
        tahunUpload: 2024
      }
      ,
      {
        id: 12,
        title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
        case: "PT MEGA AUTO",
        desicionDate: "17-05-2024",
        registerDate: "01-05-2024",
        uploadData: "30-05-2024",
        views: 1200,
        downloads: 440,
        direktori: "Putusan",
        jenisPutusan: "Putusan Penting",
        pengadilan: "Mahkamah Agung",
        lembagaPengadilan: "PA Jakarta Pusat",
        klasifikasi: "Perdata",
        amar: "Terbukti",
        tingkatProses: "Kasasi",
        tahunPutus: 2024,
        tahunRegister: 2024,
        tahunUpload: 2024
      }
      ,
      {
        id: 13,
        title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
        case: "PT MEGA AUTO",
        desicionDate: "17-05-2024",
        registerDate: "01-05-2024",
        uploadData: "30-05-2024",
        views: 1200,
        downloads: 440,
        direktori: "Putusan",
        jenisPutusan: "Putusan Penting",
        pengadilan: "Mahkamah Agung",
        lembagaPengadilan: "PA Jakarta Pusat",
        klasifikasi: "Perdata",
        amar: "Terbukti",
        tingkatProses: "Kasasi",
        tahunPutus: 2024,
        tahunRegister: 2024,
        tahunUpload: 2024
      }
      ,
      {
        id: 14,
        title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
        case: "PT MEGA AUTO",
        desicionDate: "17-05-2024",
        registerDate: "01-05-2024",
        uploadData: "30-05-2024",
        views: 1200,
        downloads: 440,
        direktori: "Putusan",
        jenisPutusan: "Putusan Penting",
        pengadilan: "Mahkamah Agung",
        lembagaPengadilan: "PA Jakarta Pusat",
        klasifikasi: "Perdata",
        amar: "Terbukti",
        tingkatProses: "Kasasi",
        tahunPutus: 2024,
        tahunRegister: 2024,
        tahunUpload: 2024
      }
      ,
      {
        id: 15,
        title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
        case: "PT MEGA AUTO",
        desicionDate: "17-05-2024",
        registerDate: "01-05-2024",
        uploadData: "30-05-2024",
        views: 1200,
        downloads: 440,
        direktori: "Putusan",
        jenisPutusan: "Putusan Penting",
        pengadilan: "Mahkamah Agung",
        lembagaPengadilan: "PA Jakarta Pusat",
        klasifikasi: "Perdata",
        amar: "Terbukti",
        tingkatProses: "Kasasi",
        tahunPutus: 2024,
        tahunRegister: 2024,
        tahunUpload: 2024
      }
      ,
      {
        id: 16,
        title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
        case: "PT MEGA AUTO",
        desicionDate: "17-05-2024",
        registerDate: "01-05-2024",
        uploadData: "30-05-2024",
        views: 1200,
        downloads: 440,
        direktori: "Putusan",
        jenisPutusan: "Putusan Penting",
        pengadilan: "Mahkamah Agung",
        lembagaPengadilan: "PA Jakarta Pusat",
        klasifikasi: "Perdata",
        amar: "Terbukti",
        tingkatProses: "Kasasi",
        tahunPutus: 2024,
        tahunRegister: 2024,
        tahunUpload: 2024
      }
      ,
      {
        id: 17,
        title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
        case: "PT MEGA AUTO",
        desicionDate: "17-05-2024",
        registerDate: "01-05-2024",
        uploadData: "30-05-2024",
        views: 1200,
        downloads: 440,
        direktori: "Putusan",
        jenisPutusan: "Putusan Penting",
        pengadilan: "Mahkamah Agung",
        lembagaPengadilan: "PA Jakarta Pusat",
        klasifikasi: "Perdata",
        amar: "Terbukti",
        tingkatProses: "Kasasi",
        tahunPutus: 2024,
        tahunRegister: 2024,
        tahunUpload: 2024
      }
      // Data lainnya...
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
          const tahunPutusValue = item.tahunPutus;
          const tahunRegisterValue = item.tahunRegister;
          const tahunUploadValue = item.tahunUpload;

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
            (tahunPutus.value[0] <= tahunPutusValue && tahunPutusValue <= tahunPutus.value[1]) &&
            (tahunRegister.value[0] <= tahunRegisterValue && tahunRegisterValue <= tahunRegister.value[1]) &&
            (tahunUpload.value[0] <= tahunUploadValue && tahunUploadValue <= tahunUpload.value[1])
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
        const routeName = selectedDirectory.value.split(' ').join('-').toLowerCase(); 
        router.push({ path: `/${routeName}` }); 
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
      tahunPutus.value = [1984, 2024];
      tahunRegister.value = [1984, 2024];
      tahunUpload.value = [1984, 2024];
      tempTahunPutus.value = [1984, 2024];
      tempTahunRegister.value = [1984, 2024];
      tempTahunUpload.value = [1984, 2024];
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
          title: "Direktori",
          disabled: false,
          href: "breadcrumbs_dashboard",
        },
        {
          title: "Putusan",
          disabled: true,
          href: "",
        },
        // {
        //   title: "Link 2",
        //   disabled: false,
        //   href: "breadcrumbs_link_2",
        // },
        // {
        //   title: "Link 3",
        //   disabled: true,
        //   href: "breadcrumbs_link_2",
        // },
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


terbaru jam 00000buat putuan