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
        <h1 class="text-4xl font-semibold my-4">Kontak Kami</h1>
        <hr class="border-black border-2 mb-4">
        <div class="grid grid-cols-2 gap-4">
            <div>
                <h2 class="text-2xl font-semibold mb-4">Kontak Mahkamah Agung</h2>
                <div class="bg-white rounded-lg">
                    <div class="p-4">
                        <h3 class="text-lg font-semibold">Phone</h3>
                        <p>(021) 384 3348</p>
                        <p>(021) 384 3348</p>
                        <p>(021) 384 3348</p>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold">Email</h3>
                        <p>info@mahkamahagung.go.id</p>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold">Alamat</h3>
                        <p>Jl. Medan Merdeka Utara No. 9-13. Jakarta Pusat - DKI Jakarta Indonesia 10110</p>
                    </div>
                </div>
                <div>
                    <h2 class="text-2xl font-semibold mb-4 pt-4">Lokasi</h2>
                    <GoogleMap/>
                </div>
            </div>

            <div>
                <h2 class="text-2xl font-semibold mb-4">Kirim Masukan</h2>
                <div class="bg-white rounded-lg">
                    <div class="p-4">
                        <h3 class="text-lg font-semibold">Nama</h3>
                        <input type="text" class="w-full p-2 border border-gray-300 rounded">
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold">Email</h3>
                        <input type="text" class="w-full p-2 border border-gray-300 rounded">
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold">Nomor Telepon</h3>
                        <input type="text" class="w-full p-2 border border-gray-300 rounded">
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold">Institusi</h3>
                        <input type="text" class="w-full p-2 border border-gray-300 rounded">
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold">Jenis Laporan</h3>
                        <input type="text" class="w-full p-2 border border-gray-300 rounded">
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold">Catatan</h3>
                        <input type="text" class="w-full p-2 border border-gray-300 rounded">
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold">Lampiran</h3>
                        <input type="text" class="w-full p-2 border border-gray-300 rounded">
                    </div>
                    <button class="bg-[#8E4202] text-white rounded px-4 py-1 font-medium">Kirim</button>
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
    import GoogleMap from "@/components/GoogleMap.vue";
    export default {
        name: 'KontakKami',
        components: {
            NavBar, FooterBar, GoogleMap
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