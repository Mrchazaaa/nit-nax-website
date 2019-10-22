<template>
  <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + (image.hasOwnProperty('poster') ? image.poster : image) + ')', width: '300px', height: '200px' }"
    ></div>
  </div>
</template>
 
<script>
import VueGallery from "vue-gallery";

export default {
  name: "Gallery",
  data: function() {
    return {
      images: [
        require("../assets/clothing.png"),
        require("../assets/clothing.png"),
        require("../assets/clothing.png"),
        require("../assets/clothing.png"),
        {
          title: "Casting On",
          href: "https://www.youtube.com/watch?v=rtdd-GJGEpA",
          type: "text/html",
          youtube: "rtdd-GJGEpA",
          poster: "https://img.youtube.com/vi/rtdd-GJGEpA/maxresdefault.jpg"
        },
        {
          title: "Provisional Cast On",
          href: "https://www.youtube.com/watch?v=rM9GBoYJZxc",
          type: "text/html",
          youtube: "rM9GBoYJZxc",
          poster: "https://img.youtube.com/vi/rM9GBoYJZxc/maxresdefault.jpg"
        }
      ],
      index: null
    };
  },

  components: {
    gallery: VueGallery
  }
};
</script> 
 
<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style> 