<template>
    <NavBar/>
    <h1>Daftar Pengadilan</h1>
    <FooterBar/>
</template>

<script>
    import NavBar from "@/components/NavBar.vue";
    import FooterBar from "@/components/FooterBar.vue";
    export default {
    name: 'DaftarPengadilan',
    components: {
        NavBar, FooterBar
    }
    }
</script>