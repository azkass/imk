<template>
    <NavBar/>
    <h1>Putusan</h1>
    <FooterBar/>
</template>

<script>
    import NavBar from "@/components/NavBar.vue";
    import FooterBar from "@/components/FooterBar.vue";
    export default {
    name: 'PutusanPage',
    components: {
        NavBar, FooterBar
    }
    }
</script>