<template>
  <div id="app">
    <Navbar/>
    <img alt="Vue logo" src="./assets/logo.png">
    <ContentContainer/>
  </div>
</template>

<script>
import ContentContainer from './components/ContentContainer.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'app',
  components: {
    ContentContainer,
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
