<template>
    <div class="bg-[#F5F7FA]">
      <NavBar />
      <v-container>
        <!-- Breadcrumbs Section -->
        <v-breadcrumbs :items="breadcumbs" item-class="breadcrumb-item" class="text-[#8e4202] pl-0">
          <template v-slot:divider>
            <v-icon class="text-[#8e4202]">mdi-chevron-right</v-icon>
          </template>
          <template v-slot:prepend>
            <v-icon class="text-[#8e4202]">mdi-home</v-icon>
          </template>
        </v-breadcrumbs>
  
        <!-- Title Section -->
        <div class="flex justify-between items-center mb-4">
          <h1 class="text-2xl font-bold">Undang-Undang Nomor 19 Tahun 2000</h1>
          <div class="flex space-x-2">
            <button class="bg-yellow-500 text-white px-4 py-2 rounded-md flex items-center">
              <v-icon class="mr-2">mdi-zip-box</v-icon> ZIP
            </button>
            <button class="bg-red-500 text-white px-4 py-2 rounded-md flex items-center">
              <v-icon class="mr-2">mdi-file-pdf</v-icon> PDF
            </button>
          </div>
        </div>
        <hr class="border-b-2 border-gray-800 mb-4">
  
        <!-- Content Section -->
        <div>
          <div class="bg-white shadow-md rounded-md p-4 mb-6">
            <h3 class="text-xl font-semibold mb-4">Metadata</h3>
            <div v-for="(item, index) in items" :key="'item-'+index" class="flex flex-row gap-4 mb-4">
              <h4 class="text-l font-semibold w-20 mb-4">{{ item.title }}</h4>
              <p class="text-l max-w-max">{{ item.value }}</p>
            </div>
          </div>
  
          <!-- Timeline Section -->
          <div class="timeline-container relative">
            <div class="timeline-line absolute left-1/2 transform -translate-x-1/2 h-full bg-black"></div>
            <div v-for="(event, index) in events" :key="index" class="timeline-item mb-8 flex w-full">
              <div v-if="index % 2 === 0" class="timeline-content-left w-5/12 flex justify-end pr-8 ml-[70px]">
                <div class="bg-yellow-200 p-4 rounded-md shadow-md w-full">
                  <h3 class="font-bold">{{ event.title }}</h3>
                  <p>{{ event.description }}</p>
                </div>
                <div class="w-2/12 text-center flex items-center justify-center">
                <div class="bg-[#8e4202] text-white py-4 px-8 rounded-md shadow-md">
                  <span class="date-text">{{ event.year }}</span>
                </div>
              </div>
              </div>
              <div v-if="index % 2 === 1" class="w-5/12 flex justify-start pl-8 mr-[70px]">
                <div class="w-2/12 text-center flex items-center justify-center">
                  <div class="bg-[#8e4202] text-white p-2 rounded-md shadow-md">
                    <span class="date-text">{{ event.year }}</span>
                  </div>
              </div>
                <div class="bg-yellow-200 p-4 rounded-md shadow-md w-full">
                  <h3 class="font-bold">{{ event.title }}</h3>
                  <p>{{ event.description }}</p>
                </div>
                
              </div>
            </div>
          </div>
  
          <!-- Accordion Sections -->
          <div class="accordion mb-4 border border-gray-300 rounded">
            <button class="accordion-header w-full text-left bg-white p-4 rounded-t focus:outline-none flex justify-between items-center" @click="toggleSection(0)">
              <span class="text-gray-800 text-xl font-semibold">Materi Muatan Pokok</span>
              <svg :class="{'transform rotate-180': openSections[0]}" class="w-5 h-5 text-gray-500 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div :class="{'open': openSections[0]}" class="accordion-content bg-white rounded-b">
              <p class="p-4 text-justify">
                Pajak sebagai sumber utama penerimaan negara perlu terus ditingkatkan sehingga pembangunan nasional dapat dilaksanakan dengan kemampuan sendiri berdasarkan prinsip kemandirian. peningkatan kesadaran masyarakat di bidang perpajakan harus ditunjang dengan iklim yang mendukung peningkatan peran aktif masyarakat serta pemahaman akan hak dan kewajibannya dalam melaksanakan peraturan perundang-undangan perpajakan.
                <br><br>
                Peran serta masyarakat Wajib Pajak dalam memenuhi kewajiban pembayaran pajak berdasarkan ketentuan perpajakan sangat diharapkan. Namun, dalam kenyataannya masih dijumpai adanya tunggakan pajak sebagai akibat tidak dilunasinya utang pajak sebagaimana mestinya.
                <br><br>
                Perkembangan jumlah tunggakan pajak dari waktu ke waktu menunjukkan jumlah yang semakin besar. Peningkatan jumlah tunggakan pajak ini masih belum dapat diimbangi dengan kegiatan pencairannya, namun demikian secara umum penerimaan di bidang pajak semakin meningkat. Terhadap tunggakan pajak dimaksud perlu dilaksanakan tindakan penagihan pajak yang mempunyai kekuatan hukum yang memaksa.
                <br><br>
                Kepatuhan Wajib Pajak dalam membayar pajak merupakan posisi strategis dalam peningkatan penerimaan pajak. Dengan demikian pengkajian terhadap faktor-faktor yang dapat mempengaruhi kepatuhan Wajib Pajak sangat perlu mendapatkan perhatian. Sebagaimana dikemukakan di atas, di dalam sistem self-assessment yang berlaku sekarang ini maka penagihan pajak yang dilaksanakan secara konsisten dan berkesinambungan merupakan wujud law enforcement untuk meningkatkan kepatuhan yang menimbulkan aspek psikologis bagi Wajib Pajak.
                <br><br>
                Tindakan penagihan pajak yang selama ini dilaksanakan adalah berdasarkan pada Undang-undang Nomor 19 Tahun 1997 tentang Penagihan Pajak dengan Surat Paksa. Dengan undang-undang penagihan pajak yang demikian itu diharapkan dapat memberikan penekanan yang lebih pada keseimbangan antara kepentingan masyarakat Wajib Pajak dan kepentingan negara. Keseimbangan kepentingan dimaksud berupa pelaksanaan hak dan kewajiban oleh kedua belah pihak yang tidak berat sebelah atau tidak memihak, adil, serasi, dan selaras dalam wujud tata aturan yang jelas dan sederhana serta memberikan kepastian hukum.
                <br><br>
                Sejalan dengan perkembangan perekonomian Indonesia saat ini dan didukung dengan semangat reformasi, perlu kiranya dilakukan pembaharuan undang-undang penagihan pajak, dengan dilandasi pokok-pokok pikiran sebagai berikut:
                <br><br>
                Memperhatikan ketentuan perundang-undangan lain, seperti Undang-undang Nomor 22 Tahun 1999 tentang Pemerintahan Daerah, Undang-undang Nomor 25 Tahun 1999 tentang Perimbangan Keuangan antara Pemerintah Pusat dan Daerah;
                <br><br>
                Menegakkan keadilan;
                <br><br>
                Memberikan perlindungan hukum, baik kepada Penanggung Pajak maupun pihak ketiga berupa hak untuk mengajukan gugatan; dan
                <br><br>
                Melaksanakan law enforcement secara konsisten dengan berdasar pada jadwal waktu penagihan yang telah ditentukan.
                <br><br>
                Beberapa pokok perubahan yang menjadi perhatian dan pembaharuan undang-undang penagihan pajak ini adalah sebagai berikut:
                <br><br>
                Mempertegas proses pelaksanaan penagihan pajak dengan menambahkan ketentuan penerbitan Surat Teguran, Surat Peringatan dan surat lain yang sejenis sebelum Surat Paksa dilaksanakan;
                <br><br>
                Mempertegas jangka waktu pelaksanaan penagihan aktif;
                <br><br>
                Mempertegas pengertian Penanggung Pajak yang meliputi juga komisaris, pemegang saham, pemilik modal;
                <br><br>
                Menaikkan nilai peralatan usaha yang dikecualikan dari penyitaan dalam rangka menjaga kelangsungan usaha Penanggung Pajak;
                <br><br>
                Menambah jenis barang yang penjualannya dikecualikan dari lelang;
                <br><br>
                Mempertegas besarnya biaya penagihan pajak, yang didasarkan atas prosentase tertentu dari hasil penjualan;
                <br><br>
                Mempertegas bahwa pengajuan keberatan atas permohonan banding oleh Wajib Pajak tidak menunda pembayaran dan pelaksanaan penagihan pajak;
                <br><br>
                Memberi kemudahan pelaksanaan lelang dengan cara memberi batasan nilai barang yang diumumkan tidak melalui media massa dalam rangka efisiensi;
                <br><br>
                Memperjelas hak Penanggung Pajak untuk memperoleh ganti rugi dan pemulihan nama baik dalam hal gugatannya dikabulkan; dan
                <br><br>
                Mempertegas pemberian sanksi pidana kepada pihak yang sengaja mencegah, menghalang-halangi atau menggagalkan pelaksanaan penagihan pajak.
              </p>
            </div>
          </div>
        </div>
      </v-container>
      <FooterBar />
    </div>
  </template>
  
  <script>
  import FooterBar from "@/components/FooterBar.vue";
