<template>
  <div class="content-section jarallax" id="shop">
    <div class="col-1"></div>
    <div class="col-10">
      <h1 class="display-3">Some of Our Previous Work</h1>
      <Gallery id="gallery1" :imgs="[
        require('@/assets/IMG_3830.jpg'), 
        require('@/assets/IMG_3830.jpg'), 
        require('@/assets/IMG_3830.jpg'), 
        require('@/assets/IMG_3830.jpg'), 
        require('@/assets/IMG_3830.jpg'), 
        require('@/assets/IMG_3830.jpg'), 
        require('@/assets/IMG_3830.jpg'), 
        require('@/assets/IMG_3830.jpg'), 
        require('@/assets/IMG_3830.jpg'), 
        require('@/assets/IMG_3830.jpg'), 
        require('@/assets/IMG_3830.jpg'), 
        require('@/assets/IMG_3830.jpg'), 
        require('@/assets/IMG_3830.jpg')]"/>
    </div>
    <div class="col-1"></div>
  </div>
</template>

<script>
import Gallery from "../Gallery.vue";

export default {
  name: "ShopSection",
  components: {
    Gallery
  },
  mounted: function() {
  }
};
</script>

<style scoped>
div[class*="col"] {
  padding: 0px;
}
h1, p {
  margin-top: 50px;
  text-align: center;
  /* color: white; */
  font-size: 3rem; 
  margin-bottom: 25px;
}
#shop {
  /* background-image: url("../../assets/kelly-sikkema-8A7qKkvm_ew-unsplash.jpg"); */
  display: flex;
  padding: 20px 30px;
  /* height: 700px; */
}
.jumbotron {
  /* position: relative; */
  /* top: -400px; */
  display: inline-block !important;
  height: 1000px;
}
</style>
