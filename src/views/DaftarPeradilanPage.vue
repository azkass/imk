<template>
    <div>
      <NavBar />
      <div class="bg-[#F5F7FA] px-16">
        <!-- Breadcrumbs Section -->
        <v-breadcrumbs :items="items" item-class="breadcrumb-item" class="px-0 sm:my-4 md:my-0 breadcrumbs text-[#8e4202]">
          <template v-slot:divider>
            <v-icon class="text-[#8e4202]" icon="mdi-chevron-right"></v-icon>
          </template>
          <template v-slot:prepend>
            <v-icon class="text-[#8e4202]">mdi-home</v-icon>
          </template>
        </v-breadcrumbs>
  
        <!-- Title Section -->
        <h1 class="text-2xl md:text-3xl font-bold mb-4">Daftar Pengadilan</h1>
        <hr class="border-b-2 border-gray-800 mb-4">
        
  
        <!-- Filter Section -->
        <div class="mx-10">
          <div class="flex justify-between items-end">
             <p class="mb-4 items-end">Menampilkan {{ startItem }}-{{ endItem }} dari {{ totalItems }} Pengadilan</p>
          <!-- Filter Section -->
           <div class="flex items-center justify-end space-x-1 mb-4">
             <input
               type="text"
               placeholder="Temukan data ..."
               class="border p-2 rounded w-full max-w-md"
               v-model="searchQuery"
                @input="applyFilters"
               />
              <button @click="clearFilter" class="ml-4 bg-gray-200 p-2 rounded">Clear</button>
              </div>
          </div>
          <table class="min-w-full bg-white">
            <thead>
              <tr class="bg-[#8e4202] text-white">
                <th class="py-2 px-4 border cursor-pointer" @click="sortData('nama')">
                  Nama Pengadilan
                  <span v-if="sortBy === 'nama' && !sortDesc">▲</span>
                  <span v-if="sortBy === 'nama' && sortDesc">▼</span>
                </th>
                <th class="py-2 px-4 border cursor-pointer" @click="sortData('tinggi')">
                  Pengadilan Tinggi
                  <span v-if="sortBy === 'tinggi' && !sortDesc">▲</span>
                  <span v-if="sortBy === 'tinggi' && sortDesc">▼</span>
                </th>
                <th class="py-2 px-4 border cursor-pointer" @click="sortData('provinsi')">
                  Provinsi
                  <span v-if="sortBy === 'provinsi' && !sortDesc">▲</span>
                  <span v-if="sortBy === 'provinsi' && sortDesc">▼</span>
                </th>
                <th class="py-2 px-4 border cursor-pointer" @click="sortData('putusan')">
                  Jumlah Putusan
                  <span v-if="sortBy === 'putusan' && !sortDesc">▲</span>
                  <span v-if="sortBy === 'putusan' && sortDesc">▼</span>
                </th>
                <th class="py-2 px-4 border cursor-pointer" @click="sortData('publikasi')">
                  Jumlah Publikasi
                  <span v-if="sortBy === 'publikasi' && !sortDesc">▲</span>
                  <span v-if="sortBy === 'publikasi' && sortDesc">▼</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="pengadilan in paginatedData" :key="pengadilan.id">
                <td class="py-2 px-4 border">{{ pengadilan.nama }}</td>
                <td class="py-2 px-4 border">{{ pengadilan.tinggi }}</td>
                <td class="py-2 px-4 border">{{ pengadilan.provinsi }}</td>
                <td class="py-2 px-4 border">{{ pengadilan.putusan }}</td>
                <td class="py-2 px-4 border">{{ pengadilan.publikasi }}</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Pagination Section -->
        <div class="flex justify-center mt-4" v-if="totalPages > 1">
          <nav class="flex items-center space-x-2">
            <button
              @click="goToPage(1)"
              :disabled="currentPage === 1"
              class="pagination-button"
            >
              « Awal
            </button>
            <button
              @click="prevPage"
              :disabled="currentPage === 1"
              class="pagination-button"
            >
              ‹ Kembali
            </button>
            <span v-for="n in paginationRange" :key="n">
              <button
                v-if="n !== '...'"
                @click="goToPage(n)"
                :class="['pagination-button', { 'bg-brown-500 text-white': currentPage === n }]"
              >
                {{ n }}
              </button>
              <span v-else class="pagination-dots">...</span>
            </span>
            <button
              @click="nextPage"
              :disabled="currentPage === totalPages"
              class="pagination-button"
            >
              Selanjutnya ›
            </button>
            <button
              @click="goToPage(totalPages)"
              :disabled="currentPage === totalPages"
              class="pagination-button"
            >
              Akhir »
            </button>
          </nav>
        </div>
      </div>
      <FooterBar />
    </div>
  </template>
  
  <script>
  import FooterBar from "@/components/FooterBar.vue";
