import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// Vuetify
import '@mdi/font/css/materialdesignicons.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { mdi } from "vuetify/iconsets/mdi";
import 'vuetify/styles';

// Tailwind
import './assets/style.css';



const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        sets: {
            mdi
        }
    },
    })
const app = createApp(App)
    app.use(router)
    app.mount('#app')
    app.use(vuetify)