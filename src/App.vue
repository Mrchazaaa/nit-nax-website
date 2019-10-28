<template>
  <div id="top">
    <Navbar />
    <Content />
  </div>
</template>

<script>
import Content from "./components/Content";
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Content,
    Navbar
  },
  data: () => ({})
};
</script>

<style>
body,
html {
  /* background-color: #353839 !important; */
  /* background-color: #D3D1D4 !important; */
  background-color: white !important;
  font-size: 100%;
  font-size: 1rem;
  scroll-behavior: smooth;
}

/* Small devices (landscape phones, 576px and up) */
@media only screen and (min-width: 576px) {
  body,
  html {
    /* background-color: red !important; */
    /* font-size: 1rem; */
  }
}
/* Medium devices (tablets, 768px and up) */
@media only screen and (min-width: 768px) {
}
/* Large devices (desktops, 992px and up) */
@media screen and (min-width: 992px) {
}
/* Extra large devices (large desktops, 1200px and up) */
@media screen and (min-width: 1200px) {
}
</style>
