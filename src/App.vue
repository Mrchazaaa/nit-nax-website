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
  /* background-color: #353839 !important; */
  /* background-color: #D3D1D4 !important; */
  background-color: white !important;
  
  scroll-behavior: smooth;
}
</style>
