<template>
    <NavBar/>
    <h1>Kompilasi Kaidah Hukum</h1>
    <FooterBar/>
</template>

<script>
    import NavBar from "@/components/NavBar.vue";
    import FooterBar from "@/components/FooterBar.vue";
    export default {
    name: 'KompilasiKaidahHukum',
    components: {
        NavBar, FooterBar
    }
    }
</script>