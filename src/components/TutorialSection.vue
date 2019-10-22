<template>
  <div class="jumbotron" id="tutorials">
    <div class="col-3"></div>
    <div class="col-6">
      <h2>Tutorials</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quis sit vitae iste totam, sequi cum, atque natus nobis quasi pariatur dignissimos dolorem tempore fugit dolor ducimus quod doloremque alias?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quis sit vitae iste totam, sequi cum, atque natus nobis quasi pariatur dignissimos dolorem tempore fugit dolor ducimus quod doloremque alias?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quis sit vitae iste totam, sequi cum, atque natus nobis quasi pariatur dignissimos dolorem tempore fugit dolor ducimus quod doloremque alias?</p>
      <Gallery />
    </div>

    <div class="col-3"></div>
  </div>
</template>

<script>
import Gallery from "./Gallery.vue";

export default {
  name: "TutorialSection",
  components: {
    Gallery
  }
};
</script>

<style scoped>
#tutorials {
  margin: 0px;
  display: flex;
}
</style>
