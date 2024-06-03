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

      <!-- Content Section -->
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
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                variant="outlined"
                v-field-label = "Direktori"
              ></v-combobox>

              <h2 class="mb-2 text-[17px] font-bold">Pengadilan</h2>
              <v-combobox class="mb-[-15px]" clearable label="Pengadilan"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                variant="outlined"
              ></v-combobox>
              <h2 class="mb-2 text-[17px] font-bold">Daerah</h2>
              <v-combobox class="mb-[-15px]" clearable label="Daerah"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                variant="outlined"
              ></v-combobox>
              <h2 class="mb-2 text-[17px] font-bold">Klasifikasi</h2>
              <v-combobox class="mb-[-15px]" clearable label="Klasifikasi"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                variant="outlined"
              ></v-combobox>
              <h2 class="mb-2 text-[17px] font-bold">Amar</h2>
              <v-combobox class="mb-[-15px]" clearable label="Amar"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                variant="outlined"
              ></v-combobox>
              <h2 class="mb-2 text-[17px] font-bold">Tingkat Proses</h2>
              <v-combobox class="mb-[-15px]" clearable label="Tingkat Proses"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
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
          <v-list-item v-for="(item, index) in putusanList" :key="index" class="mb-4">
            <v-card class=" pa-4 rounded-lg shadow-lg ">
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
                      <span class="font-bold text-[#8e4202]">Putus:</span> {{ item.decisionDate }}
                      <span class="mx-2">|</span>
                      <span class="font-bold text-[#8e4202]">Upload:</span> {{ item.uploadDate }}
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
    </v-container>
    <FooterBar />
  </div>
</template>

<script>
import FooterBar from "@/components/FooterBar.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'PutusanPenting',
  components: {
    NavBar,
    FooterBar
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
      years: ["2021", "2022", "2023", "2024"],
      putusanList: [
        {
          title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
          case: "PT MEGA AUTO FINANCE lawan DENDI HARTAMAN",
          decisionDate: "17-05-2024",
          uploadDate: "30-05-2024",
          views: 440,
          downloads: 440
        },
        {
          title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
          case: "PT MEGA AUTO FINANCE lawan DENDI HARTAMAN",
          decisionDate: "17-05-2024",
          uploadDate: "30-05-2024",
          views: 440,
          downloads: 440
        },
        {
          title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
          case: "PT MEGA AUTO FINANCE lawan DENDI HARTAMAN",
          decisionDate: "17-05-2024",
          uploadDate: "30-05-2024",
          views: 440,
          downloads: 440
        },
        {
          title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
          case: "PT MEGA AUTO FINANCE lawan DENDI HARTAMAN",
          decisionDate: "17-05-2024",
          uploadDate: "30-05-2024",
          views: 440,
          downloads: 440
        },
        {
          title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
          case: "PT MEGA AUTO FINANCE lawan DENDI HARTAMAN",
          decisionDate: "17-05-2024",
          uploadDate: "30-05-2024",
          views: 440,
          downloads: 440
        },
        {
          title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
          case: "PT MEGA AUTO FINANCE lawan DENDI HARTAMAN",
          decisionDate: "17-05-2024",
          uploadDate: "30-05-2024",
          views: 440,
          downloads: 440
        },
        {
          title: "Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024",
          case: "PT MEGA AUTO FINANCE lawan DENDI HARTAMAN",
          decisionDate: "17-05-2024",
          uploadDate: "30-05-2024",
          views: 440,
          downloads: 440
        },
        // Add more items here as needed
      ]
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
</style>
