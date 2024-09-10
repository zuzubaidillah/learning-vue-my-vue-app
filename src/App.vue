<script>
import Navbar from './components/HelloWorld.vue'
import Form from './views/Form.vue'

export default {
  name: 'App',
  data() {
    return {
      message: 'Dari App vue',
    }
  },

  components: {
    Navbar,
    Form,
    // navbar: () => import('./components/Navbar.vue'),
  },

  props: ['list'],

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
  <Navbar :msg="message"/>
  <div class="text-center">
    <h1 class="text-4xl font-bold text-blue-600">Hello, TailwindCSS with Vue 3!</h1>
  </div>
  <Form/>
</template>

<style scoped>
</style>