import NavBar from "@/components/NavBar.vue";
  
  export default {
    name: 'YurisprudensiPage',
    components: {
      NavBar,
      FooterBar
    },
    data() {
      return {
        breadcumbs: [
          { title: 'Direktori', href: '#' },
          { title: 'Peraturan', href: '#' },
          { title: 'Hukum Materil', href: '#' },
          { title: '19 Tahun 2000', disabled: true },
        ],
        items: [
          { title: 'Jenis', value: ': Undang-Undang' },
          { title: 'Nomor', value: ': 19 Tahun 2000' },
          { title: 'Tahun', value: ': 2000' },
          { title: 'Tentang', value: ': Perubahan Atas Undang-Undang Nomor 19 Tahun 1997 Tentang Penagihan Pajak Dengan Surat Paksa' },
          { title: 'Klasifikasi', value: ': Undang-Undang >> Hukum Materiil >> TUN Pajak' }
        ],
        events: [
          {
            title: 'Putusan Mahkamah Konstitusi No 012-016-019/PUU-IV/2006 Tahun 2006',
            description: 'Menyatakan tidak mempunyai kekuatan hukum mengikat untuk Pasal tertentu Undang-Undang No 30 Tahun 2002 ...',
            year: '2002'
          },
          {
            title: 'Undang-Undang No 46 Tahun 2009',
            description: 'Mencabut sebagian Pasal Undang-Undang No 30 Tahun 2002 tentang Komisi Pemberantasan Tindak Pidana Korupsi ...',
            year: '2002'
          },
          {
            title: 'Putusan Mahkamah Konstitusi No 133/PUU-VII/2009 Tahun 2009',
            description: 'Menyetujui institusionalisasi Peraturan Pemerintah Pengganti Undang-Undang ...',
            year: '2002'
          }
        ],
        openSections: [false, false] // Array to keep track of which sections are open
      };
    },
    methods: {
      toggleSection(index) {
        this.openSections = this.openSections.map((open, i) => (i === index ? !open : open));
      }
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
  .timeline-container {
    position: relative;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .timeline-line {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    background-color: #000;
    height: 100%;
  }
  .timeline-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1rem;
    position: relative;
  }
  .timeline-item .timeline-date {
    flex-shrink: 0;
  }
  .timeline-content-left {
    order: 1;
    width: 45%;
    padding-right: 1rem;
    display: flex;
    justify-content: flex-end;
  }
  /* .timeline-content-right {
    order: 3;
    width: 45%;
    padding-left: 1rem;
    display: flex;
    justify-content: flex-start;
  } */
  .timeline-date {
    order: 2;
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8e4202;
    color: white;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    font-weight: bold;
  }
  .timeline-content-left .bg-yellow-200,
  .timeline-content-right .bg-yellow-200 {
    width: 100%;
    padding: 1rem;
    border-radius: 8px;
  }
  </style>
  