import { createRouter, createWebHistory } from 'vue-router'

// Import halaman yang akan digunakan
import Home from '../views/HomeView.vue'
import TodolistView from '../views/TodolistView.vue'
import NotFoundView from '../views/NotFoundView.vue'

// Definisikan rute
const routes = [
	{
		path: '/',
		name: 'MainPage',
		component: Home
	},
	{
		path: '/home',
		name: 'HomePage',
		component: Home
	},
	{
		path: '/todo-list',
		name: 'About',
		component: TodolistView
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFoundPage',
		component: NotFoundView
	}
]

// Buat router instance
const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
