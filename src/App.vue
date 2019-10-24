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
body, html {
  background-color: #3E4E50 !important;
  scroll-behavior: smooth;
}
</style>
