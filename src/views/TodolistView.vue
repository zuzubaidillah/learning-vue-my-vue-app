<script>
import Navbar from "../components/HelloWorld.vue";
import Form from "./Form.vue";

export default {
  name: "TodolistView",
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
  <h1>Todo List</h1>
</template>

<style scoped>

</style>
