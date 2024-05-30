<template>
    <title>Direktori Putusan</title>
    <div>
        <NavBar />
        <div class="bg-[#DDC17C]">
        <br>
        <br>
        <br>
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
        </div>
        
        <BoxRounded />
        
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
    import BoxRounded from "@/components/BoxRounded.vue";
    
    export default {
        name: 'HomePage',
        components: {
            NavBar, FooterBar, BarChart, BoxRounded
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