<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="3">
                <h3>Direktori Putusan</h3>
                <p>Publikasi Dokumen Elektronik Putusan seluruh Pengadilan di Indonesia</p>
            </v-col>
            <v-col cols="12" md="3">
                <h3>Produk</h3>
                <ul>
                    <li><RouterLink to="/klasifikasi">Klasifikasi</RouterLink></li>
                    <li><RouterLink to="/putusan-penting">Putusan Penting</RouterLink></li>
                    <li><RouterLink to="/kompilasi-kaidah-hukum">Kompilasi Kaidah Hukum</RouterLink></li>
                    <li><RouterLink to="/restatement">Restatement</RouterLink></li>
                    <li><RouterLink to="/rumusan-kamar">Rumusan Kamar</RouterLink></li>
                    <li><RouterLink to="/rumusan-rakernas">Rumusan Rakernas</RouterLink></li>
                    <li><RouterLink to="/yurisprudensi">Yurisprudensi</RouterLink></li>
            </ul>
            </v-col>
            <v-col cols="12" md="3">
                <h3>Kontak</h3>
                <p>
                    Jalan Medan Merdeka Utara No. 9-13.
                    Jakarta Pusat - DKI Jakarta
                    Indonesia 10110
                    <br>
                    Phone: (021) 384 3348
                    Phone: (021) 381 0350
                    Phone: (021) 345 7661
                    Email: info@mahkamahagung.go.id
                </p>
            </v-col>
            <v-col cols="12" md="3">
                <h3>Media Sosial</h3>
                <v-icon>mdi-facebook</v-icon>
                <v-icon>mdi-twitter</v-icon>
                <v-icon>mdi-instagram</v-icon>
                <v-icon>mdi-linkedin</v-icon>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
    name: 'FooterBar',
    };
</script>

<style scoped>
    a {
        text-decoration: none;
        color: inherit;
    }
</style>