<template>
    <div class="bg-[#F5F7FA]">
      <NavBar />
      <div class="bg-[#F5F7FA] container mx-auto p-4">
        <!-- Breadcrumbs Section -->
        <v-breadcrumbs :items="items" item-class="breadcrumb-item" class="breadcrumbs text-[#7d6654]">
        <template v-slot:divider>
          <v-icon class="text-[#8e4202]" icon="mdi-chevron-right"></v-icon>
        </template>
        <template v-slot:prepend>
          <v-icon class="text-[#8e4202]">mdi-home</v-icon>
        </template>
      </v-breadcrumbs>
  
        <!-- Title Section -->
        <h1 class="text-2xl md:text-3xl font-bold mb-4">RSS</h1>
        <hr class="border-b-2 border-gray-800 mb-4">
        
  
        
  
        <!-- Table Section -->
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
                <th class="py-2 px-4 border cursor-pointer" @click="sortData('putusan')">
                  Jumlah Putusan
                  <span v-if="sortBy === 'putusan' && !sortDesc">▲</span>
                  <span v-if="sortBy === 'putusan' && sortDesc">▼</span>
                </th>
                <th class="py-2 px-4 border">Terbaru</th>
                <th class="py-2 px-4 border">Pilihan</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="pengadilan in paginatedData" :key="pengadilan.id">
                <td class="py-2 px-4 border">{{ pengadilan.nama }}</td>
                <td class="py-2 px-4 border">{{ pengadilan.putusan }}</td>
                <td class="py-2 px-4 border text-center">
                  <v-icon class="text-white bg-[#DDC17C]">mdi-rss</v-icon>
                </td>
                <td class="py-2 px-4 border text-center">
                  <v-icon class="text-[#66BB69]">mdi-rss</v-icon>
                </td>
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
        { id: 1, nama: "SEMUA PENGADILAN", putusan: 8340754 },
        { id: 2, nama: "PN PRABUMULIH", putusan: 2046 },
        { id: 3, nama: "PN PAGAR ALAM", putusan: 1220 },
        { id: 4, nama: "PN PALEMBANG", putusan: 1252 },
        { id: 5, nama: "PN SEKAYU", putusan: 803 },
        { id: 6, nama: "PN MUARA ENIM", putusan: 548 },
        { id: 7, nama: "PN LAHAT", putusan: 914 },
        { id: 8, nama: "PN LUBUK LINGAU", putusan: 2752 },
        { id: 9, nama: "PN BATURAJA", putusan: 3530 },
        { id: 10, nama: "PN KAYUAGUNG", putusan: 1027 },
        { id: 11, nama: "PN METRO", putusan: 1000 },
        { id: 12, nama: "PN KOTABUMI", putusan: 1200 },
        { id: 13, nama: "PN GUNUNG SUGIH", putusan: 600 },
        { id: 14, nama: "PN KALIANDA", putusan: 800 },
        { id: 15, nama: "PN TANJUNG KARANG", putusan: 1500 },
        { id: 16, nama: "PN LIWA", putusan: 700 },
        { id: 17, nama: "PN KRUI", putusan: 900 },
        { id: 18, nama: "PN BENGKULU", putusan: 1100 },
        { id: 19, nama: "PN CURUP", putusan: 1300 },
        { id: 20, nama: "PN ARGA MAKMUR", putusan: 1400 },
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
            item.putusan.toString().includes(searchQuery.value)
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
            title: "Informasi",
            disabled: false,
            href: "#",
          },
          {
            title: "RSS",
            disabled: true,
            href: "/rss",
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
  .breadcrumbs {
  font-size: 1rem;
}
  </style>
  