<template>
  <div>
    <Navbar/>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Navbar,
  },
  data: () => ({
    
  }),
};
</script>

<style>
</style>
