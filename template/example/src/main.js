import Vue from 'vue'
import App from './App.vue'

import Hello from '../../src/index.js'
Vue.component(Hello.name, Hello)

import VueDemonstration from 'vue-demonstration'
Vue.component('demonstration', VueDemonstration)

new Vue({
    el: '#app',
    render: h => h(App)
})
