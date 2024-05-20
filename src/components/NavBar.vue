<template>
    <v-sheet class="d-flex mb-6">
        <!-- <v-img src="../assets/logo.png" max-height="50" class="ma-2 pa-2 me-auto"></v-img> -->
        <a href="" class="ma-2 pa-2 me-auto"> Direktori Putusan Mahkamah Agung</a>
        <v-btn class="ma-2 pa-2" variant="text">
            Beranda
        </v-btn>
        <v-btn class="ma-2 pa-2" variant="text">
            Pencarian
        </v-btn>
        <v-btn class="ma-2 pa-2" variant="text">
            Direktori
        </v-btn>
        <v-btn class="ma-2 pa-2" variant="text">
            Pengadilan
        </v-btn>
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
