<template>
  <div class="content-section jarallax" id="workshops">
    <div class="col-2"></div>
    <div class="jumbotron col-8">
      <p
        class="lead"
      >This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4" />
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
      <Gallery id="gallery3" :imgs="[require('@/assets/bean.jpeg'), require('@/assets/bean.jpeg'), require('@/assets/bean.jpeg')]"/>
    </div>
    <div class="col-2"></div>
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
