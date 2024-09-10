<script>
import Navbar from './components/HelloWorld.vue'

export default {
  name: 'App',
  data() {
    return {
      message: 'Dari App vue',
      listPlot: [
        {
          id: 1,
          name: '00:10-00:20'
        }
      ]
    }
  },

  components: {
    Navbar,
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
    <h1 class="text-4xl font-bold text-blue-600">Hello, TailwindCSS with Vue 3! {{list}} {{listPlot.length}}</h1>
  </div>
</template>

<style scoped>
</style>
