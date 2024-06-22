<template>
    <NavBar/>
    <div class="bg-[#F5F7FA] px-8">
        <h1 class="text-4xl font-semibold my-4">Tentang</h1>
        <hr class="border-black border-2 mb-4">
        <div class="bg-white rounded-xl p-7 shadow-md mb-4">
            <div>
                <div class="flex flex-row mb-4">
                    <h3 class="p-4 box-border rounded-lg bg-[#DDC17C] bg-opacity-45 text-2xl font-semibold text-[#8E4202]">Keterbukaan dan Akuntabilitas dalam Sistem Peradilan</h3>
                    <p class="text-justify pl-4 py-2">Salah satu prinsip utama dalam sistem peradilan global adalah keterbukaan atau transparansi pengadilan. Keterbukaan ini menjadi kunci untuk mewujudkan akuntabilitas, yang pada gilirannya meningkatkan profesionalisme hakim dan pegawai pengadilan dalam menjalankan tugas dan tanggung jawab mereka. Keterbukaan informasi, sebagai hak dasar publik untuk mengakses informasi, juga diakui sebagai hak asasi manusia yang ditegaskan dalam UUD 1945. Berdasarkan prinsip ini, Mahkamah Agung (MA) mengeluarkan Keputusan Ketua Mahkamah Agung Nomor 144/KMA/SK/VIII/2007 tentang Keterbukaan Informasi di Pengadilan.</p>
                </div>
                <hr class="border-gray-200 border-2 mb-4">
                <div class="flex flex-row mb-4">
                    <p class="text-justify pr-4 py-2">Untuk mendukung keputusan tersebut, Mahkamah Agung mengembangkan 'Direktori Putusan' elektronik. Tujuan utama dari inisiatif ini adalah memastikan masyarakat dapat mengakses informasi peradilan secara lengkap, cepat, dan terjangkau. Direktori ini menjadi wujud nyata dari komitmen MA terhadap keterbukaan informasi. Keputusan KMA menetapkan jenis informasi yang harus diumumkan oleh pengadilan secara proaktif, serta mekanisme pengumumannya. Informasi ini mencakup putusan dan penetapan pengadilan yang penting bagi para pencari keadilan dan masyarakat umum.</p>
                    <h3 class="p-4 box-border rounded-lg bg-[#DDC17C] bg-opacity-45 text-2xl font-semibold text-[#8E4202]">Pengembangan Direktori Putusan Elektronik</h3>
                </div>
                <hr class="border-gray-200 border-2 mb-4">
                <div class="flex flex-row mb-4">
                    <h3 class="p-4 box-border rounded-lg bg-[#DDC17C] bg-opacity-45 text-2xl font-semibold text-[#8E4202]">Privasi Terjaga, Keadilan Terbuka</h3>
                    <p  class="text-justify pl-4 py-2">Pengadilan juga dapat menerbitkan putusan atau penetapan yang belum berkekuatan hukum tetap namun menarik perhatian publik, seperti kasus korupsi, narkoba, atau terorisme. Namun, demi menjaga privasi dan martabat pihak-pihak dalam kasus-kasus tertentu seperti kekerasan dalam rumah tangga, tindak pidana kesusilaan, adopsi anak, tindak pidana anak, atau perkara perkawinan, Mahkamah Agung wajib mengaburkan identitas mereka sesuai dengan Keputusan tersebut.</p>
                </div>
                    <hr class="border-gray-200 border-2 mb-4">
                <div class="flex flex-row mb-4">
                    <p class="text-justify pr-4 py-2">Informasi putusan dan penetapan pengadilan diumumkan melalui situs resmi Mahkamah Agung, menyesuaikan dengan kondisi keuangan dan prasarana pengadilan. 'Direktori Putusan' memastikan masyarakat mendapatkan akses luas dan mudah ke informasi peradilan. Direktori Putusan juga merupakan hasil kerjasama antara Mahkamah Agung Republik Indonesia dan Kemitraan Australia Indonesia. Inisiatif ini menunjukkan komitmen MA dalam meningkatkan transparansi dan aksesibilitas informasi peradilan. Kami berupaya menjadikan keterbukaan sebagai landasan akuntabilitas di setiap lapisan masyarakat.</p>
                    <h3 class="p-4 box-border rounded-lg bg-[#DDC17C] bg-opacity-45 text-2xl font-semibold text-[#8E4202]">Mekanisme Pengumuman dan Kolaborasi Internasional</h3>
                </div>
            </div>
        </div>
    </div>
    <FooterBar/>
</template>

<script>
    import NavBar from "@/components/NavBar.vue";
    import FooterBar from "@/components/FooterBar.vue";
    export default {
    name: 'TentangPage',
    components: {
        NavBar, FooterBar
    }
    }
</script>