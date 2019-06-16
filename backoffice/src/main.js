import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import { routes } from './routes'
import "./plugins/echarts";
import 'vuetify/dist/vuetify.min.css'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Vuetify)

const router = new VueRouter({
    routes,
    mode: 'history'
})
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})