import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomePage.vue')
    },
    {
        path: '/klasifikasi',
        name: 'Klasifikasi',
        component: () => import('@/views/KlasifikasiPage.vue')
    },
    {
        path: '/putusan-penting',
        name: 'PutusanPenting',
        component: () => import('@/views/PutusanPenting.vue')
    },
    {
        path: '/kompilasi-kaidah-hukum',
        name: 'Kompilasi Kaidah Hukum',
        component: () => import('@/views/KompilasiKaidahHukum.vue')
    },
    {
        path:'/restatement',
        name:'Restatement',
        component: () => import('@/views/RestatementPage.vue')
    },
    {
        path:'/rumusan-kamar',
        name:'RumusanKamar',
        component: () => import('@/views/RumusanKamar.vue')
    },
    {
        path:'/rumusan-rakernas',
        name:'RumusanRakernas',
        component: () => import('@/views/RumusanRakernas.vue')
    },
    {
        path:'/yurisprudensi',
        name:'Yurisprudensi',
        component: () => import('@/views/YurisprudensiPage.vue')
    },
    {
        path:'/mahkamah-agung',
        name:'MahkamahAgung',
        component: () => import('@/views/MahkamahAgung.vue')
    },
    {
        path:'/daftar-pengadilan',
        name:'DaftarPengadilan',
        component: () => import('@/views/DaftarPengadilan.vue')
    },
    {
        path:'/pengadilan-pajak',
        name:'PengadilanPajak',
        component: () => import('@/views/PengadilanPajak.vue')
    },
    {
        path:'/peraturan',
        name:'Peraturan',
        component: () => import('@/views/PeraturanPage.vue')
    },
    {
        path:'/tentang',
        name:'Tentang',
        component: () => import('@/views/TentangPage.vue')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
