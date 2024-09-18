<script setup>
import {useTodoListStore} from "../stores/todoListStore.js"

const todoListStore = useTodoListStore()

const onProsesSimpan = () => {
  // validasi
  if (!todoListStore.formDataTodo.todo) {
  // if (todoListStore.formDataTodo.todo === '' || todoListStore.formDataTodo.todo === null) {
    alert('Todo required')
  } else {
    // jika lolos validasi
    console.log('lolos')
    todoListStore.prosesSimpanDataTodo(todoListStore.formDataTodo)
  }
}
</script>

<template>
  <section class="p-10">
    <!--header-->
    <div class="mb-10">
      <h1>Todo List</h1>
    </div>

    <!--body-->
    <div class="bg-amber-50 p-5 flex flex-col">
      <div class="mb-10">
        <h3>Formulir</h3>
        <div class="flex gap-4 flex-col">
          <label for="">
            Todo
            <input v-model="todoListStore.formDataTodo.todo" type="text" class="w-full border" placeholder="isi TODO">
          </label>
          <div class="w-full flex">
            <div class="mr-3">
              <input v-model="todoListStore.formDataTodo.isChecked" type="checkbox" class="w-full inline-block">
            </div>
            <span>Sudah Dikerjakan?</span>
          </div>
          <div class="w-full flex">
            <button @click="onProsesSimpan" class="border bg-amber-600 text-white p-3" type="button">Simpan</button>
          </div>
        </div>

        <pre>
          {{todoListStore.formDataTodo}}
        </pre>
      </div>

      <div class="mb-10">
        <h3>List Data</h3>
        <div>
          <div v-for="(item,i) in todoListStore.listTodo" :key="i">
            {{i+1}} {{item.todo}} <span v-if="item.isChecked">TRUE</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
