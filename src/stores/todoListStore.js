// store/todoListStore
import { defineStore } from 'pinia';

export const useTodoListStore = defineStore('todoListStore', {
	state: () => ({
		listTodo: [],
		formDataTodo: {
			todo: null,
			isChecked: false,
		}
	}),
	actions: {

		prosesSimpanDataTodo() {
			console.log(this.formDataTodo)
			this.listTodo.push(this.formDataTodo)
		},

	},
	getters: {
		doubleCount(state) {
			return state.count * 2; // Getter untuk mendapatkan count yang sudah dikali dua
		},
	},
});
