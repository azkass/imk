<template>
    <div class="bg-[#F5F7FA] pl-4">
        <h1 class="">Rekapitulasi Putusan</h1>
        <hr class="border-b-2 border-gray-800 mb-4">
        <div id="app" class="pl-4">
            <div class="flex justify-center mb-4 ">
                <div class="w-full md:w-1/2 lg:w-1/3 xl:w-3/4 xl:flex bg-white rounded-lg">
                    <div class="p-4 w-1/4">
                        <h2 class="font-medium text-xl">Putusan Keseluruhan</h2>
                        <p>8,883,154</p>
                        <p>Dokumen</p>
                    </div>
                    <div class="p-4 w-3/4">
                        <BarChart :chartData="data1" :chartConfig="config1" class=""/>
                    </div>
                </div>
            </div>

            <div class="flex flex-wrap justify-center">
                <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white rounded-lg mx-2 mb-4">
                    <div class="p-4">
                        <h2 class="font-medium text-xl">Putusan Bulan Ini</h2>
                        <p>8,883,154</p>
                        <p>Dokumen</p>
                    </div>
                    <div class="p-4">
                        <BarChart :chartData="data2" :chartConfig="config1" class=""/>
                    </div>
                </div>

                <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white rounded-lg mx-2 mb-4">
                    <div class="p-4">
                        <h2 class="font-medium text-xl">Putusan Bulan Lalu</h2>
                        <p>8,883,154</p>
                        <p>Dokumen</p>
                    </div>
                    <div class="p-4">
                        <BarChart :chartData="data3" :chartConfig="config1" class=""/>
                    </div>
                </div>

                <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white rounded-lg mx-2 mb-4">
                    <div class="p-4">
                        <h2 class="font-medium text-xl">Putusan 3 Bulan Terakhir</h2>
                        <p>8,883,154</p>
                        <p>Dokumen</p>
                    </div>
                    <div class="p-4">
                        <BarChart :chartData="data4" :chartConfig="config1" class=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BarChart from '@/components/BarChart.vue';

export default {
name: 'App',
components: {
    BarChart
},
data() {
    return {
    data1: {
        labels: ['Pertama', 'Banding', 'Kasasi', 'Peninjauan Kembali'],
        datasets: [{
        label: 'Putusan Keseluruhan',
        data: [841696, 253111, 149802, 63272],
        backgroundColor: [
            'rgb(142, 66, 2)'
        ],
        borderColor: [
            'rgb(142, 66, 2)'
        ],
        borderWidth: 1
        }]
    },
    config1: {
        type: 'bar',
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    },
    data2: {
        labels: ['Pertama', 'Banding', 'Kasasi', 'Peninjauan Kembali'],
        datasets: [{
        label: 'Putusan Bulan Ini',
        data: [500, 400, 300, 200],
        backgroundColor: [
            'rgb(142, 66, 2)'
        ],
        borderColor: [
            'rgb(142, 66, 2)'
        ],
        borderWidth: 1
        }]
    },
    data3: {
        labels: ['Pertama', 'Banding', 'Kasasi', 'Peninjauan Kembali'],
        datasets: [{
        label: 'Putusan Bulan Lalu',
        data: [500, 400, 300, 200],
        backgroundColor: [
            'rgb(142, 66, 2)'
        ],
        borderColor: [
            'rgb(142, 66, 2)'
        ],
        borderWidth: 1
        }]
    },
    data4: {
        labels: ['Pertama', 'Banding', 'Kasasi', 'Peninjauan Kembali'],
        datasets: [{
        label: 'Putusan 3 Bulan Terakhir',
        data: [500, 400, 300, 200],
        backgroundColor: [
            'rgb(142, 66, 2)'
        ],
        borderColor: [
            'rgb(142, 66, 2)'
        ],
        borderWidth: 1
        }]
    },
    
    };
}
};
</script>