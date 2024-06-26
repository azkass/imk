<template>
  <div class="bg-[#F5F7FA]">
    <NavBar />
    <v-container>
      <!-- Breadcrumbs Section -->
      <v-breadcrumbs :items="breadcrumbs" item-class="breadcrumb-item" class="text-[#8e4202] pl-0">
        <template v-slot:divider>
          <v-icon class="text-[#8e4202]" icon="mdi-chevron-right"></v-icon>
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
          <div>
            <h3 class="text-xl font-semibold mb-4">Metadata</h3>
            <div v-for="(item, index) in items" :key="'item-'+index" class="flex flex-row gap-4 mb-4">
              <h4 class="text-l font-semibold w-20 mb-4">{{ item.title }}</h4>
              <p class="text-l max-w-max">{{ item.value }}</p>
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
              Pajak sebagai sumber utama penerimaan negara perlu terus ditingkatkan sehingga pembangunan nasional dapat dilaksanakan dengan kemampuan sendiri berdasarkan prinsip kemandirian. peningkatan kesadaran masyarakat di bidang perpajakan harus ditunjang dengan iklim yang mendukung peningkatan peran aktif masyarakat serta pemahaman akan hak dan kewajibannya dalam melaksanakan peraturan perundang- undangan perpajakan.

              Peran serta masyarakat Wajib Pajak dalam memenuhi kewajiban pembayaran pajak berdasarkan ketentuan perpajakan sangat diharapkan. Namun, dalam kenyataannya masih dijumpai adanya tunggakan pajak sebagai akibat tidak dilunasinya utang pajak sebagaimana mestinya.

              Perkembangan jumlah tunggakan pajak dari waktu ke waktu menunjukkan jumlah yang semakin besar. Peningkatan jumlah tunggakan pajak ini masih belum dapat diimbangi dengan kegiatan pencairannya, namun demikian secara umum penerimaan di bidang pajak semakin meningkat. Terhadap tunggakan pajak dimaksud perlu dilaksanakan tindakan penagihan pajak yang mempunyai kekuatan hukum yang memaksa.

              Kepatuhan Wajib Pajak dalam membayar pajak merupakan posisi strategis dalam peningkatan penerimaan pajak. Dengan demikian pengkajian terhadap faktor-faktor yang dapat mempengaruhi kepatuhan Wajib Pajak sangat perlu mendapatkan perhatian. Sebagaimana dikemukakan di atas, di dalam sistem selfassessment yang berlaku sekarang ini maka penagihan pajak yang dilaksanakan secara konsisten dan berkesinambungan merupakan wujud law enforcement untuk meningkatkan kepatuhan yang menimbulkan aspek psikologis bagi Wajib Pajak.

              Tindakan penagihan pajak yang selama ini dilaksanakan adalah berdasarkan pada Undang-undang Nomor 19 Tahun 1997 tentang Penagihan Pajak dengan Surat Paksa. Dengan undang-undang penagihan pajak yang demikian itu diharapkan dapat memberikan penekanan yang lebih pada keseimbangan antara kepentingan masyarakat Wajib Pajak dan kepentingan negara. Keseimbangan kepentingan dimaksud berupa pelaksanaan hak dan kewajiban oleh kedua belah pihak yang tidak berat sebelah atau tidak memihak, adil, serasi, dan selaras dalam wujud tata aturan yang jelas dan sederhana serta memberikan kepastian hukum.

              Sejalan dengan perkembangan perekonomian Indonesia saat ini dan didukung dengan semangat reformasi, perlu kiranya dilakukan pembaharuan undang-undang penagihan pajak, dengan dilandasi pokok-pokok pikiran sebagai berikut:
              Memperhatikan ketentuan perundang-undangan lain, seperti Undang-undang Nomor 22 Tahun 1999 tentang Pemerintahan Daerah, Undang-undang Nomor 25 Tahun 1999 tentang Perimbangan Keuangan antara Pemerintah Pusat dan Daerah;
              Menegakkan keadilan;
              Memberikan perlindungan hukum, baik kepada Penanggung Pajak maupun pihak ketiga berupa hak untuk mengajukan gugatan; dan
              Melaksanakan law enforcement secara konsisten dengan berdasar pada jadwal waktu penagihan yang telah ditentukan.

              Beberapa pokok perubahan yang menjadi perhatian dan pembaharuan undang-undang penagihan pajak ini adalah sebagai berikut:
              Mempertegas proses pelaksanaan penagihan pajak dengan menambahkan ketentuan penerbitan Surat Teguran, Surat Peringatan dan surat lain yang sejenis sebelum Surat Paksa dilaksanakan;
              Mempertegas jangka waktu pelaksanaan penagihan aktif;
              Mempertegas pengertian Penanggung Pajak yang meliputi juga komisaris, pemegang saham, pemilik modal;
              Menaikkan nilai peralatan usaha yang dikecualikan dari penyitaan dalam rangka menjaga kelangsungan usaha Penanggung Pajak;
              Menambah jenis barang yang penjualannya dikecualikan dari lelang;
              Mempertegas besarnya biaya penagihan pajak, yang didasarkan atas prosentase tertentu dari hasil penjualan;
              Mempertegas bahwa pengajuan keberatan atas permohonan banding oleh Wajib Pajak tidak menunda pembayaran dan pelaksanaan penagihan pajak;
              Memberi kemudahan pelaksanaan lelang dengan cara memberi batasan nilai barang yang diumumkan tidak melalui media massa dalam rangka efisiensi;
              Memperjelas hak Penanggung Pajak untuk memperoleh ganti rugi dan pemulihan nama baik dalam hal gugatannya dikabulkan; dan
              Mempertegas pemberian sanksi pidana kepada pihak yang sengaja mencegah, menghalang-halangi atau menggagalkan pelaksanaan penagihan pajak.
            </p>
          </div>
        </div>

        <!-- Timeline Section -->
        <div class="relative text-gray-700 antialiased text-sm font-semibold">
          <!-- Vertical bar running through middle -->
          <div class="absolute w-1 bg-gray-300 h-full left-1/2 transform -translate-x-1/2"></div>
          
          <div v-for="(entry, index) in timeline" :key="index" class="mt-6 sm:mt-0 sm:mb-12">
            <div class="flex justify-between items-center w-full mx-auto">
              <div class="w-full sm:w-1/2 sm:pr-8">
                <div class="bg-[#ffebc5] border-l-4 border-yellow-500 text-gray-700 p-4 rounded-md shadow-md">
                  <h3 class="font-semibold">{{ entry.title }}</h3>
                  <p class="mt-2">{{ entry.description }}</p>
                </div>
              </div>
              <div class="absolute flex items-center justify-center w-8 h-8 bg-yellow-500 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-4 sm:-translate-y-0">
                <span class="text-white font-semibold">{{ entry.date }}</span>
              </div>
              <!-- <div class="hidden sm:block w-1/2">
                <div class="timeline-date right">{{ entry.date }}</div>
              </div> -->
            </div>
            <div class="flex justify-between items-center w-full mx-auto">
              <div class="hidden sm:block w-1/2">
                <div class="timeline-date left">{{ entry.date }}</div>
              </div>
              <div class="w-full sm:w-1/2 sm:pl-8">
                <div class="bg-[#ffebc5] border-l-4 border-yellow-500 text-gray-700 p-4 rounded-md shadow-md">
                  <h3 class="font-semibold">{{ entry.title }}</h3>
                  <p class="mt-2">{{ entry.description }}</p>
                </div>
              </div>
            </div>
            <div class="absolute flex items-center justify-center w-8 h-8 bg-yellow-500 rounded-full left-1/2 transform -translate-x-1/2 -translate-y-4 sm:-translate-y-0">
              <span class="text-white font-semibold">{{ entry.date }}</span>
            </div>
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
      breadcrumbs: [
        { title: 'Direktori', href: '#' },
        { title: 'Peraturan', href: '#' },
        { title: 'Hukum Materil', href: '#' },
        { title: '19 Tahun 2000', disabled: true },
      ],
      items: [
        {title: 'Jenis', value: ': Undang-Undang'},
        {title: 'Nomor', value: ': 19 Tahun 2000'},
        {title: 'Tahun', value: ': 2000'},
        {title: 'Tentang', value: ': Perubahan Atas Undang-Undang Nomor 19 Tahun 1997 Tentang Penagihan Pajak Dengan Surat Paksa'},
        {title: 'Klasifikasi', value: ': Undang-Undang >> Hukum Materiil >> TUN Pajak'}
      ],
      openSections: [false], // Array to keep track of which sections are open
      timeline: [
        {
          date: '2006',
          title: 'Putusan Mahkamah Konstitusi No 012-016-019/PUU-IV/2006 Tahun 2006',
          description: `Menyatakan tidak mempunyai kekuatan hukum mengikat untuk Pasal tertentu Undang-Undang No 30 Tahun 2002
          pasal : 53; varian : Menyatakan Pasal 53 Undang-Undang Nomor 30 Tahun 2002 tentang Komisi Pemberantasan Tindak Pidana Korupsi (Lembaran Negara Republik Indonesia Tahun 2002 Nomor 137, Tambahan Lembaran Negara Republik Indonesia Nomor 4250) tetap mempunyai kekuatan hukum mengikat sampai diadakan perubahan paling lambat 3 (tiga) tahun terhitung sejak putusan ini diucapkan;`
        },
        {
          date: '2009',
          title: 'Undang-Undang No 46 Tahun 2009',
          description: `Mencabut sebagian Pasal Undang-Undang No 30 Tahun 2002
          pasal : Pasal 53-Pasal 62; varian : Pada saat Undang-Undang ini mulai berlaku, ketentuan Pasal 53 sampai dengan Pasal 62 dari Bab VII mengenai pemeriksaan di sidang pengadilan yang diatur dalam Undang-Undang Nomor 30 Tahun 2002 tentang Komisi Pemberantasan Tindak Pidana Korupsi (Lembaran Negara Republik Indonesia Tahun 2002 Nomor 137, Tambahan Lembaran Negara Republik Indonesia Nomor 4250) dicabut dan dinyatakan tidak berlaku;`
        }
      ]
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

.timeline {
  position: relative;
  margin: 20px 0;
  padding: 0 20px;
  list-style: none;
}

.timeline:before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #8e4202;
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 20px;
}

.timeline-left .timeline-content {
  margin-right: 50%;
  padding-left: 20px;
  text-align: left;
}

.timeline-right .timeline-content {
  margin-left: 50%;
  padding-right: 20px;
  text-align: right;
}

.timeline-date.left {
  position: absolute;
  right: -60px;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
  color: #8e4202;
}

.timeline-date.right {
  position: absolute;
  left: -60px;
  top: 50%;
  transform: translateY(-50%);
  font-weight: bold;
  color: #8e4202;
}

.timeline-content {
  padding: 10px 20px;
  background-color: #ffebc5;
  border-left: 4px solid #e5a200;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.timeline-content h4 {
  margin-top: 0;
  color: #8e4202;
}

.timeline-content p {
  margin-bottom: 0;
  text-align: justify;
}
</style>
