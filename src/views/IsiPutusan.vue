<template>
    <div class="bg-[#F5F7FA]">
    <NavBar />
    <v-container>
    <!-- Breadcrumbs Section -->
    <v-breadcrumbs :items="breadcumbs" item-class="breadcrumb-item" class="text-[#8e4202] pl-0">
        <template v-slot:divider>
        <v-icon class="text-[#8e4202]" icon="mdi-chevron-right"></v-icon>
        </template>
        <template v-slot:prepend>
        <v-icon class="text-[#8e4202]">mdi-home</v-icon>
        </template>
    </v-breadcrumbs>

    <!-- Title Section -->
    <h1 class="text-2xl font-bold">Putusan PN JAKARTA UTARA</h1>
    <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Nomor 1537/Pid.B/2016/PN JKT.UTR</h1>
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
        <div>
        <h3 class="text-xl font-semibold mb-4">Metadata</h3>
        <div
            v-for="(item, index) in items"
            :key="'item-'+index"
            class="flex flex-row gap-4 mb-4">
                <h4 class="text-l font-semibold w-20 mb-4">{{ item.title }}</h4>
                <p class="text-l max-w-max">{{ item.value }}</p>
        </div>
    </div>
        </div>
        <!-- Accordion Sections -->
        <div class="accordion mb-4 border border-gray-300 shadow-md rounded">
        <button class="accordion-header w-full text-left bg-white p-4 rounded-t focus:outline-none flex justify-between items-center" @click="toggleSection(0)">
            <span class="text-gray-800 text-xl font-semibold">Putusan Terkait</span>
            <svg :class="{'transform rotate-180': openSections[0]}" class="w-5 h-5 text-gray-500 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        <div :class="{'open': openSections[0]}" class="accordion-content bg-white rounded-b">
            <p class="p-4 text-justify">Peninjauan Kembali Nomor 11/PK/PID/2018</p>
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
import PopupProgress from "@/components/PopupProgress.vue";

export default {
name: 'YurisprudensiPage',
components: {
    NavBar,
    FooterBar,
    PopupProgress
},
data() {
    return {
    breadcumbs: [
        { title: 'Direktori', href: '#' },
        { title: 'Putusan', href: '#' },
        { title: 'Putusan Biasa', disabled: true }
    ],
    items: [
    {title: 'Nomor', value: '1537/Pid.B/2016/PN JKT.UTR'},
            {title: 'Tingkat Proses', value: 'Pertama'},
            {title: 'Klasifikasi', value: 'Pidana Umum'},
            {title: 'Kata Kunci', value: '1537/Pid.B/2016/PN JKT.UTR'},
            {title: 'Tahun', value: '2017'},
            {title: 'Tanggal Register', value: '1 Desember 2016'},
            {title: 'Lembaga Peradilan', value: 'PN JAKARTA UTARA'},
            {title: 'Hakim Ketua', value: 'H. Dwiarso Budi Santiarto'},
            {title: 'Hakim Anggota', value: 'Jupriyadi, Abdul Rosyad, Didik Wuryanto, I Wayan Wirjana'},
            {title: 'Amar', value: 'HUKUM'},
            {title: 'Tanggal Musyawarah', value: '-'},
            {title: 'Tanggal Dibacakan', value: '9 Mei 2017'},
            {title: 'Abstrak', value: '-'}
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
