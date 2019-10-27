<template>
  <div class="content-section jarallax d-flex" id="workshops">
    <div class="flex-fill"></div>
    <div class="jumbotron col-12 col-md-10 col-container">
      <h1 class="display-3">Workshops</h1>
      <p class="lead">
        We also provide knitting workshops and beginner classes at various venues across the UK.
        If you are interested in hosting/attending one of these workshops, please contact us at:
        <a
          href="mailto:nitnax.business@gmail.com"
          class="lead"
        >nitnax.business@gmail.com</a>
      </p>
      <hr class="my-4" />
      <Gallery
        id="gallery3"
        :imgs="[require('@/assets/bean.jpeg'), require('@/assets/bean.jpeg'), require('@/assets/bean.jpeg')]"
      />
    </div>
    <div class="flex-fill"></div>
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
      speed: 0.5
    });
  }
};
</script>

<style lang="scss">
#workshops {
  background-image: url("../../assets/jean-marc-vieregge-cDKqFb-NOZc-unsplash.jpg");
  display: flex;
  padding: 20px 30px;
  .jumbotron {
    margin: 0;
  }
}
</style>
