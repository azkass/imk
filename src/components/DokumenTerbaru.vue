<template>
    <div class="bg-[#F5F7FA] sm:px-4 md:px-16">
      <h3 class="sm:text-xl md:text-2xl xl:text-4xl font-medium pb-2">Dokumen Terbaru</h3>
      <hr class="border-black border-2 mb-4">
      <v-card class="elevation-0">
        <v-tabs v-model="selectedTab" bg-color="#F5F7FA" show-arrows>
          <v-tab v-for="(tab, index) in tabs" :key="index" :value="tab">
            {{ tab }}
          </v-tab>
        </v-tabs>

        <!-- Box Rounded -->
        <div v-for="(tab, index) in tabs" :key="'content-' + index" class="">
          <v-list v-show="selectedTab === tab" class="w-full bg-[#F5F7FA]">
            <v-list-item v-for="item in filteredItems(tab)" :key="item.id" class="mb-4 mt-4">
              <v-card class="pa-4 rounded-2xl">
                <div v-if="item.jenisPutusan === 'Putusan Penting'">
                  <div class="flex items-center mb-2 justify-between">
                    <div class="flex items-center">
                      <v-icon color="green">mdi-check-circle</v-icon>
                      <span class="ml-2 text-green-600">Berkekuatan Hukum Tetap</span>
                    </div>
                    <div class="flex justify-end">
                      <div class="bg-[#8e4202] py-1 px-3 rounded-lg text-white text-center">
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
                        <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                          <div>
                            <span class="font-bold text-[#8e4202]">Register:</span> {{ item.registerDate }}
                          </div>
                          <div>
                            <span class="mx-2 hidden sm:inline">|</span>
                            <span class="font-bold text-[#8e4202]">Putus:</span> {{ item.desicionDate }}
                          </div>
                          <div>
                            <span class="mx-2 hidden sm:inline">|</span>
                            <span class="font-bold text-[#8e4202]">Upload:</span> {{ item.uploadData }}
                          </div>
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
                    <div class="bg-[#8e4202] py-1 px-3 rounded-lg text-white text-center">
                      {{ item.jenisPutusan }}
                    </div>
                  </div>
                  <p class="mb-2">{{ item.case }}</p>
                  <div class="mt-4">
                    <div class="flex flex-col">
                      <hr class="border-b-2 border-gray-500 mb-4">
                      <div class="flex justify-between items-center text-gray-600">
                        <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                          <div>
                            <span class="font-bold text-[#8e4202]">Register:</span> {{ item.registerDate }}
                          </div>
                          <div>
                            <span class="mx-2 hidden sm:inline">|</span>
                            <span class="font-bold text-[#8e4202]">Putus:</span> {{ item.desicionDate }}
                          </div>
                          <div>
                            <span class="mx-2 hidden sm:inline">|</span>
                            <span class="font-bold text-[#8e4202]">Upload:</span> {{ item.uploadData }}
                          </div>
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
        </div>

        <div class="flex justify-end items-end pr-4 pb-4 bg-[#F5F7FA]">
            <p @click="navigateToTab" class=" text-[#8e4202] text-lg flex items-center cursor-pointer"> Lihat Selengkapnya 
                
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                <span class="material-symbols-outlined ml-2">
                  arrow_forward
                </span>
                
            </p> 
        </div>

      </v-card>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  export default {
    name: 'PutusanPenting',
    setup() {
        const router = useRouter();
      const selectedTab = ref('Putusan');
      const tabs = [
        'Putusan',
        'Putusan Penting',
        'Kompilasi Kaidah Hukum',
        'Restatement',
        'Rumusan Kamar',
        'Rumusan Rakernas',
        'Yurisprudensi',
      ];
  
      const data = [
        // Contoh data disesuaikan dengan setiap jenis putusan
        {
          id: 2,
          title: 'Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024',
          case: 'PT MEGA AUTO',
          desicionDate: '17-05-2024',
          registerDate: '01-05-2024',
          uploadData: '30-05-2024',
          views: 120,
          downloads: 440,
          jenisPutusan: 'Restatement',
        },
        {
          id: 2,
          title: 'Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024',
          case: 'PT MEGA AUTO',
          desicionDate: '17-05-2024',
          registerDate: '01-05-2024',
          uploadData: '30-05-2024',
          views: 120,
          downloads: 440,
          jenisPutusan: 'Restatement',
        },
        {
          id: 2,
          title: 'Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024',
          case: 'PT MEGA AUTO',
          desicionDate: '17-05-2024',
          registerDate: '01-05-2024',
          uploadData: '30-05-2024',
          views: 120,
          downloads: 440,
          jenisPutusan: 'Restatement',
        },
        {
          id: 1,
          title: 'Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024',
          case: 'PT MEGA AUTO',
          desicionDate: '17-05-2024',
          registerDate: '01-05-2024',
          uploadData: '30-05-2024',
          views: 120,
          downloads: 440,
          jenisPutusan: 'Putusan Penting',
        },
        {
          id: 1,
          title: 'Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024',
          case: 'PT MEGA AUTO',
          desicionDate: '17-05-2024',
          registerDate: '01-05-2024',
          uploadData: '30-05-2024',
          views: 120,
          downloads: 440,
          jenisPutusan: 'Putusan Penting',
        },
        {
          id: 2,
          title: 'Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024',
          case: 'PT MEGA AUTO',
          desicionDate: '17-05-2024',
          registerDate: '01-05-2024',
          uploadData: '30-05-2024',
          views: 120,
          downloads: 440,
          jenisPutusan: 'Putusan Penting',
        },
        {
          id: 2,
          title: 'Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024',
          case: 'PT MEGA AUTO',
          desicionDate: '17-05-2024',
          registerDate: '01-05-2024',
          uploadData: '30-05-2024',
          views: 120,
          downloads: 440,
          jenisPutusan: 'Kompilasi Kaidah Hukum',
        },
        {
          id: 2,
          title: 'Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024',
          case: 'PT MEGA AUTO',
          desicionDate: '17-05-2024',
          registerDate: '01-05-2024',
          uploadData: '30-05-2024',
          views: 120,
          downloads: 440,
          jenisPutusan: 'Kompilasi Kaidah Hukum',
        },
        {
          id: 2,
          title: 'Putusan Mahkamah Agung Nomor 362 K/Pdt.Sus-PHI/2024',
          case: 'PT MEGA AUTO',
          desicionDate: '17-05-2024',
          registerDate: '01-05-2024',
          uploadData: '30-05-2024',
          views: 120,
          downloads: 440,
          jenisPutusan: 'Kompilasi Kaidah Hukum',
        },
        {
          id: 2,
          title: 'Putusan Mahkamah Agung Nomor 363 K/Pdt.Sus-PHI/2024',
          case: 'PT MEGA AUTO 2',
          desicionDate: '18-05-2024',
          registerDate: '02-05-2024',
          uploadData: '31-05-2024',
          views: 220,
          downloads: 540,
          jenisPutusan: 'Putusan',
        },
        {
          id: 2,
          title: 'Putusan Mahkamah Agung Nomor 363 K/Pdt.Sus-PHI/2024',
          case: 'PT MEGA AUTO 2',
          desicionDate: '18-05-2024',
          registerDate: '02-05-2024',
          uploadData: '31-05-2024',
          views: 220,
          downloads: 540,
          jenisPutusan: 'Putusan',
        },
        {
          id: 2,
          title: 'Putusan Mahkamah Agung Nomor 363 K/Pdt.Sus-PHI/2024',
          case: 'PT MEGA AUTO 2',
          desicionDate: '18-05-2024',
          registerDate: '02-05-2024',
          uploadData: '31-05-2024',
          views: 220,
          downloads: 540,
          jenisPutusan: 'Putusan',
        },
        {
            id: 1,
            title: "TATA USAHA NEGARA/G.5/SEMA 7 2012",
            case: "Keabsahan Permohonan,",
            case2: "1. Permohonan Atas Peraturan yang Telah diajukan Permohonan Pengujian sSebelumya Permohonan HAM yang telah diutus NO, karena telah lewat waktu, apabila diajukan kembali maka harus dinyatakan tidak dapat diterima No, karena ne bis in idem 2. ",
            desicionDate: "17-05-2024",
            registerDate: "01-05-2024",
            uploadData: "30-05-2024",
            views: 1200,
            downloads: 440,
            direktori: "Putusan",
            jenisPutusan: "Rumusan Kamar",
            pengadilan: "Mahkamah Agung",
            lembagaPengadilan: "PA Jakarta Pusat",
            klasifikasi: "Pembatalan Perjanjian",
            amar: "Terbukti",
            tingkatProses: "Kasasi",
            tahunPenerbitan:"2021"
          },
          {
            id: 1,
            title: "TATA USAHA NEGARA/G.5/SEMA 7 2012",
            case: "Keabsahan Permohonan,",
            case2: "1. Permohonan Atas Peraturan yang Telah diajukan Permohonan Pengujian sSebelumya Permohonan HAM yang telah diutus NO, karena telah lewat waktu, apabila diajukan kembali maka harus dinyatakan tidak dapat diterima No, karena ne bis in idem 2. ",
            desicionDate: "17-05-2024",
            registerDate: "01-05-2024",
            uploadData: "30-05-2024",
            views: 1200,
            downloads: 440,
            direktori: "Putusan",
            jenisPutusan: "Rumusan Kamar",
            pengadilan: "Mahkamah Agung",
            lembagaPengadilan: "PA Jakarta Pusat",
            klasifikasi: "Pembatalan Perjanjian",
            amar: "Terbukti",
            tingkatProses: "Kasasi",
            tahunPenerbitan:"2021"
          },
          {
          id: 10,
          title: "RAKERNAS/2012/PIDAN/KHUSUS/1",
          case: "hari kerja, tenggang waktu upaya hukum",
          case2:"Mengenai tenggang waktu 14 hari untuk mengajukan permohonan kasasi dan menyerahkan memori kasasi berdasarkan patokan pada hari kalender jika tenggang waktu jatuh pada hari libur dihitung pada hari kerja",
          desicionDate: "17-05-2024",
          registerDate: "01-05-2024",
          uploadData: "05-09-2024",
          views: 700,
          downloads: 300,
          direktori: "Yurisprudensi",
          jenisPutusan: "Rumusan Rakernas",
          pengadilan: "Pengadilan Tata Usaha Negara",
          lembagaPengadilan: "PA Jakarta Timur",
          klasifikasi: "Perdata Agama",
          amar: "Tolak",
          tingkatProses: "Banding",
          tahunPenerbitan:"2021"
        },
        {
          id: 10,
          title: "RAKERNAS/2012/PIDAN/KHUSUS/1",
          case: "hari kerja, tenggang waktu upaya hukum",
          case2:"Mengenai tenggang waktu 14 hari untuk mengajukan permohonan kasasi dan menyerahkan memori kasasi berdasarkan patokan pada hari kalender jika tenggang waktu jatuh pada hari libur dihitung pada hari kerja",
          desicionDate: "17-05-2024",
          registerDate: "01-05-2024",
          uploadData: "05-09-2024",
          views: 700,
          downloads: 300,
          direktori: "Yurisprudensi",
          jenisPutusan: "Rumusan Rakernas",
          pengadilan: "Pengadilan Tata Usaha Negara",
          lembagaPengadilan: "PA Jakarta Timur",
          klasifikasi: "Perdata Agama",
          amar: "Tolak",
          tingkatProses: "Banding",
          tahunPenerbitan:"2021"
        },
        {
          id: 10,
          title: "RAKERNAS/2012/PIDAN/KHUSUS/1",
          case: "hari kerja, tenggang waktu upaya hukum",
          case2:"Mengenai tenggang waktu 14 hari untuk mengajukan permohonan kasasi dan menyerahkan memori kasasi berdasarkan patokan pada hari kalender jika tenggang waktu jatuh pada hari libur dihitung pada hari kerja",
          desicionDate: "17-05-2024",
          registerDate: "01-05-2024",
          uploadData: "05-09-2024",
          views: 700,
          downloads: 300,
          direktori: "Yurisprudensi",
          jenisPutusan: "Rumusan Rakernas",
          pengadilan: "Pengadilan Tata Usaha Negara",
          lembagaPengadilan: "PA Jakarta Timur",
          klasifikasi: "Perdata Agama",
          amar: "Tolak",
          tingkatProses: "Banding",
          tahunPenerbitan:"2021"
        },
        // Tambahkan lebih banyak data sesuai kebutuhan
      ];
  
      const filteredItems = (tab) => {
        return data.filter(item => item.jenisPutusan === tab);
      };

      const navigateToTab = () => {
      const routeMap = {
        'Putusan': '/putusan',
        'Putusan Penting': '/putusan-penting',
        'Kompilasi Kaidah Hukum': '/kompilasi-kaidah-hukum',
        'Restatement': '/restatement',
        'Rumusan Kamar': '/rumusan-kamar',
        'Rumusan Rakernas': '/rumusan-rakernas',
        'Yurisprudensi': '/yurisprudensi',
      };

      const path = routeMap[selectedTab.value];
      if (path) {
        router.push(path);
      }
    };
  
      return {
        selectedTab,
        tabs,
        filteredItems,
        navigateToTab,
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  