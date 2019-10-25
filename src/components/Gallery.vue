<template>
  <div :id="id">
    <a v-for="(img, index) in imgs" v-bind:key="id+index" :href="img">
      <img :src="img" />
    </a>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data: function() {
    return {};
  },
  props: {
    id: String,
    imgs: Array
  },
  mounted: function() {
    window.lightGallery(document.getElementById(this.id));
  }
};
</script>

<style src='lightgallery.js/dist/css/lightgallery.css'></style>
<style>
img {
  width: 200px;
  height: 200px;
}
</style>