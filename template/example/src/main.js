import Vue from 'vue'
import App from './App.vue'
import Hello from '../../src/index.js'

Vue.component(Hello.name, Hello)

new Vue({
    el: '#app',
    render: h => h(App)
})
