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
    <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Grosse Akta</h1>
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
            class="grid grid-cols-2 gap-4 max-w-md mb-4">
                <h4 class="text-l font-semibold mb-4">{{ item.title }}</h4>
                <p class="text-l">{{ item.value }}</p>
        </div>
    </div>
        </div>
        <!-- Accordion Sections -->
        <div class="accordion mb-4 border border-gray-300 rounded">
        <button class="accordion-header w-full text-left bg-white p-4 rounded-t focus:outline-none flex justify-between items-center" @click="toggleSection(0)">
            <span class="text-gray-800 text-xl font-semibold">Rumusan</span>
            <svg :class="{'transform rotate-180': openSections[0]}" class="w-5 h-5 text-gray-500 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        <div :class="{'open': openSections[0]}" class="accordion-content bg-white rounded-b">
            <p class="p-4">Jaksa sebagai Pengacara Negara tidak dapat mewakili BUMN (Persero) karena BUMN tersebut berstatus badan hukum Privat (vide Pasal 11 Undang-Undang Nomor 19 Tahun 2003 tentang BUMN).</p>
            <br>
            <p class="p-4">Catatan: Rumusan kamar ini telah dianulir oleh rumusan kamar tahun 2014 yang diberlakukan dengan SEMA 04 Tahun 2014</p>
        </div>
        </div>

        <div class="accordion mb-4 border border-gray-300 rounded">
        <button class="accordion-header w-full text-left bg-white p-4 rounded-t focus:outline-none flex justify-between items-center" @click="toggleSection(1)">
            <span class="text-gray-800 text-xl font-semibold">Rumusan Kamar Terkait</span>
            <svg :class="{'transform rotate-180': openSections[1]}" class="w-5 h-5 text-gray-500 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
        <div :class="{'open': openSections[1]}" class="accordion-content bg-white rounded-b">
            <p>PERDATA UMUM/3/SEMA 4 2014</p>
            <p>PERDATA UMUM/6/SEMA 5 2017</p>
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
        { title: 'Rumusan Kamar', href: '/rumusan-kamar' },
        { title: 'Rumusan Kamar Perdata', href: '#' },
        { title: 'PERDATA UMUM/1.g/SEMA 7 2012', disabled: true },
    ],
    items: [
        {title: 'Nomor', value: ': PERDATA UMUM/1.g/SEMA 7 2012'},
        {title: 'Tahun', value: ': Grosse Akta'},
        {title: 'Nomor Sema', value: ': 7 Tahun 2012'},
        {title: 'Klasifikasi', value: ': Rumusan Kamar Perdata > Hukum Acara Perdata > Kewenangan Jaksa Pengacara Negara'},
        {title: 'Kata Kuncu', value: ': Jaksa pengacara negara; Jaksa kuasa BUMN'},
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
