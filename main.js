import Vue from 'vue'
import App from './App'
import store from '@/store/index.js';
import selfTaskColor from '@/components/taskmodel/self-task-color.vue';

Vue.component('selfTaskColor', selfTaskColor);
Vue.prototype.$store = store;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
