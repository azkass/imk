import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/HomePage.vue')
    },
    {
        path: '/putusan',
        name: 'Putusan',
        component: () => import('@/views/PutusanPage.vue')
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
        path:'/isi-restatement',
        name:'IsiRestatement',
        component: () => import('@/views/IsiRestatement.vue')
    },
    {
        path:'/rumusan-kamar',
        name:'RumusanKamar',
        component: () => import('@/views/RumusanKamar.vue')
    },
    {
        path:'/isi-rumusan-kamar',
        name:'IsiRumusanKamar',
        component: () => import('@/views/IsiRumusanKamar.vue')
    },
    {
        path:'/rumusan-rakernas',
        name:'RumusanRakernas',
        component: () => import('@/views/RumusanRakernas.vue')
    },
    {
        path:'/isi-rumusan-rakernas',
        name:'IsiRumusanRakernas',
        component: () => import('@/views/IsiRumusanRakernas.vue')
    },
    {
        path:'/yurisprudensi',
        name:'Yurisprudensi',
        component: () => import('@/views/YurisprudensiPage.vue')
    },
    {
        path:'/isi-yurisprudensi',
        name:'IsiYurisprudensi',
        component: () => import('@/views/IsiYurisprudensiPage.vue')
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
    },
    {
        path: '/bar',
        name: 'Bar',
        component: () => import('@/components/RekapitulasiPutusan.vue')
    },
    {
        path: '/test',
        name: 'Test',
        component: () => import('@/components/TestPage.vue')
    },
    {
        path: '/isi-putusan',
        name: 'IsiPutusan',
        component: () => import('@/views/IsiPutusan.vue')
    },
    {
        path: '/kontak',
        name: 'Kontak',
        component: () => import('@/views/KontakKami.vue')
    },
    {
        path: '/isi-peraturan',
        name: 'IsiPeraturan',
        component: () => import('@/views/IsiPeraturan.vue')
    },
    {
        path: '/panduan',
        name: 'Panduan',
        component: () => import('@/views/PanduanPage.vue')
    },
    {
        path: '/rss',
        name: 'RSS',
        component: () => import('@/views/RssPage.vue')
    },
    {
        path: '/src/assets/logo.png',
        name: 'Logo',
        component: () => import('@/assets/logo.png')
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
