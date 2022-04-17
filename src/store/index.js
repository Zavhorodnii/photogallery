import Vuex from 'vuex'
// import {createApp} from "vue/dist/vue";
// import App from "@/App";
import photoModule from "@/store/photoModule";



export default new Vuex.Store({
    modules: {
        photoModule
    }
})