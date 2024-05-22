<template>
    <v-sheet class="d-flex mb-6">
        <!-- <v-img src="../assets/logo.png" max-height="50" class="ma-2 pa-2 me-auto"></v-img> -->
        <a href="" class="ma-2 pa-2 me-auto"> Direktori Putusan Mahkamah Agung</a>
        <v-btn class="ma-2 pa-2" variant="text">
            Beranda
        </v-btn>

        <v-menu open-on-hover>
            <template v-slot:activator="{props}">
                <v-btn class="ma-2 pa-2" variant="text" v-bind="props">
                    Direktori
                </v-btn>
            </template>
            <v-list>
                <v-list-item>
                    <v-list-item-title>
                        <a href="">Klasifikasi</a>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <a href="">Putusan Penting</a>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <a href="">Kompilasi Kaidah Hukum</a>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <a href="">Restatement</a>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <a href="">Rumusan Kamar</a>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <a href="">Rumusan Rakernas</a>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <a href="">Yurisprudensi</a>
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
            <v-list>
                <v-list-item>
                    <v-list-item-title>
                        <a href="">Mahkamah Agung</a>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <a href="">Daftar Pengadilan</a>
                    </v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title>
                        <a href="">Pengadilan Pajak</a>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-btn class="ma-2 pa-2" variant="text">
            Peraturan
        </v-btn>
        <v-btn class="ma-2 pa-2" variant="text">
            Tentang
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
</style>
