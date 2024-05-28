<template>
    <NavBar/>
    <h1>Peraturan & Perundang-Undangan</h1>
    <FooterBar/>
</template>

<script>
    import NavBar from "@/components/NavBar.vue";
    import FooterBar from "@/components/FooterBar.vue";
    export default {
    name: 'PeraturanPage',
    components: {
        NavBar, FooterBar
    }
    }
</script>