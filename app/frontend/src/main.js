import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

// Configure Axios globally
axios.defaults.baseURL = 'http://localhost:8000/api'; // Set the base URL for all requests
axios.defaults.headers.common['Content-Type'] = 'application/json'; // Set default headers

const app = createApp(App);

app.config.globalProperties.$api = axios;

app.mount('#app')
