<template>
    <NavBar/>
    <h1>Putusan Penting</h1>
    <FooterBar/>
</template>

<script>
    import NavBar from "@/components/NavBar.vue";
    import FooterBar from "@/components/FooterBar.vue";
    export default {
    name: 'PutusanPenting',
    components: {
        NavBar, FooterBar
    }
    }
</script>