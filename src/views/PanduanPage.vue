<template>
    <NavBar />
    <div class="bg-[#F5F7FA] px-8 pb-8">
    <v-breadcrumbs :items="breadcumbs" item-class="breadcrumb-item" class="text-[#8e4202] pl-0">
        <template v-slot:divider>
        <v-icon class="text-[#8e4202]" icon="mdi-chevron-right"></v-icon>
        </template>
        <template v-slot:prepend>
        <v-icon class="text-[#8e4202]">mdi-home</v-icon>
        </template>
    </v-breadcrumbs>
    <div class="">
        <h1 class="text-4xl font-semibold my-4">Panduan</h1>
        <hr class="border-black border-2 mb-4">
        <div class="grid grid-cols-2 gap-4">
            <div>
                <h2 class="text-2xl font-semibold mb-4">Menu dan Cara Penggunaan</h2>
                <div class="bg-white rounded-lg">
                    <div class="px-4 py-2">
                        <h3 class="text-lg font-semibold">Halaman Utama</h3>
                    </div>
                    <hr class="border-brown border-1">
                    <div class="pl-4 pt-2">
                        <h3 class="text-lg font-semibold">Fitur-fitur Direktori Keputusan</h3>
                    </div>
                    <div class="pl-8 py-2">
                        <h3 class="text-lg font-semibold py-1">Pencarian</h3>
                        <h3 class="text-lg font-semibold py-1">Halaman Putusan</h3>
                        <h3 class="text-lg font-semibold py-1">Halaman Rumusan Kamar</h3>
                        <h3 class="text-lg font-semibold py-1">Halaman Kaidah Hukum</h3>
                        <h3 class="text-lg font-semibold py-1">Halaman Yurisprudensi</h3>
                        <h3 class="text-lg font-semibold py-1">Halaman Restatement</h3>
                        <h3 class="text-lg font-semibold py-1">Halaman Peraturan</h3>
                    </div>
                </div>
            </div>

            <div>
                <h2 class="text-2xl font-semibold mb-4">Direktori Putusan</h2>
                <div class="bg-white rounded-lg text-justify p-4">
                    <p>
                        Revitalisasi Direktori Putusan (RDP) merupakan pengembangan dari Direktori Putusan v2 kedalam Direktori Putusan v3 yang telah diimplementasikan pada server Mahkamah Agung. Fitur-fitur baru yang dihasilkan pada Direktori Putusan v3 diantaranya adalah Putusan, Yurisprudensi, Rumusan Kamar, Restatement, Kaidah Hukum dan Peraturan.
                    </p>
                    <br>
                    <p>
                        Copyright © 2020 by Mahkamah Agung>. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
    <FooterBar />
</template>

<script>
    import NavBar from "@/components/NavBar.vue";
    import FooterBar from "@/components/FooterBar.vue";
    export default {
        name: 'KontakKami',
        components: {
            NavBar, FooterBar
        },
        data() {
    return {
    breadcumbs: [
        { title: 'Direktori', href: '#' },
        { title: 'Peraturan', href: '#' },
        { title: 'Hukum Materil', href: '#' },
        { title: '19 Tahun 2000', disabled: true },
    ],
    };},
    }
</script>