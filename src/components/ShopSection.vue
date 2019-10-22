<template>
  <div class="content-section parallax" id="shop">
    <div class="col-2"></div>
    <div class="jumbotron col-8">
      <h1 class="display-3">Visit Our Shop!</h1>
      <p
        class="lead"
      >This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4" />
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>
      <Gallery/>
    </div>
    <div class="col-2"></div>
  </div>
</template>

<script>
import Gallery from './Gallery.vue';

export default {
  name: "ShopSection",
  components: {
    Gallery
  }
};
</script>

<style scoped>

#shop {
  background-image: url("../assets/kelly-sikkema-8A7qKkvm_ew-unsplash.jpg");
  display: flex;
  padding: 20px 30px;
}
.parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
