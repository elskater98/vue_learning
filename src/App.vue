<template>
  <HelloWorld></HelloWorld>
  <Counter></Counter>
  <router-link to="/home">Home</router-link>
  <router-link to="/user/:id">Users</router-link>
  <router-view></router-view>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Counter from "./components/Counter";
export default {
  name: 'App',
  components: {
    HelloWorld,Counter
  },provide:{
    user:'admin'
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
