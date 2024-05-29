<template>
    <title>Direktori Putusan</title>
    <div>
        <NavBar />
        <div class="text-center">
            <h3>MAHKAMAH AGUNG REPUBLIK INDONESIA</h3>
            <h1>DIREKTORI PUTUSAN</h1>
            <p>Publikasi Dokumen Elektronik Putusan seluruh Pengadilan di Indonesia</p>
            <br>
        </div>
        <v-card
            class="mx-auto"
            color="surface-light"
            max-width="400"
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
        <br>
        <br>
        <br>
        <!-- https://script.googleusercontent.com/macros/echo?user_content_key=9P9N1gEhECfxlxlAcsbXNBctlSTCGaAJW80foD8zTiniLiEM3jG8As4-VR1pdHO01-TvHkaSdnHEKSaDJQjQTAYUy35q-i1Mm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOndka7CUg2WxWkgtxh0EQhqnsfM3BJKt1zYnFraaUtFjVD5Gezoit2mlK211O6QsVXK0ZW33QaWyW6I3E4gxECYa6RN0tzjKQ&lib=Mv8jyjEfepD2p_SRWBodP9x5NT3TNaPLP -->
        <BarChart />
        <br>
        <br>
        <br>
        <br>
        <br>
        <FooterBar />
    </div>
</template>

<script>
    import NavBar from "@/components/NavBar.vue";
    import FooterBar from "@/components/FooterBar.vue";
    import BarChart from "@/components/BarChart.vue";
    
    export default {
        name: 'HomePage',
        components: {
            NavBar, FooterBar, BarChart
        },
        data: () => ({
            loaded: false,
            loading: false,
        }),

            methods: {
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

<style>
    .text-center {
        text-align: center;
    
    }
    h1 {
        font-size: 3em;
    }
    h3 {
        font-size: 2em;
    }
</style>