import NavBar from "@/components/NavBar.vue";
import { computed, ref } from "vue";
  
  export default {
    name: "DaftarPengadilan",
    components: {
      NavBar,
      FooterBar,
    },
    setup() {
      const pengadilanList = ref([
        { id: 1, nama: "DILMIL I 01 BANDA ACEH", tinggi: "DILMILTI I MEDAN", provinsi: "NAD", putusan: 1945, publikasi: 1945 },
        { id: 2, nama: "DILMIL I 02 MEDAN", tinggi: "DILMILTI I MEDAN", provinsi: "Sumatera Utara", putusan: 2046, publikasi: 2046 },
        { id: 3, nama: "DILMIL I 03 PADANG", tinggi: "DILMILTI I MEDAN", provinsi: "Sumatera Barat", putusan: 1220, publikasi: 1220 },
        { id: 4, nama: "DILMIL I 04 PALEMBANG", tinggi: "DILMILTI I MEDAN", provinsi: "Sumatera Selatan", putusan: 1252, publikasi: 1252 },
        { id: 5, nama: "DILMIL I 05 PONTIANAK", tinggi: "DILMILTI I MEDAN", provinsi: "Kalimantan Barat", putusan: 803, publikasi: 803 },
        { id: 6, nama: "DILMIL I 06 BANJARMASIN", tinggi: "DILMILTI I MEDAN", provinsi: "Kalimantan Selatan", putusan: 548, publikasi: 548 },
        { id: 7, nama: "DILMIL I 07 BALIKPAPAN", tinggi: "DILMILTI I MEDAN", provinsi: "Kalimantan Timur", putusan: 914, publikasi: 914 },
        { id: 8, nama: "DILMIL II 08 JAKARTA", tinggi: "DILMILTI II JAKARTA", provinsi: "DKI Jakarta", putusan: 2752, publikasi: 2752 },
        { id: 9, nama: "DILMIL II 09 BANDUNG", tinggi: "DILMILTI II JAKARTA", provinsi: "Jawa Barat", putusan: 3530, publikasi: 3530 },
        { id: 10, nama: "DILMIL II 10 SEMARANG", tinggi: "DILMILTI II JAKARTA", provinsi: "Jawa Tengah", putusan: 1027, publikasi: 1027 },
        { id: 11, nama: "DILMIL III 11 SURABAYA", tinggi: "DILMILTI III SURABAYA", provinsi: "Jawa Timur", putusan: 500, publikasi: 500 },
        { id: 12, nama: "DILMIL IV 12 MAKASSAR", tinggi: "DILMILTI IV MAKASSAR", provinsi: "Sulawesi Selatan", putusan: 600, publikasi: 600 },
        { id: 13, nama: "DILMIL V 13 BANJARMASIN", tinggi: "DILMILTI V BANJARMASIN", provinsi: "Kalimantan Selatan", putusan: 700, publikasi: 700 },
        { id: 14, nama: "DILMIL VI 14 MEDAN", tinggi: "DILMILTI VI MEDAN", provinsi: "Sumatera Utara", putusan: 800, publikasi: 800 },
        { id: 15, nama: "DILMIL VII 15 PADANG", tinggi: "DILMILTI VII PADANG", provinsi: "Sumatera Barat", putusan: 900, publikasi: 900 },
        { id: 16, nama: "DILMIL VIII 16 PALEMBANG", tinggi: "DILMILTI VIII PALEMBANG", provinsi: "Sumatera Selatan", putusan: 1000, publikasi: 1000 },
        { id: 17, nama: "DILMIL IX 17 PONTIANAK", tinggi: "DILMILTI IX PONTIANAK", provinsi: "Kalimantan Barat", putusan: 1100, publikasi: 1100 },
        { id: 18, nama: "DILMIL X 18 BANJARMASIN", tinggi: "DILMILTI X BANJARMASIN", provinsi: "Kalimantan Selatan", putusan: 1200, publikasi: 1200 },
        { id: 19, nama: "DILMIL XI 19 BALIKPAPAN", tinggi: "DILMILTI XI BALIKPAPAN", provinsi: "Kalimantan Timur", putusan: 1300, publikasi: 1300 },
        { id: 20, nama: "DILMIL XII 20 JAKARTA", tinggi: "DILMILTI XII JAKARTA", provinsi: "DKI Jakarta", putusan: 1400, publikasi: 1400 },
      ]);
  
      const searchQuery = ref("");
      const currentPage = ref(1);
      const itemsPerPage = ref(10);
      const sortBy = ref("nama");
      const sortDesc = ref(false);
  
      const filteredData = computed(() => {
        let data = pengadilanList.value.filter((item) => {
          return (
            item.nama.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            item.tinggi.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            item.provinsi.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            item.putusan.toString().includes(searchQuery.value) ||
            item.publikasi.toString().includes(searchQuery.value)
          );
        });
  
        data = data.sort((a, b) => {
          if (a[sortBy.value] < b[sortBy.value]) return sortDesc.value ? 1 : -1;
          if (a[sortBy.value] > b[sortBy.value]) return sortDesc.value ? -1 : 1;
          return 0;
        });
  
        return data;
      });
  
      const paginatedData = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage.value;
        const end = start + itemsPerPage.value;
        return filteredData.value.slice(start, end);
      });
  
      const totalPages = computed(() => {
        return Math.ceil(filteredData.value.length / itemsPerPage.value);
      });
  
      const totalItems = computed(() => {
        return filteredData.value.length;
      });
  
      const startItem = computed(() => {
        return (currentPage.value - 1) * itemsPerPage.value + 1;
      });
  
      const endItem = computed(() => {
        return Math.min(currentPage.value * itemsPerPage.value, totalItems.value);
      });
  
      const paginationRange = computed(() => {
        const current = currentPage.value;
        const last = totalPages.value;
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
      });
  
      const applyFilters = () => {
        currentPage.value = 1;
      };
  
      const clearFilter = () => {
        searchQuery.value = "";
        applyFilters();
      };
  
      const changePage = (page) => {
        currentPage.value = page;
      };
  
      const nextPage = () => {
        if (currentPage.value < totalPages.value) {
          changePage(currentPage.value + 1);
        }
      };
  
      const prevPage = () => {
        if (currentPage.value > 1) {
          changePage(currentPage.value - 1);
        }
      };
  
      const goToPage = (pageNumber) => {
        if (pageNumber !== "...") {
          changePage(pageNumber);
        }
      };
  
      const sortData = (field) => {
        if (sortBy.value === field) {
          sortDesc.value = !sortDesc.value;
        } else {
          sortBy.value = field;
          sortDesc.value = false;
        }
      };
  
      return {
        searchQuery,
        currentPage,
        itemsPerPage,
        filteredData,
        paginatedData,
        totalPages,
        totalItems,
        paginationRange,
        startItem,
        endItem,
        applyFilters,
        clearFilter,
        changePage,
        nextPage,
        prevPage,
        goToPage,
        sortData,
        sortBy,
        sortDesc,
      };
    },
    data() {
      return {
        items: [
          {
            title: "Direktori",
            disabled: false,
            href: "#",
          },
          {
            title: "Daftar Pengadilan",
            disabled: true,
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .breadcrumb-item {
    color: #8e4202;
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
  .bg-brown-500 {
    background-color: #8e4202 !important;
  }
  .text-white {
    color: white !important;
  }
  </style>
  