<template>
    <NavBar />
    <div class="bg-[#F5F7FA]  sm:px-4 md:px-16 pb-8">
    <v-breadcrumbs :items="breadcumbs" item-class="breadcrumb-item" class="text-[#8e4202] pl-0">
        <template v-slot:divider>
        <v-icon class="text-[#8e4202]" icon="mdi-chevron-right"></v-icon>
        </template>
        <template v-slot:prepend>
        <v-icon class="text-[#8e4202]">mdi-home</v-icon>
        </template>
    </v-breadcrumbs>
    <div class="">
        <h1 class="text-4xl font-semibold pb-4">Kontak Kami</h1>
        <hr class="border-black border-2 mb-4">
        <div class="flex flex-col sm:flex-row sm:items-start">
            <div class="md:w-5/12">
                <h2 class="text-2xl font-semibold mb-4">Kontak Mahkamah Agung</h2>
                <div class="bg-white rounded-lg">
                    <div class="py-4 pl-2 pr-4 flex space-x-2">
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0" />
                        <span class=" text-[#8E4202] material-symbols-outlined">
                        call
                        </span>
                        <div>
                            <h3 class="text-lg font-semibold">Phone</h3>
                            <p>(021) 384 3348</p>
                            <p>(021) 384 3348</p>
                            <p>(021) 384 3348</p>
                        </div>
                    </div>
                    <div class="py-4 pl-2 pr-4 flex space-x-2">
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0" />
                        <span class=" text-[#8E4202] material-symbols-outlined">
                        mail
                        </span>
                        <div>
                            <h3 class="text-lg font-semibold">Email</h3>
                            <p>info@mahkamahagung.go.id</p>
                        </div>
                    </div>
                    <div class="py-4 pl-2 pr-4 flex space-x-2">
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,400,0,0" />
                        <span class=" text-[#8E4202] material-symbols-outlined">
                        location_on
                        </span>
                        <div>
                            <h3 class="text-lg font-semibold">Alamat</h3>
                            <p>Jalan Medan Merdeka Utara No. 9-13. Jakarta Pusat - DKI Jakarta Indonesia 10110</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 class="text-2xl font-semibold mb-4 pt-4">Lokasi</h2>
                    <iframe class="rounded-lg" src="https://www.google.co.id/maps/embed?pb=!1m18!1m12!1m3!1d3966.7036261674634!2d106.82380621069349!3d-6.170424460442687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2094c7cc7%3A0xcd2b2096349c07d6!2sSupreme%20Court%20of%20the%20Republic%20of%20Indonesia!5e0!3m2!1sen!2sid!4v1719316186920!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <div class="md:w-7/12 ml-10">
                <h2 class="text-2xl font-semibold mb-4">Kirim Masukan</h2>
                <div class="bg-white rounded-lg">
                    <div class="px-2">
                        <div class="px-4 pt-4">
                            <h3 class="text-lg font-semibold">Nama</h3>
                            <input type="text" class="w-full p-2 border border-gray-300 rounded">
                        </div>
                        <div class="px-4 py-2">
                            <h3 class="text-lg font-semibold">Email</h3>
                            <input type="text" class="w-full p-2 border border-gray-300 rounded">
                        </div>
                        <div class="px-4 py-2">
                            <h3 class="text-lg font-semibold">Nomor Telepon</h3>
                            <input type="text" class="w-full p-2 border border-gray-300 rounded">
                        </div>
                        <div class="px-4 py-2">
                            <h3 class="text-lg font-semibold">Institusi</h3>
                            <input type="text" class="w-full p-2 border border-gray-300 rounded">
                        </div>
                        <div class="px-4 py-2">
                            <h3 class="text-lg font-semibold">Jenis Laporan</h3>
                            <input type="text" class="w-full p-2 border border-gray-300 rounded">
                        </div>
                        <div class="px-4 py-2">
                            <h3 class="text-lg font-semibold">Catatan</h3>
                            <input type="text" class="w-full p-2 border border-gray-300 rounded">
                        </div>
                        <div class="px-4 py-2">
                            <h3 class="text-lg font-semibold">Lampiran</h3>
                            <input type="text" class="w-full p-2 border border-gray-300 rounded">
                        </div>
                    </div>
                    <div class="text-right py-4 pr-6">
                        <button class="bg-[#8E4202] text-white rounded px-4 py-1 font-medium">Kirim</button>
                    </div>
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
        { title: 'Kontak Kami', disabled: true },
    ],
    };},
    }
</script>