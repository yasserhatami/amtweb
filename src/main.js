import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import   'bootstrap/js/dist/collapse'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'http://localhost:3000';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const app = createApp(App);
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')


