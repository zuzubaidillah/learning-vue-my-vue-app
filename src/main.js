import { createApp } from 'vue'
import './style.css'
import './assets/main.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';

// Buat instance Pinia
const pinia = createPinia();

createApp(App)
	.use(pinia)
	.use(router)
	.mount('#app')
