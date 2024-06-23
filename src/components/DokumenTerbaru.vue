<template>
    <div class="bg-[#F5F7FA] sm:px-4 md:px-16">
        <h3>Dokumen Terbaru</h3>
        <hr class="border-black border-2">
        <v-card>
            <v-tabs v-model="selectedTab" bg-color="#F5F7FA" show-arrows>
            <v-tab v-for="(tab, index) in tabs" :key="index" :value="'tab-' + (index + 1)">
                {{ tab }}
            </v-tab>
        </v-tabs>

        <template v-for="(tab, index) in tabs" :key="'content-' + index">
            <div v-if="selectedTab === 'tab-' + (index + 1)" class="bg-[#F5F7FA]">
                <h3>{{ tabContents[index] }}</h3>
                <p>Testing</p>
            </div>
        </template>
    </v-card>
    </div>
</template>

<script>
    export default {
        data() {
        return {
            selectedTab: 'tab-1',
            tabs: [
            'Putusan',
            'Putusan Penting',
            'Kompilasi Kaidah Hukum',
            'Restatement',
            'Rumusan Kamar',
            'Rumusan Rakernas',
            'Yurisprudensi'
            ],
            tabContents: [
            'Putusan',
            'Putusan Penting',
            'Kompilasi Kaidah Hukum',
            'Restatement',
            'Rumusan Kamar',
            'Rumusan Rakernas',
            'Yurisprudensi'
            ]
        };
        }
    }
</script>