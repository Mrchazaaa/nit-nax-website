<template>
  <div class="content-section jarallax" id="shop">
    <div class="col-2"></div>
    <div class="col-8">
    <!-- <div class="jumbotron col-8"> -->
      <h1 class="display-3">Visit Our Shop!</h1>
      <p
        class="lead"
      >This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4" />
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
      <Gallery id="gallery1" :imgs="[require('@/assets/bean.jpeg'), require('@/assets/bean.jpeg'), require('@/assets/bean.jpeg')]"/>
    </div>
    <div class="col-2"></div>
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
    window.jarallax(document.getElementsByClassName("jarallax"), {
      // speed: 0.5
      speed: 0.8
    });
  }
};
</script>

<style scoped>
/* .content-section{
  margin: 20px;
} */
#shop {
  background-image: url("../../assets/kelly-sikkema-8A7qKkvm_ew-unsplash.jpg");
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
