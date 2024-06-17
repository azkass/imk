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
        path: '/src/assets/logo.png',
        name: 'Logo',
        component: () => import('../assets/logo.png')
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
