<template>
  <div id="top">
    <Navbar/>
    <Content/>
  </div>
</template>

<script>
import Content from './components/Content';
import Navbar from './components/Navbar';

export default {
  name: 'App',
  components: {
    Content,
    Navbar,
  },
  data: () => ({
    
  }),
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
