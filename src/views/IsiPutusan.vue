<template>
    <NavBar />
    <div class="bg-[#F5F7FA] px-15 pb-4">
        <v-breadcrumbs :items="links" item-class="breadcrumb-item" class="breadcrumbs text-[#8e4202] pl-0">
            <template v-slot:divider>
            <v-icon class="text-[#8e4202]" icon="mdi-chevron-right"></v-icon>
            </template>
            <template v-slot:prepend>
            <v-icon class="text-[#8e4202]">mdi-home</v-icon>
            </template>
        </v-breadcrumbs>
        <h1 class="text-4xl font-semibold mt-4">Putusan PN JAKARTA UTARA</h1>
        <h1 class="text-4xl font-semibold mb-4">Nomor 1537/Pid.B/2016/PN JKT.UTR</h1>
        <hr class="border-black border-2">
        <p class="my-4">9 Mei 2017 — Ir. BASUKI TJAHAJA PURNAMA alias AHOK</p>

        <div class="pl-4">
            <h3 class="text-xl font-semibold mb-4">Metadata</h3>
            <div
                v-for="(item, index) in items"
                :key="'item-'+index"
                class="grid grid-cols-2 gap-4 max-w-md mb-4">
                    <h4 class="text-xl font-semibold">{{ item.title }}</h4>
                    <p>{{ item.value }}</p>
            </div>
        </div>
        <div 
            v-for="(list, index) in lists"
            :key="'list-'+index"
            class="bg-white rounded-xl shadow-md mb-4">
                <h4 class="text-xl font-semibold py-4 pl-4">{{ list.title }}</h4>
                <hr class="border-black border-2">
                <p class="py-4 pl-4">{{ list.value }}</p>
        </div>
    </div>
    <FooterBar />
</template>

<script>
    import NavBar from "@/components/NavBar.vue";
    import FooterBar from "@/components/FooterBar.vue";
    export default {
        name: 'IsiPutusan',
        components: {
            NavBar, FooterBar
        },
        data: () => ({
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
        lists: [
            {title: 'Abstrak', value: '-'},
            {title: 'Kaidah', value: '-'},
            {title: 'Catatan Amar', value: '-'},
            {title: 'Putusan Terkait', value: 'Peninjauan Kembali Nomor 11/PK/PID/2018'},
        ],
        links: [
            {title:'Direktori'},
            {title:'Putusan'},
            {title: 'Putusan Biasa'}
        ]
        }),
    }
</script>