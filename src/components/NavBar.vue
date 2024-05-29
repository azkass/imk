<template>
    <v-sheet class="d-flex mb-6">
        <RouterLink to="/" class="ma-2 pa-2 me-auto" style="display: flex; align-items: center;">
            <img src="../assets/logo.png" alt="Logo" style="height: 30px; margin-right: 10px; padding-top: 0;">
            Direktori Putusan Mahkamah Agung
        </RouterLink>
        
        <v-btn class="ma-2 pa-2" variant="text">
            <RouterLink to="/">Beranda</RouterLink>
        </v-btn>

        <v-menu open-on-hover>
            <template v-slot:activator="{props}">
                <v-btn class="ma-2 pa-2" variant="text" v-bind="props">
                    Direktori
                </v-btn>
            </template>
            <v-list :style="{ boxShadow:'none', backgroundColor: 'white'}">
                <v-list-item>
                    <v-list-item-title>
                        <RouterLink to="/klasifikasi">Klasifikasi</RouterLink>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <RouterLink to="/putusan-penting">Putusan Penting</RouterLink>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <RouterLink to="/kompilasi-kaidah-hukum">Kompilasi Kaidah Hukum</RouterLink>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <RouterLink to="/restatement">Restatement</RouterLink>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <RouterLink to="/rumusan-kamar">Rumusan Kamar</RouterLink>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <RouterLink to="/rumusan-rakernas">Rumusan Rakernas</RouterLink>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <RouterLink to="/yurisprudensi">Yurisprudensi</RouterLink>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        
        <v-menu open-on-hover>
            <template v-slot:activator="{props}">
                <v-btn class="ma-2 pa-2" variant="text" v-bind="props">
                    Pengadilan
                </v-btn>
            </template>
            <v-list :style="{ boxShadow:'none'}">
                <v-list-item>
                    <v-list-item-title>
                        <RouterLink to="/mahkamah-agung">Mahkamah Agung</RouterLink>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <RouterLink to="/daftar-pengadilan">Daftar Pengadilan</RouterLink>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <RouterLink to="/pengadilan-pajak">Pengadilan Pajak</RouterLink>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-btn class="ma-2 pa-2" variant="text">
            <RouterLink to="/peraturan">Peraturan</RouterLink>
        </v-btn>
        <v-btn class="ma-2 pa-2" variant="text">
            <RouterLink to="/tentang">Tentang</RouterLink>
        </v-btn>
    </v-sheet>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>
<style>
template {
    margin-bottom: 0px;
}
a {
    text-decoration: none;
    color: black;
}
[v-list]:hover {
    background-color: #f2f2f2; /* Warna sedikit abu */
}
</style>
