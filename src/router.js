import{ createRouter, createWebHistory} from 'vue-router'
import MainPage from "@/pages/MainPage";
import PhotosPage from "@/pages/PhotosPage";

const routes = [
    {
        path: '/',
        name: 'home',
        component: MainPage
    },
    {
        path: '/photo',
        name: 'photos',
        component: PhotosPage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router