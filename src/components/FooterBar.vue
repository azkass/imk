<template>
    <div class="bg-[#8E4202] text-white">
        <v-container style="max-width: 90%;">
            <v-row>
            <v-col cols="12" md="5">
                <div style="display: flex; align-items: center;">
                    <img src="../assets/logo.png" style="max-width: 60px; margin-right: 10px;">
                    <div>
                        <h3>Direktori Putusan</h3>
                        <h4>Mahkamah Agung RI</h4>
                    </div>
                </div>
                <p>Copyright © 2024 Kepaniteraan Mahkamah Agung Republik Indonesia.</p>
                <p>Hak Cipta dan Kekayaan Intelektual dilindungi Undang-Undang.</p>
            </v-col>
            <v-col cols="12" md="2">
                <h3>Produk</h3>
                <ul :style="{marginLeft:'15px'}">
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
                    Phone: (021) 384 3348<br>
                    Phone: (021) 381 0350<br>
                    Phone: (021) 345 7661<br>
                    Email: info@mahkamahagung.go.id
                </p>
            </v-col>
            <v-col cols="12" md="2">
                <h3>Media Sosial</h3>
                <a href="https://www.facebook.com/humasma123/?locale=id_ID" target="_blank">
                    <v-icon>mdi-facebook</v-icon>
                </a>
                <a href="https://twitter.com/mahkamahagung" target="_blank">
                    <v-icon>mdi-twitter</v-icon>
                </a>
                <a href="https://www.instagram.com/humasmahkamahagung" target="_blank">
                    <v-icon>mdi-instagram</v-icon>
                </a>
                <a href="https://www.youtube.com/@MahkamahAgungRepublikIndonesia" target="_blank">
                    <v-icon>mdi-youtube</v-icon>
                </a>
            </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
    name: 'FooterBar',
    };
</script>

<style>
    a {
        text-decoration: none;
        color: inherit;
    }
    .v-icon {
        margin-right: 10px;
    }
</style>