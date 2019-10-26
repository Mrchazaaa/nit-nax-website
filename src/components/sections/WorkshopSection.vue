<template>
  <div class="content-section jarallax" id="workshops">
    <div class="col-0 col-md-1"></div>
    <div class="jumbotron col-12 col-md-10">
      <h1 class="display-3">Workshops</h1>
      <p
        class="lead"
      >We also provide knitting workshops and beginner classes at various venues across the UK. 
      If you are interested in hosting/attending one of these workshops, please contact us at: 
      <a href="mailto:nitnax.business@gmail.com" class="lead">nitnax.business@gmail.com</a></p>
      <hr class="my-4" />
      <Gallery id="gallery3" :imgs="[require('@/assets/bean.jpeg'), require('@/assets/bean.jpeg'), require('@/assets/bean.jpeg')]"/>
    </div>
    <div class="col-0 col-md-1"></div>
  </div>
</template>

<script>
import Gallery from '../Gallery.vue';

export default {
  name: "ShopSection",
  components: {
    Gallery
  },
  mounted: function() {
    window.jarallax(document.getElementsByClassName("jarallax"), {
      speed: 0.5
    });
  }
};
</script>

<style scoped>

#workshops {
  background-image: url('../../assets/jean-marc-vieregge-cDKqFb-NOZc-unsplash.jpg');
  display: flex;
  padding: 20px 30px;
}
</style>
