<template>
    <title>Direktori Putusan</title>
    <div>
        <NavBar />
        <div class="bg-cover bg-center bg-[url('@/assets/beranda.png')] pt-10">
            <div class="text-center">
                <h3>Publikasi Dokumen Elektronik</h3>
                <h3>Putusan Seluruh Pengadilan di Indonesia</h3>
                <br>
            </div>
            <v-card
                class="mx-auto"
                color="surface-light"
                max-width="400"
                rounded="xl"
                >
                <v-card-text style="padding:0;">
                    <v-text-field
                    :loading="loading"
                    prepend-inner-icon="mdi-magnify"
                    density="compact"
                    label="Pencarian Putusan"
                    variant="solo"
                    hide-details
                    single-line
                    @click:prepend-inner="onClick"
                    ></v-text-field>
                </v-card-text>
            </v-card>

            <div class="flex items-center justify-center pb-5">
    <div class="container mx-20 my-8 p-4">
            <button
            @click="prevPage"
            :disabled="currentPage === 0"
            class="absolute left-0 z-10 p-2 bg-[#8E4202] text-white rounded-xl ml-10 mt-28"
            >
            &lt;
        </button>
        <div class="relative flex items-center">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mx-auto">
                <div
                    v-for="(item, index) in paginatedItems"
                    :key="index"
                    class="bg-white rounded-lg shadow-md p-6 text-center flex flex-col justify-between"
                >
                    <!-- Wrapper untuk gambar -->
                    <div class="flex flex-col items-center">
                        <img :src="item.image" alt="" class="h-24 object-cover mb-4 rounded-md mx-auto">
                        <!-- Display the title -->
                        <h3 class="text-xl font-semibold mb-4">{{ item.title }}</h3>
                    </div>
                    <!-- Display the button -->
                    <router-link :to="item.route" class="bg-[#8E4202] text-white py-2 px-4 rounded-lg mt-auto">
                        Selengkapnya
                    </router-link>
                </div>
            </div>
            <button
                @click="nextPage"
                :disabled="currentPage === maxPage"
                class="absolute right-0 z-10 p-2 bg-[#8E4202] text-white rounded-full"
            >
                &gt;
            </button>
        </div>
    </div>
</div>

        </div>
        <RekapitulsaiPutusan />
        <DokumenTerbaru />
        <FooterBar />
    </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";
import RekapitulsaiPutusan from "@/components/RekapitulasiPutusan.vue";
import DokumenTerbaru from "@/components/DokumenTerbaru.vue";

export default {
    name: 'HomePage',
    components: {
        NavBar, FooterBar, DokumenTerbaru, RekapitulsaiPutusan
    },
    data: () => ({
        loaded: false,
        loading: false,
        currentPage: 0,
        itemsPerPage: 5,
        items: [
            { title: 'Putusan', image: require('@/assets/putusan.png'), route: '/putusan'},
            { title: 'Kompilasi Kaidah Hukum', image: require('@/assets/kompilasi_kaidah_hukum.png'), route: '/kompilasi-kaidah-hukum'},
            { title: 'Restatement', image: require('@/assets/restatement.png'), route:'/restatement'},
            { title: 'Rumusan Kamar', image: require('@/assets/rumusan_kamar.png'), route:'/rumusan-kamar'},
            { title: 'Rumusan Rakernas', image: require('@/assets/rumusan_rakernas.png'), route:'/rumusan-rakernas'},
            { title: 'Yurisprudensi', image: require('@/assets/yurisprudensi.png'), route:'/yurisprudensi'},
            { title: 'Peraturan', image: require('@/assets/peraturan.png'), route:'/peraturan'}
        ]
    }),

    computed: {
        paginatedItems() {
            const start = this.currentPage * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.items.slice(start, end);
        },
        maxPage() {
            return Math.ceil(this.items.length / this.itemsPerPage) - 1;
        }
    },

    methods: {
        nextPage() {
            if (this.currentPage < this.maxPage) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 0) {
                this.currentPage--;
            }
        },
        onClick() {
            this.loading = true
            setTimeout(() => {
                this.loading = false
                this.loaded = true
            }, 2000)
        },
    },
}
</script>
