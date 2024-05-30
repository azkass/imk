<template>
    <div>
        <!-- <bar-chart :chart-data="chartData"></bar-chart> -->
        <h3>Rekapitulasi Putusan</h3>
    </div>

    <div>
    <!-- Baris pertama dengan satu box rounded besar -->
    <div class="flex justify-center">
        <div class="box-border border-black border-2 rounded-lg bg-white w-32 h-32 flex justify-center">
            Putusan Keseluruhan
        </div>
    </div>
        
    <!-- 3 baris box rounded pada baris berikutnya -->
    <div class="flex">
        <div class="box-border border-black border-2 rounded-lg bg-white p-4 m-2">
            Putusan Bulan Ini
        </div>
        <div class="box-border border-black border-2 rounded-lg bg-white p-4 m-2">
            Putusan Bulan Lalu
        </div>
        <div class="box-border border-black border-2 rounded-lg bg-white p-4 m-2">
            Putusan 3 Bulan Lalu
        </div>
        </div>
    </div>
</template>

<script>
    // URL dari API atau endpoint yang menyediakan data JSON
    const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=X3SM_4ItFLHhErhTfScQNtZZCKY2udB6Ur_Ize7rw-mTr91Rd1j8KMApWqNXdRCxP4OofHIve9E1WRdrHhqzwdRuBdR52rkcm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOndka7CUg2WxWkgtxh0EQhqnsfM3BJKt1zYnFraaUtFjVD5Gezoit2mlK211O6QsVXK0ZW33QaWyW6I3E4gxECYa6RN0tzjKQ&lib=Mv8jyjEfepD2p_SRWBodP9x5NT3TNaPLP'
    
    
    // Melakukan request menggunakan fetch
    fetch(url)
    .then(response => {
        // Memeriksa apakah request berhasil (status 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        // Mengkonversi response menjadi JSON
        return response.json();
    })
    .then(data => {
        // Menangani data JSON yang diterima
        console.log(data);
        // Print data
        
    })
    .catch(error => {
        // Menangani error jika terjadi masalah saat fetch
        console.error('There was a problem with the fetch operation:', error);
    });

</script>