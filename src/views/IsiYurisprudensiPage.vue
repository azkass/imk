<template>
    <div class="bg-[#F5F7FA]">
      <NavBar />
      <v-container>
        <!-- Breadcrumbs Section -->
        <v-breadcrumbs :items="items" item-class="breadcrumb-item" class="text-[#8e4202] pl-0">
          <template v-slot:divider>
            <v-icon class="text-[#8e4202]" icon="mdi-chevron-right"></v-icon>
          </template>
          <template v-slot:prepend>
            <v-icon class="text-[#8e4202]">mdi-home</v-icon>
          </template>
        </v-breadcrumbs>
  
        <!-- Title Section -->
        <div class="flex justify-between items-center mb-4">
          <h1 class="text-2xl font-bold">2/Yur/TUN/2018</h1>
          <div class="flex space-x-2">
            <button @click="showPopup('ZIP')" class="bg-yellow-500 text-white px-4 py-2 rounded-md flex items-center">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" /><span class="material-symbols-outlined">
                folder_zip
                </span> <span class="ml-1">ZIP</span>
            </button>
            <button @click="showPopup('PDF')" class="bg-red-500 text-white px-4 py-2 rounded-md flex items-center">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" /><span class="material-symbols-outlined">
                picture_as_pdf
                </span> <span class="ml-1">PDF</span>
            </button>
            <div class="p-0">
              <PopupProgress v-if="isPopupVisible" :type="downloadType" @close="isPopupVisible = false" />
            </div>
          </div>
        </div>
  
        <hr class="border-b-2 border-gray-800 mb-4">
  
        <!-- Content Section -->
        <div>
          <div class="bg-white shadow-md rounded-md p-4 mb-6">
            <h2 class="text-lg font-semibold mb-2">Metadata</h2>
            <div class="text-sm text-gray-700">
              <div class="mb-2">
                <strong>Tahun:</strong> <span class="ml-64">2018</span>
              </div>
              <div class="mb-2">
                <strong>Nomor Katalog:</strong> <span class="ml-[194px]">2/Yur/TUN/2018</span>
              </div>
              <div class="mb-2">
                <strong>Bidang:</strong> <span class="ml-[248px]">Tata Usaha Negara</span>
              </div>
              <div class="mb-2">
                <strong>Klasifikasi:</strong>
                <a href="#" class="text-[#8e4202] underline ml-[234px]">Tata Usaha Negara &gt;&gt; Kepegawaian &gt;&gt; Pemberhentian Pegawai</a>
              </div>
              <div>
                <strong>Kata Kunci:</strong> <span class="ml-56">pilihan hukum kaidah hukum substantif; kaidah hukum formal</span>
              </div>
            </div>
          </div>
  
          <!-- Accordion Sections -->
          <div class="accordion mb-4 border border-gray-300 rounded">
            <button class="accordion-header w-full text-left bg-white p-4 rounded-t focus:outline-none flex justify-between items-center" @click="toggleSection(0)">
              <span class="text-gray-800 font-medium text-xl">Kaidah Hukum</span>
              <svg :class="{'transform rotate-180': openSections[0]}" class="w-5 h-5 text-gray-500 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div :class="{'open': openSections[0]}" class="accordion-content bg-white rounded-b">
              <p class="p-4">MENGADILI menyatakan terdakwa Ir. BASUKI TJAHAJA PURNAMA alias AHOK terbukti secara sah dan meyakinkan bersalah melakukan tindak pidana Penodaan Agama; Menjatuhkan pidana kepada Terdakwa oleh karena itu dengan pidana penjara selama 2 (dua) Tahun; Memerintahkan agar Terdakwa ditahan; Menetapkan barang bukti yang diajukan oleh Penuntut Umum berupa: Seluruhnya tetap terlampir dan menjadi bagian tidak terpisahkan dari berkas perkara; Membebankan kepada Terdakwa untuk membayar biaya perkara sebesar Rp.5.000,- (lima ribu rupiah);</p>
            </div>
          </div>
  
          <div class="accordion mb-4 border border-gray-300 rounded">
            <button class="accordion-header w-full text-left bg-white p-4 rounded-t focus:outline-none flex justify-between items-center" @click="toggleSection(1)">
              <span class="text-gray-800 font-medium text-xl">Pengantar</span>
              <svg :class="{'transform rotate-180': openSections[1]}" class="w-5 h-5 text-gray-500 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div :class="{'open': openSections[1]}" class="accordion-content bg-white rounded-b">
              <p class="p-4">Konten pengantar di sini.</p>
            </div>
          </div>
  
          <!-- Add more accordion sections as needed -->
  
        </div>
      </v-container>
      <FooterBar />
    </div>
  </template>
  
  <script>
  import FooterBar from "@/components/FooterBar.vue";
  import NavBar from "@/components/NavBar.vue";
  import PopupProgress from '@/components/PopupProgress.vue'

  export default {
    name: 'YurisprudensiPage',
    components: {
      NavBar,
      FooterBar,
      PopupProgress
    },
    data() {
      return {
        items: [
          { title: 'Direktori', href: '/direktori' },
          { title: 'Yurisprudensi', href: '/yurisprudensi' },
          { title: 'Tata Usaha Negara', href: '#' },
          { title: '2/Yur/TUN/2018', disabled: true },
        ],
        openSections: [false, false], // Array to keep track of which sections are open
        isPopupVisible: false,
        downloadType: '',
      };
    },
    methods: {
      toggleSection(index) {
        this.openSections = this.openSections.map((open, i) => (i === index ? !open : open));
      },
      showPopup(type) {
      this.downloadType = type;
      this.isPopupVisible = true;
      },
    }
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  button {
    transition: background-color 0.2s;
  }
  button:hover {
    background-color: #e2e8f0;
  }
  .breadcrumb-item {
    color: #8e4202;
  }
  .accordion-content {
    overflow: hidden;
    transition: max-height 0.3s ease-out, padding 0.3s ease-out;
    max-height: 0;
    padding: 0 1rem; /* Adjust padding-left and padding-right */
  }
  .accordion-content p {
    padding: 0; /* Reset padding to avoid extra space */
  }
  .accordion-content.open {
    max-height: 1000px; /* Arbitrary large value to allow content to expand */
    padding: 1rem; /* Restore padding when open */
  }
  </style>
  