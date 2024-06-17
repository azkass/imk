<template>
    <NavBar />
    <div>
        <h3>Kontak Kami</h3>
    </div>
    <FooterBar />
</template>

<script>
    import NavBar from "@/components/NavBar.vue";
    import FooterBar from "@/components/FooterBar.vue";
    export default {
        name: 'KontakKami',
        components: {
            NavBar, FooterBar
        }
    }
</script>