import Vue from 'vue'
import App from './App'
import Message from '@/components/taskmodel/taskColor.js';
Vue.prototype.$message = Message

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
