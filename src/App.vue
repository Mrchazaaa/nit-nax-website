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
  background-color: #F8F9FA !important;
  scroll-behavior: smooth;
}
</style>
