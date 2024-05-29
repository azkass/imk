<template>
    <NavBar/>
    <h1>Tentang</h1>
    <FooterBar/>
</template>

<script>
    import NavBar from "@/components/NavBar.vue";
    import FooterBar from "@/components/FooterBar.vue";
    export default {
    name: 'TentangPage',
    components: {
        NavBar, FooterBar
    }
    }
</script>