<template>
    <NavBar/>
    <h1>Mahkamah Agung</h1>
    <FooterBar/>
</template>

<script>
    import NavBar from "@/components/NavBar.vue";
    import FooterBar from "@/components/FooterBar.vue";
    export default {
    name: 'MahkamahAgung',
    components: {
        NavBar, FooterBar
    }
    }
</script>