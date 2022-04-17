import {createApp} from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
import router from "@/router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from "@/store";

loadFonts()

// const app = createApp(App)
// app.use(VueAxios, axios) // 👈
// app.mount('#app')

createApp(App)
    .use(vuetify)
    .use(router)
    .use(store)
    .use(VueAxios, axios)
    .mount('#app')
