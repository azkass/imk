<template>
    <NavBar/>
    <h1>Rumusan Rakernas</h1>
    <FooterBar/>
</template>

<script>
    import NavBar from "@/components/NavBar.vue";
    import FooterBar from "@/components/FooterBar.vue";
    export default {
    name: 'RumusanRakernas',
    components: {
        NavBar, FooterBar
    }
    }
</script>