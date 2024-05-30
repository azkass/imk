<template>
    <div class=" bg-[#DDC17C] flex items-center justify-center">
        <div class="container mx-auto p-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div
                v-for="(item, index) in items"
                :key="index"
                class="bg-white rounded-lg shadow-md p-6 text-center"
                >
                <!-- Display the image -->
                <img :src="item.image" alt="" class="w-full h-32 object-cover mb-4 rounded-md">
                <!-- Display the number -->
                <p class="text-2xl font-bold mb-4">{{ item.number }}</p>
                <!-- Display the title -->
                <h3 class="text-xl font-semibold mb-4">{{ item.title }}</h3>
                    <!-- Display the button -->
                    <button class="bg-[#8E4202] text-white py-2 px-4 rounded-xl">
                    Selengkapnya
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
        return {
            // Define items with titles, images, and numbers
            items: [
            { title: 'Peraturan Perundangan', image: 'https://via.placeholder.com/150', number: '1' },
            { title: 'Kompilasi Kaidah Hukum', image: 'https://via.placeholder.com/150', number: '2' },
            { title: 'Rumusan Kamar', image: 'https://via.placeholder.com/150', number: '3' },
            { title: 'Restatement', image: 'https://via.placeholder.com/150', number: '4' },
            { title: 'Rumusan Rakernas', image: 'https://via.placeholder.com/150', number: '5' }
            ]
            };
        }
    };
</script>

<style>
  /* No custom styles needed as we are using Tailwind CSS */
</style>