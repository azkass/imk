<template>
    <v-app>
      <NavBar />
      <div class="sm:px-4 md:px-16 pb-4 bg-[#F5F7FA]">
        <v-row>
          <v-col cols="12">
            <div class="flex items-center mb-4">
              <v-icon class="mr-2" color="#8E4202">mdi-home</v-icon>
              <v-breadcrumbs :items="breadcrumbs">
                <template v-slot:item="props">
                  <v-breadcrumbs-item
                    :disabled="props.item.disabled"
                    :href="props.item.href"
                  >
                    {{ props.item.title }}
                  </v-breadcrumbs-item>
                </template>
              </v-breadcrumbs>
            </div>
            <h1 class="text-2xl font-bold">Panduan</h1>
            <div class="border-b-2 border-black mb-4"></div>
            <v-row>
              <v-col cols="4">
                <h2 class="font-bold text-[18px]">Menu dan Cara Penggunaan</h2>
                <div class="bg-white rounded-lg shadow-md p-4">
                  <ul class="space-y-2">
                    <li class="flex items-center cursor-pointer" @click="setPage('home')">
                      <v-icon color="#8E4202">mdi-home</v-icon>
                      <span class="sm:ml-0 md:ml-2">Halaman Utama Website / Beranda</span>
                    </li>
                    <li class="space-y-2">
                      <div class="flex items-center cursor-pointer " @click="setPage('fitur')">
                        <v-icon color="#8E4202">mdi-home</v-icon>
                        <span class="sm:ml-0 md:ml-2">Fitur-fitur Direktori Keputusan</span>
                      </div>
                      <div class="ml-10">
                        <ul class="space-y-2">
                          <li class="flex items-center cursor-pointer" @click="setPage('pencarian')">
                            <v-icon color="#8E4202">mdi-magnify</v-icon>
                            <span class="sm:ml-0 md:ml-2">Pencarian</span>
                          </li>
                          <li class="flex items-center cursor-pointer" @click="setPage('putusan')">
                            <v-icon color="#8E4202">mdi-file-document</v-icon>
                            <span class="sm:ml-0 md:ml-2">Halaman Putusan</span>
                          </li>
                          <li class="flex items-center cursor-pointer" @click="setPage('rumusan')">
                            <v-icon color="#8E4202">mdi-file-document-outline</v-icon>
                            <span class="sm:ml-0 md:ml-2">Halaman Rumusan Kamar</span>
                          </li>
                          <li class="flex items-center cursor-pointer" @click="setPage('kaidah')">
                            <v-icon color="#8E4202">mdi-scale-balance</v-icon>
                            <span class="sm:ml-0 md:ml-2">Halaman Kaidah Hukum</span>
                          </li>
                          <li class="flex items-center cursor-pointer" @click="setPage('yurisprudensi')">
                            <v-icon color="#8E4202">mdi-book-open-outline</v-icon>
                            <span class="sm:ml-0 md:ml-2">Halaman Yurisprudensi</span>
                          </li>
                          <li class="flex items-center cursor-pointer" @click="setPage('restatement')">
                            <v-icon color="#8E4202">mdi-book-outline</v-icon>
                            <span class="sm:ml-0 md:ml-2">Halaman Restatement</span>
                          </li>
                          <li class="flex items-center cursor-pointer" @click="setPage('peraturan')">
                            <v-icon color="#8E4202">mdi-gavel</v-icon>
                            <span class="sm:ml-0 md:ml-2">Halaman Peraturan</span>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </v-col>
              <v-col cols="8">
                <h2 class="text-[18px] font-bold">{{ pageTitle }}</h2>
                <v-card outlined class="shadow-sm">
                  <v-card-text>
                    <div v-if="currentPage === 'home'">
                      <p>Website Direktori Putusan dapat diakses di <a href="https://putusan3.mahkamahagung.go.id/">https://putusan3.mahkamahagung.go.id/</a></p>
                      <p>Halaman utama yang akan ditampilkan adalah sebagai berikut:</p>
                      <img src="path_to_image_1.png" alt="Gambar 1" />
                      <p>Gambar 1 - Tampilan Utama Direktori Putusan v3</p>
                    </div>
                    <div v-else-if="currentPage === 'pencarian'">
                      <p>Revitalisasi Direktor Putusan (RDP) merupakan pengembangan dari Direktor Putusan v2 ke dalam Direktor Putusan v3 yang telah diimplementasikan pada server Mahkamah Agung. Fitur-fitur baru yang dihasilkan pada Direktor Putusan v3 diantaranya adalah Putusan, Yurisprudensi, Rumusan Kamar, Restatement, Kaidah Hukum dan Peraturan.</p>
                    </div>
                    <!-- Add similar blocks for other pages -->
                    <p v-else class="text-justify">Revitalisasi Direktori Putusan (RDP) merupakan pengembangan dari Direktori Putusan v2 kedalam Direktori Putusan v3 yang telah diimplementasikan pada server Mahkamah Agung. Fitur-fitur baru yang dihasilkan pada Direktori Putusan v3 diantaranya adalah Putusan, Yurisprudensi, Rumusan Kamar, Restatement, Kaidah Hukum dan Peraturan.</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <FooterBar />
    </v-app>
  </template>
  
  <script>
  import FooterBar from "@/components/FooterBar.vue";
import NavBar from "@/components/NavBar.vue";
  
  export default {
    name: "PanduanPage",
    components: {
      NavBar,
      FooterBar
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
            title: "Panduan",
            disabled: true,
            href: "/rss",
          },
        ],
      };
    },
    computed: {
      pageTitle() {
        switch (this.currentPage) {
          case 'home': return 'Halaman Utama Website atau Beranda';
          case 'fitur': return 'Fitur-fitur Direktori Keputusan'
          case 'pencarian': return 'Pencarian';
          case 'putusan': return 'Halaman Putusan';
          case 'rumusan': return 'Halaman Rumusan Kamar';
          case 'kaidah': return 'Halaman Kaidah Hukum';
          case 'yurisprudensi': return 'Halaman Yurisprudensi';
          case 'restatement': return 'Halaman Restatement';
          case 'peraturan': return 'Halaman Peraturan';
          default: return 'Direktori Putusan';
        }
      }
    },
    methods: {
      setPage(page) {
        this.currentPage = page;
      }
    }
  };
  </script>
  
  <style scoped>
  .v-container {
    padding-top: 16px;
  }
  </style>
  