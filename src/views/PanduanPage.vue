<template>
    <v-app>
      <NavBar />
      <div class="sm:px-4 md:px-16 pb-4 bg-[#F5F7FA]">
        <v-row>
          <v-col cols="12">
            <div class="flex items-center text-[#8E4202]">
              <v-icon class="mr-2">mdi-home</v-icon>
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
                <h2 class="font-bold text-xl mb-4">Menu dan Cara Penggunaan</h2>
                <div class="bg-white rounded-lg shadow-md p-4">
                  <ul class="space-y-2">
                    <li class="flex items-center cursor-pointer" @click="setPage('home')">
                      <v-icon color="#8E4202">mdi-home</v-icon>
                      <span class="sm:ml-0 md:ml-2">Halaman Utama Website / Beranda</span>
                    </li>
                    <div class="border-b-2 border-gray-300"></div>
                    <li class="space-y-2">
                      <div class="flex items-center cursor-pointer"  @click="setPage('fitur')">
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
                <h2 class="font-bold text-xl mb-4">{{ pageTitle }}</h2>
                <v-card outlined class="shadow-sm rounded-lg">
                  <v-card-text>
                    <div v-if="currentPage === 'home'">
                      <p>Website Direktori Putusan dapat diakses di <a href="https://putusan3.mahkamahagung.go.id/">https://putusan3.mahkamahagung.go.id/</a></p>
                      <p>Halaman utama yang akan ditampilkan adalah sebagai berikut:</p>
                      <img src="path_to_image_1.png" alt="Gambar 1" />
                      <p class="text-gray-400">Gambar 1 - Tampilan Utama Direktori Putusan v3</p>
                      <p>Bagian ini menampilkan daftar Fitur Direktori Putusan dan papan pencarian putusan.</p>
                      <img src="path_to_image_1.png" alt="Gambar 2" />
                      <p class="text-gray-400">Gambar 2 - Tampilan Statistik data dan Putusan</p>
                      <p>Sedangkan pada bagian ini menampilkan statistik data putusan.</p>
                      <img src="path_to_image_1.png" alt="Gambar 3" />
                      <p class="text-gray-400">Gambar 3 - Tampilan Konten Direktori Putusan v3</p>
                      <p class="text-justify">Kemudian pada bagian ini menampilkan konten Direktori Putusan, serta pada bagian paling bawah ditampilkan footer yang berisi tentang informasi Mahkamah Agung, sebagaimana pada gambar :</p>
                      <img src="path_to_image_1.png" alt="Gambar 4" />
                    </div>

                    <div v-else-if="currentPage === 'fitur'">
                      <img src="path_to_image_1.png" alt="Gambar 5" />
                      <p class="text-gray-400">Gambar 2 - Tampilan Statistik data dan Putusan</p>
                      <p class="text-justify">Fitur-fitur pada Direktori Putusan ditampilkan pada bagian atas halaman awal Direktori Putusan, fitur-fitur tersebut antara lain :</p>
                      <ul>1. Beranda</ul>
                      <ul>2. Pencarian</ul>
                      <ul class="list-none">3. Direktori
                        <li class="ml-4">a. Klasifikasi</li>
                        <li class="ml-4">b. Tahun Putus Upload, Register</li>
                        <li class="ml-4">c. Putusan</li>
                        <li class="ml-4">d. Rumusan Kamar</li>
                        <li class="ml-4">e. Yurisprudensi</li>
                        <li class="ml-4">f. Kaidah</li>
                        <li class="ml-4">g. Restatement</li>
                      </ul>
                      <ul>4. Pengadilan</ul>
                      <ul>5. Peraturan</ul>
                      <ul>6. Tentanf</ul>
                    </div>

                    <div v-else-if="currentPage === 'pencarian'">
                      <h3>Fitur Pencarian</h3>
                      <p class="text-justify">Penelusuran informasi putusan dengan metode pencarian (searching) dapat dilakukan dengan 2 cara, yakni :</p>
                      <ul>1. Melalui papan pencarian yang tersedia di halaman awal</ul>
                      <img src="path_to_image_1.png" alt="Gambar 6" />
                      <p class="text-gray-400">Gambar 6 - Tampilan Pencarian Pada Halaman Awal Direktori Putusan v3</p>
                      <ul>2. Melalui Fitur Pencarian</ul>
                      <img src="path_to_image_1.png" alt="Gambar 7" />
                      <p class="text-gray-400">Gambar 7 - Tampilan Menu Pencarian</p>
                      <p class="text-justify">Setelah anda memasukkan kata kunci dan menekan tombol cari, maka mesin pencari Direktori Putusan akan mencari kata-kata tersebut di katalog maupun dokumen putusan yang ada. Namun, jika anda memasukkan lebih dari satu kata, maka mesin pencari akan mencari dan menampilkan katalog/dokumen yang memiliki semua kata-kata tersebut.</p>
                      <br>
                      <p>Sebagai contoh pengguna melakukan pencarian putusan dengan nomor 624K/Pdt.Sus-PHI/2019 maka hasil pencariannya seperti gambar dibawah :</p>
                      <img src="path_to_image_1.png" alt="Gambar 8" />
                      <p class="text-gray-400">Gambar 8 - Hasil Pencarian Putusan</p>
                      <p class="text-justify">Namun, ketika anda memilih satu atau lebih check box dari beberapa kriteria yang tersedia, maka sistem akan menampilkan daftar putusan sesuai kriteria yang anda pilih. Seperti contoh pada gambar :</p>
                      <img src="path_to_image_1.png" alt="Gambar 9" />
                      <p class="text-gray-400">Gambar 9 - Hasil Pencarian Putusan</p>
                    </div>

                    
                    <div v-else-if="currentPage === 'putusan'">
                      <p class="text-justify">Untuk melihat data putusan, Anda dapat mencari berdasarkan Pengadilan, Klasifikasi, Kata kunci (Pencarian), Tahun (Putus, Upload, Register) seperti gambar dibawah :</p>
                      <br>
                      <p>1. Berdasarkan Pengadilan</p>
                      <img src="path_to_image_1.png" alt="Gambar 10" />
                      <p class="text-gray-400">Gambar 10 - Tampilan Utama Direktori Putusan v3</p>
                      <p>2. Berdasarkan Klasifikasi</p>
                      <img src="path_to_image_1.png" alt="Gambar 11" />
                      <p class="text-gray-400">Gambar 11 - Tampilan Utama Direktori Putusan v3</p>
                      <p>3. Berdasarkan Kata Kunci Pencarian</p>
                      <img src="path_to_image_1.png" alt="Gambar 12" />
                      <p class="text-gray-400">Gambar 12 - Tampilan Utama Direktori Putusan v3</p>
                      <p>4. Berdasarkan Tahun Putus</p>
                      <img src="path_to_image_1.png" alt="Gambar 13" />
                      <p class="text-gray-400">Gambar 13 - Tampilan Utama Direktori Putusan v3</p>
                      <p class="text-justify">Kemudian untuk melihat detail putusan yang anda cari, klik nomor putusan. Sistem akan menampilkan detail putusan seperti pada gambar berikut, anda dapat mengunduh file putusan pada link sebelah kanan detail putusan.</p>
                      <img src="path_to_image_1.png" alt="Gambar 14" />
                      <p class="text-gray-400">Gambar 14 - Tampilan Utama Direktori Putusan v3</p>
                    </div>

                    <div v-else-if="currentPage === 'rumusan'">
                      <p class="text-justify">Rumusan Kamar merupakan Fitur yang memuat isi hasil rapat pleno kamar. Rumusan kamar dijadikan acuan Putusan atau Putusan dapat mengacu pada Rumusan Kamar tersebut.</p>
                      <br>
                      <p>Langkah mengakses halaman Rumusan Kamar :</p>
                      <br>
                      <p>1, Pada fitur Direktori, pilih Rumusan Kamar</p>
                      <img src="path_to_image_1.png" alt="Gambar 15" />
                      <p class="text-gray-400">Gambar 15 - Tampilan Utama Direktori Putusan v3</p>
                      <p>2. Pilih daftar Rumusan Kamar</p>
                      <p class="text-justify">Rumusan kamar memiliki Klasifikasi, Anda dapat membuka Rumusan Kamar berdasarkan klasifikasi yang dibutuhkan.</p>
                      <p>3. Klik nomor Rumusan Kamar yang akan dilihat detailnya</p>
                      <img src="path_to_image_1.png" alt="Gambar 16" />
                    </div>
                    <div v-else-if="currentPage === 'kaidah'">
                      <p class="text-justify">Fitur Kaidah Hukum menyajiakn ringkasan Kaidah Hukum yang akan dijadikan pedoman Para Majelis Hukum untuk memutusakan suatu perkara.</p>
                      <br>
                      <p>Langkah mengakses halaman Kaidah Hukum :</p>
                      <p>1. Pada Fitur Direktori pilih Kaidah Hukum</p>
                      <img src="path_to_image_1.png" alt="Gambar 17" />
                      <p class="text-gray-400">Gambar 17 - Tampilan Utama Direktori Putusan v3</p>
                      <p>2. Pilih daftar Kaidah Hukum</p>
                      <img src="path_to_image_1.png" alt="Gambar 18" />
                      <p class="text-gray-400">Gambar 18 - Tampilan Utama Direktori Putusan v3</p>
                      <p>3. Klik nomor Putusan yang akan dilihat Kaidah Hukumnya.</p>
                      <img src="path_to_image_1.png" alt="Gambar 19" />
                      <p class="text-gray-400">Gambar 19 - Tampilan Utama Direktori Putusan v3</p>
                    </div>

                    <div v-else-if="currentPage === 'yurisprudensi'">
                      <p class="text-justify">Fitur Yurisprudensi memuat putusan Majelis Hakim di Mahkamah Agung yang telah mempunyai kekuatan hukum tetap berisi kaidah hukum yang diberlakukan dalam memeriksa dan memutus perkara dalam lingkup Peradilan Pidana, Perdata, Tata Usaha Negara, Agama dan Niaga yang dikualifikasi.</p>
                      <br>
                      <p>Langkah mengakses halaman Yurisprudensi :</p>
                      <p>1. Pada Fitur Direktori pilih Yurisprudensi</p>
                      <img src="path_to_image_1.png" alt="Gambar 20" />
                      <p class="text-gray-400">Gambar 20 - Tampilan Utama Direktori Putusan v3</p>
                      <p>2. Pilih daftar Yuridprudensi</p>
                      <p>Yurisprudensi memiliki Klasifikasi, Anda dapat membuka Yurisprudensi berdasarkan klasifikasi yang dibutuhkan.</p>
                      <img src="path_to_image_1.png" alt="Gambar 21" />
                      <p class="text-gray-400">Gambar 21 - Tampilan Utama Direktori Putusan v3</p>
                      <p>3. Membuka detail Yurisprudensi</p>
                      <img src="path_to_image_1.png" alt="Gambar 22" />
                      <p class="text-gray-400">Gambar 22 - Tampilan Utama Direktori Putusan v3</p>
                      <p>Pada detail Yurisprudensi anda dapat mengunduh file Yurisprudensi pada link download di sebelah kanan detail Yurisprudensi.</p>
                    </div>

                    <div v-else-if="currentPage === 'restatement'">
                      <p>Fitur Restatement menyajikan ringkasan dokumen yang telah dikaji oleh Para Peneliti.</p>
                      <br>
                      <p>Langkah mengakses halaman Restatement</p>
                      <p>1. Pada Fitur Direktori pilih Restatement</p>
                      <img src="path_to_image_1.png" alt="Gambar 23" />
                      <p class="text-gray-400">Gambar 23 - Tampilan Utama Direktori Putusan v3</p>
                      <p>2. Pilih daftar Restatement</p>
                      <p>Restatement memiliki klasifikasi, Anda dapat memilih Resatatement berdasarkan klasifikasinya.</p>
                      <img src="path_to_image_1.png" alt="Gambar 24" />
                      <p class="text-gray-400">Gambar 24 - Tampilan Utama Direktori Putusan v3</p>
                      <p>3. Membuka detail Restatement</p>
                      <img src="path_to_image_1.png" alt="Gambar 25" />
                      <p class="text-gray-400">Gambar 25 - Tampilan Utama Direktori Putusan v3</p>
                      <p>Pada detail Restatement anda dapat mengunduh file Restatement pada link download di sebelah kanan detail Restatement.</p>
                    </div>

                    <div v-else-if="currentPage === 'peraturan'">
                      <p class="text-justify">Fitur Peraturan menyajikan Peraturan Mahkamah Agung Republik Indonesia. Pada fitur ini akan dikembangkan sejarah dari Peraturan. Fitur relasi antar peraturan perundang-undangan dengan tujuan untuk menunjukkan peraturan terkait dari yang lama ke yang terbaru dan dapat membantu untuk mengetahui apakah peraturan yang direferensikan adalah peraturan terbaru atau dicabut atau diubah oleh peraturan lain. Fitur relasi masih dalam pengembangan.</p>
                      <br>
                      <p>Langkah mengakses halaman Peraturan :</p>
                      <p>1. Pada Fitur Direktori pilih Peraturan</p>
                      <img src="path_to_image_1.png" alt="Gambar 26" />
                      <p class="text-gray-400">Gambar 26 - Tampilan Utama Direktori Putusan v3</p>
                      <p>2. Pilih daftar Peraturan</p>
                      <p class="text-justify">Memilih jenis Peraturan, Anda dapat memilih Peraturan berdasarkan jenisnya. Jenis peraturan antara lain : </p>
                      <ul>
                        <li>SEMA</li>
                        <li>PERMA</li>
                        <li>Undang-undang</li>
                        <li>Qanun</li>
                        <li>Peraturan Pemerintah</li>
                        <li>Peraturan Lain-lain</li>
                      </ul>
                      <img src="path_to_image_1.png" alt="Gambar 27" />
                      <p class="text-gray-400">Gambar 27 - Tampilan Utama Direktori Putusan v3</p>
                      <p>3. Membuka detail Peraturan</p>
                      <img src="path_to_image_1.png" alt="Gambar 28" />
                      <p class="text-gray-400">Gambar 28 - Tampilan Utama Direktori Putusan v3</p>
                      <p>Pada detail Peraturan anda dapat mengunduh file Peraturan pada link download di sebelah kanan detail Peraturan.</p>
                    </div>

                    <!-- <p v-else class="text-justify">Revitalisasi Direktori Putusan (RDP) merupakan pengembangan dari Direktori Putusan v2 kedalam Direktori Putusan v3 yang telah diimplementasikan pada server Mahkamah Agung. Fitur-fitur baru yang dihasilkan pada Direktori Putusan v3 diantaranya adalah Putusan, Yurisprudensi, Rumusan Kamar, Restatement, Kaidah Hukum dan Peraturan.</p> -->
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
  