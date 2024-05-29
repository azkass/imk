<template>
    <div>
        <!-- <bar-chart :chart-data="chartData"></bar-chart> -->
        <p>Bar Chart</p>
    </div>
</template>

<script setup>
    import axios from 'axios';
    import { onMounted } from 'vue';

    onMounted(() => {
        const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=9P9N1gEhECfxlxlAcsbXNBctlSTCGaAJW80foD8zTiniLiEM3jG8As4-VR1pdHO01-TvHkaSdnHEKSaDJQjQTAYUy35q-i1Mm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOndka7CUg2WxWkgtxh0EQhqnsfM3BJKt1zYnFraaUtFjVD5Gezoit2mlK211O6QsVXK0ZW33QaWyW6I3E4gxECYa6RN0tzjKQ&lib=Mv8jyjEfepD2p_SRWBodP9x5NT3TNaPLP'
        axios.get(url)
            .then(
                (data) => {
                    console.log(data)
                }
            )
    })
</script>