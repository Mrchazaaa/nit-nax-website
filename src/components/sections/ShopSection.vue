<template>
  <div class="content-section jarallax d-flex" id="shop">
    <div class="flex-fill"></div>
    <div class="col-12 col-md-10 col-container">
      <h2>Products</h2>
      <p class="lead">Checkout some of our previous work</p>
      <Gallery
        id="gallery1"
        :imgs="[
        require('@/assets/pillow1.jpg'), 
        require('@/assets/IMG_3830.jpg'), 
        require('@/assets/mittens.jpg'), 
        require('@/assets/cardigan.jpg'), 
        require('@/assets/flask.jpg'), 
        require('@/assets/pillow2.jpg'), 
        require('@/assets/pot.jpg'), 
        require('@/assets/hang.jpg')]"
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
  mounted: function() {}
};
</script>

<style lang="scss">
#shop {
  h2 {
    font-weight: bold;
    font-size: 2.75rem;
  }
}
</style>
