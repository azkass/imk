<template>
    <NavBar />
        <div class="bg-[#F5F7FA] px-8 pb-8">
        <v-breadcrumbs :items="breadcumbs" item-class="breadcrumb-item" class="text-[#8e4202] pl-0">
            <template v-slot:divider>
                <v-icon class="text-[#8e4202]" icon="mdi-chevron-right"></v-icon>
            </template>
            <template v-slot:prepend>
                <v-icon class="text-[#8e4202]">mdi-home</v-icon>
            </template>
        </v-breadcrumbs>
        <div class="">
            <h1 class="text-4xl font-semibold my-4">RSS</h1>
            <hr class="border-black border-2 mb-4">
        </div>
        <div>
            <v-card>
                <template v-slot:text>
                <v-text-field
                    v-model="search"
                    label="Search"
                    prepend-inner-icon="mdi-magnify"
                    variant="outlined"
                    hide-details
                    single-line
                ></v-text-field>
                </template>

                <v-data-table
                :headers="headers"
                :items="desserts"
                :search="search"
                class="pl-4"
                >
                
                </v-data-table>
            </v-card>
        </div>
    </div>
    <FooterBar />
</template>
<script>
    import NavBar from "@/components/NavBar.vue";
    import FooterBar from "@/components/FooterBar.vue";
    export default {
        name: 'RSSPage',
        components: {
            NavBar, FooterBar
        },
        data() {
            return {
            breadcumbs: [
                { title: 'RSS', disabled: true }
            ],
            search: '',
        headers: [
            {
                align: 'start',
                key: 'name',
                sortable: false,
                title: 'Nama Pengadilan',
            },
            { key: 'calories', title: 'Calories' },
            { key: 'fat', title: 'Fat (g)' },
            { key: 'carbs', title: 'Carbs (g)' },
            { key: 'protein', title: 'Protein (g)' },
            { key: 'iron', title: 'Iron (%)' },
            ],
            desserts: [
            {
                name: 'Frozen Yogurt',
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                iron: 1,
            },
            {
                name: 'Ice cream sandwich',
                calories: 237,
                fat: 9.0,
                carbs: 37,
                protein: 4.3,
                iron: 1,
            },
            {
                name: 'Eclair',
                calories: 262,
                fat: 16.0,
                carbs: 23,
                protein: 6.0,
                iron: 7,
            },
            {
                name: 'Cupcake',
                calories: 305,
                fat: 3.7,
                carbs: 67,
                protein: 4.3,
                iron: 8,
            },
            {
                name: 'Gingerbread',
                calories: 356,
                fat: 16.0,
                carbs: 49,
                protein: 3.9,
                iron: 16,
            },
            {
                name: 'Jelly bean',
                calories: 375,
                fat: 0.0,
                carbs: 94,
                protein: 0.0,
                iron: 0,
            },
            {
                name: 'Lollipop',
                calories: 392,
                fat: 0.2,
                carbs: 98,
                protein: 0,
                iron: 2,
            },
            {
                name: 'Honeycomb',
                calories: 408,
                fat: 3.2,
                carbs: 87,
                protein: 6.5,
                iron: 45,
            },
            {
                name: 'Donut',
                calories: 452,
                fat: 25.0,
                carbs: 51,
                protein: 4.9,
                iron: 22,
            },
            {
                name: 'KitKat',
                calories: 518,
                fat: 26.0,
                carbs: 65,
                protein: 7,
                iron: 6,
            },
            ],
            };
        },
    }
</script>