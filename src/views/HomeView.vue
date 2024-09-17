<script>
import Navbar from "../components/HelloWorld.vue";
import Form from "./Form.vue";

export default {
  name: "HomeView",
  data() {
    return {
      message: 'Dari App Vue',
    }
  },
  computed: {},

  components: {
    Navbar,
    Form,
  },
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
