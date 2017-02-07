console.log('app.js')
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'

// routes
import Index from 'view/index.vue'
import About from 'view/About.vue'
Vue.use(VueRouter)

const routes = [
    {path: '/', component: Index},
    {path: '/about', component: About}
]
const router = new VueRouter({
    routes
})

new Vue({
    router,
    ...App
}).$mount('#app')