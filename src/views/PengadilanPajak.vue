<template>
    <NavBar/>
    <h1>Pengadilan Pajak</h1>
    <FooterBar/>
</template>

<script>
    import NavBar from "@/components/NavBar.vue";
    import FooterBar from "@/components/FooterBar.vue";
    export default {
    name: 'PengadilanPajak',
    components: {
        NavBar, FooterBar
    }
    }
</script>