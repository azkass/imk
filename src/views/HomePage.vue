<template>
    <title>Direktori Putusan</title>
    <div>
        <NavBar />
        <div class="text-center">
            <h3>MAHKAMAH AGUNG REPUBLIK INDONESIA</h3>
            <h1>DIREKTORI PUTUSAN</h1>
            <p>Publikasi Dokumen Elektronik Putusan seluruh Pengadilan di Indonesia</p>
        </div>
        <v-card
            class="mx-auto"
            color="surface-light"
            max-width="400"
            >
            <v-card-text>
            <v-text-field
                :loading="loading"
                append-inner-icon="mdi-magnify"
                density="compact"
                label="Pencarian Putusan"
                variant="solo"
                hide-details
                single-line
                @click:append-inner="onClick"
            ></v-text-field>
            </v-card-text>
        </v-card>
        <FooterBar />
    </div>
</template>

<script>
    import NavBar from "@/components/NavBar.vue";
    import FooterBar from "@/components/FooterBar.vue";
    export default {
    name: 'HomePage',
    components: {
        NavBar, FooterBar
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