<template>
    <NavBar/>
    <h1>Rumusan Kamar</h1>
    <FooterBar/>
</template>

<script>
    import NavBar from "@/components/NavBar.vue";
    import FooterBar from "@/components/FooterBar.vue";
    export default {
    name: 'RumusanKamar',
    components: {
        NavBar, FooterBar
    }
    }
</script>