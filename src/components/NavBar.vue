<template>
    <nav class="bg-[#8E4202] sm:px-4 sm:py-2 md:px-16 md:py-2 text-white font-medium">
        <!-- Desktop View -->
        <div class="container flex justify-between items-center">
            <RouterLink to="/" class="me-auto" style="display: flex; align-items: center;">
            <img src="../assets/logo.png" alt="Logo" style="height: 40px; margin-right: 10px; padding-top: 0;">
            Direktori Putusan
            <br>
            Mahkamah Agung
            </RouterLink>
    
            <div class="hidden md:flex space-x-8">
            <a href="/" class="hover:text-gray-300">Beranda</a>
            <div class="relative" @mouseenter="openSubMenu">
                <button @click="toggleSubMenu" class="focus:outline-none hover:text-gray-300">
                    <a href="/direktori">Direktori</a>
                </button>
                <div v-if="isSubMenuOpen.direktori" @mouseleave="closeSubMenu('direktori')" class="absolute left-0 mt-2 w-48 bg-[#FFFFFF] border-amber-600 font-normal text-gray-600 rounded-md shadow-lg z-20">
                    <a href="/putusan" class="block px-4 py-2 hover:text-gray-400">Putusan</a>
                    <a href="/kompilasi-kaidah-hukum" class="block px-4 py-2 hover:text-gray-400">Kompilasi Kaidah Hukum</a>
                    <a href="/restatement" class="block px-4 py-2 hover:text-gray-400">Restatement</a>
                    <a href="/rumusan-kamar" class="block px-4 py-2 hover:text-gray-400">Rumusan Kamar</a>
                    <a href="/rumusan-rakernas" class="block px-4 py-2 hover:text-gray-400">Rumusan Rakernas</a>
                    <a href="/yurisprudensi" class="block px-4 py-2 hover:text-gray-400">Yurisprudensi</a>
                    <a href="/peraturan" class="block px-4 py-2 hover:text-gray-400">Peraturan</a>
                    <a href="/daftar-pengadilan" class="block px-4 py-2 hover:text-gray-400">Daftar Pengadilan</a>
                </div>
            </div>
            <div class="relative" @mouseenter="openSubMenu('informasi'), closeSubMenu('direktori')" >
                <button @click="toggleSubMenu('informasi')" class="focus:outline-none hover:text-gray-300">
                    Informasi
                </button>
                <div v-if="isSubMenuOpen.informasi" @mouseleave="closeSubMenu('informasi')" class="absolute left-0 mt-2 w-48 bg-[#FFFFFF] border-amber-600 font-normal text-gray-600 rounded-md shadow-lg z-20">
                    <a href="/tentang" class="block px-4 py-2 hover:text-gray-400">Tentang</a>
                    <a href="/rss" class="block px-4 py-2 hover:text-gray-400">RSS</a>
                    <a href="/panduan" class="block px-4 py-2 hover:text-gray-400">Panduan</a>
                </div>
            </div>
            <a href="/kontak" class="hover:text-gray-300">Kontak</a>
            </div>
    
            <!-- Mobile View -->
            <div class="md:hidden">
            <button @click="toggleMenu" class="text-white hover:text-gray-300 pr-2">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            </div>
        </div>
        <div v-if="isMenuOpen" class="md:hidden pl-2 py-2">
            <a href="/" class="block hover:text-gray-300">Beranda</a>
            <div>
            <button @click="toggleSubMenuMobile('direktori')" class="block text-left w-full focus:outline-none hover:text-gray-300 pt-1">
                Direktori
            </button>
            <div v-if="isSubMenuOpenMobile === 'direktori'" class="px-4 rounded font-normal">
                <a href="/putusan" class="block hover:text-gray-300 pt-1">Putusan</a>
                <a href="/kompilasi-kaidah-hukum" class="block hover:text-gray-300 pt-1">Kompilasi Kaidah Hukum</a>
                <a href="/restatement" class="block hover:text-gray-300 pt-1">Restatement</a>
                <a href="/rumusan-kamar" class="block hover:text-gray-300 pt-1">Rumusan Kamar</a>
                <a href="/rumusan-rakernas" class="block hover:text-gray-300 pt-1">Rumusan Rakernas</a>
                <a href="/yurisprudensi" class="block hover:text-gray-300 pt-1">Yurisprudensi</a>
                <a href="/peraturan" class="block hover:text-gray-300 pt-1">Peraturan</a>
                <a href="/daftar-pengadilan" class="block hover:text-gray-300 pt-1">Daftar Pengadilan</a>
            </div>
            </div>

            <div>
            <button @click="toggleSubMenuMobile('informasi')" class="block text-left w-full focus:outline-none hover:text-gray-300 pt-1">
                Informasi
            </button>
            <div v-if="isSubMenuOpenMobile=== 'informasi'" class="px-4 rounded font-normal">
                <a href="/tentang" class="block hover:text-gray-300 pt-1">Tentang</a>
                <a href="/rss" class="block hover:text-gray-300 pt-1">RSS</a>
                <a href="/panduan" class="block hover:text-gray-300 pt-1">Panduan</a>
            </div>
            </div>
            <a href="/kontak" class="block hover:text-gray-300 pt-1">Kontak</a>
        </div>
        </nav>
    </template>
    
<script>
    export default {
        data() {
        return {
            isMenuOpen: false,
            isSubMenuOpen: {
                direktori: false,
                informasi: false
            },
            isSubMenuOpenMobile: {
                direktori: false,
                informasi: false
            }
        };
        },
        methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        toggleSubMenu() {
            this.isSubMenuOpen = !this.isSubMenuOpen;
        },
        openSubMenu(menu) {
            this.isSubMenuOpen[menu] = true;
        },
        closeSubMenu(menu) {
            this.isSubMenuOpen[menu] = false;
        },
        toggleSubMenuMobile(menu) {
            if (this.isSubMenuOpenMobile === menu) {
            this.isSubMenuOpenMobile = null; // Tutup jika sudah terbuka
            } else {
                this.isSubMenuOpenMobile = menu; // Buka sub-menu yang dipilih
            }
        },
        closeSubMenuMobile(menu) {
            this.isSubMenuOpenMobile[menu] = false;
        }
        }
    };
</script>