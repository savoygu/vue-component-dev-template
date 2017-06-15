import Vue from 'vue'
import App from './App.vue'
import {
  Checkbox,
  Button
} from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Area from '../../src/index.js'

Vue.component('VArea', Area)
Vue.use(Checkbox)
Vue.use(Button)

new Vue({
    el: '#app',
    render: h => h(App)
})
