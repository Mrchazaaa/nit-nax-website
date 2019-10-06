<template>
  <div id="app">
    <Navbar/>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Navbar
  }
}
</script>

<style>
@import 'assets/css/bootstrap.min.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
