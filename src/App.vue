<script>

export default {
  name: 'App',
  data() {
    return {
    }
  },

  /**
   * fungsi yang akan dijalankan disetiap komponen ini render
   * */
  mounted() {
    console.log('mounted')
    this.onDeleteData()
  },

  beforeMount() {
    console.log('before_mounted')
  },

  methods: {

    onDeleteData() {
      console.log('onDeleteData')
    }

  }
}
</script>

<template>
  <div>
    <nav>
      <ul class="flex flex-wrap gap-5 p-5 bg-amber-50">
        <li class="text-2xl text-amber-500 hover:text-amber-800 hover:border-b font-bold"><router-link :to="{name: 'HomePage'}">Home</router-link></li>
        <li class="text-2xl text-amber-500 hover:text-amber-800 hover:border-b font-bold"><router-link to="/todo-list">Todo List</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>
