<template>
    <nav class="bg-[#8E4202] py-2 text-white font-medium">
        <!-- Desktop View -->
        <div class="container mx-auto flex justify-between items-center">
            <RouterLink to="/" class="pl-4 me-auto" style="display: flex; align-items: center;">
            <img src="../assets/logo.png" alt="Logo" style="height: 40px; margin-right: 10px; padding-top: 0;">
            Direktori Putusan
            <br>
            Mahkamah Agung
            </RouterLink>
    
            <div class="hidden md:flex space-x-4">
            <a href="/" class="hover:text-gray-300">Beranda</a>
            <div class="relative" @mouseenter="openSubMenu">
                <button @click="toggleSubMenu" class="focus:outline-none hover:text-gray-300">
                    <a href="/direktori">Direktori</a>
                </button>
                <div v-if="isSubMenuOpen" @mouseleave="closeSubMenu" class="absolute left-0 mt-2 w-48 bg-[#8E4202]  rounded-md shadow-lg z-20">
                <a href="/putusan" class="block px-4 py-2 hover:text-gray-300">Putusan</a>
                <a href="/putusan-penting" class="block px-4 py-2 hover:text-gray-300">Putusan Penting</a>
                <a href="/kompilasi-kaidah-hukum" class="block px-4 py-2 hover:text-gray-300">Kompilasi Kaidah Hukum</a>
                <a href="/restatement" class="block px-4 py-2 hover:text-gray-300">Restatement</a>
                <a href="/rumusan-kamar" class="block px-4 py-2 hover:text-gray-300">Rumusan Kamar</a>
                <a href="/rumusan-rakernas" class="block px-4 py-2 hover:text-gray-300">Rumusan Rakernas</a>
                <a href="/yurisprudensi" class="block px-4 py-2 hover:text-gray-300">Yurisprudensi</a>
                </div>
            </div>
            <a href="/tentang" class="hover:text-gray-300">Tentang</a>
            <a href="/kontak" class="hover:text-gray-300">Kontak</a>
            </div>
    
            <!-- Mobile View -->
            <div class="md:hidden">
            <button @click="toggleMenu" class="text-white hover:text-gray-300 pr-4">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            </div>
        </div>
        <div v-if="isMenuOpen" class="md:hidden pl-6 py-2">
            <a href="/" class="block hover:text-gray-300">Beranda</a>
            <div>
            <button @click="toggleSubMenuMobile" class="block text-left w-full focus:outline-none hover:text-gray-300 pt-1">
                Direktori
            </button>
            <div v-if="isSubMenuOpenMobile" class="px-4 rounded font-normal">
                <a href="/putusan" class="block hover:text-gray-300 pt-1">Putusan</a>
                <a href="/putusan-penting" class="block hover:text-gray-300 pt-1">Putusan Penting</a>
                <a href="/kompilasi-kaidah-hukum" class="block hover:text-gray-300 pt-1">Kompilasi Kaidah Hukum</a>
                <a href="/restatement" class="block hover:text-gray-300 pt-1">Restatement</a>
                <a href="/rumusan-kamar" class="block hover:text-gray-300 pt-1">Rumusan Kamar</a>
                <a href="/rumusan-rakernas" class="block hover:text-gray-300 pt-1">Rumusan Rakernas</a>
                <a href="/yurisprudensi" class="block hover:text-gray-300 pt-1">Yurisprudensi</a>
            </div>
            </div>
            <a href="/tentang" class="block hover:text-gray-300 pt-1">Tentang</a>
            <a href="/kontak" class="block hover:text-gray-300 pt-1">Kontak</a>
        </div>
        </nav>
    </template>
    
<script>
    export default {
        data() {
        return {
            isMenuOpen: false,
            isSubMenuOpen: false,
            isSubMenuOpenMobile: false
        };
        },
        methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        toggleSubMenu() {
            this.isSubMenuOpen = !this.isSubMenuOpen;
        },
        openSubMenu() {
            this.isSubMenuOpen = true;
        },
        closeSubMenu() {
            this.isSubMenuOpen = false;
        },
        toggleSubMenuMobile() {
            this.isSubMenuOpenMobile = !this.isSubMenuOpenMobile;
        },
        closeSubMenuMobile() {
            this.isSubMenuOpenMobile = false;
        }
        }
    };
</script>