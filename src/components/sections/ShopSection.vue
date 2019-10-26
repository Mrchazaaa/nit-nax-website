<template>
  <div class="content-section jarallax" id="shop">
    <div class="col-0 col-md-1"></div>
    <div class="col-12 col-md-10">
      <h1 class="display-3">Portfolio</h1>
      <p class="lead">Checkout some of our previous work </p>
      <Gallery id="gallery1" :imgs="[
        require('@/assets/pillow.jpg'), 
        require('@/assets/IMG_3830.jpg'), 
        require('@/assets/mittens.jpg'), 
        require('@/assets/IMG_3830.jpg'), 
        require('@/assets/IMG_3830.jpg'), 
        require('@/assets/IMG_3830.jpg'), 
        require('@/assets/IMG_3830.jpg'), 
        require('@/assets/IMG_3830.jpg')]"/>
    </div>
    <div class="col-0 col-md-1"></div>
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
.content-section {
  padding-top: 50px !important;
}
h1 {
  font-weight: bold;
  font-size: 3rem; 
}
#shop {
  display: flex;
  padding: 20px 30px;
}
.jumbotron {
  display: inline-block !important;
  height: 1000px;
}
</style>
