<template>
  <ul :id="id" class="gallery">
    <li v-for="(img, index) in imgs" v-bind:key="id+index" :data-src="img" data-sub-html=".caption">
      <img :src="img" />
      <div class="caption">
        <h4>Caption1</h4>
        <p>Desc1</p>
      </div>
    </li>
  </ul>
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
    window.lightGallery(document.getElementById(this.id), {
      subHtmlSelectorRelative: true
    });
  }
};
</script>

<style src='lightgallery.js/dist/css/lightgallery.css'></style>
<style scoped>
.gallery {
  list-style: none;
  padding: 0px !important;
}
.caption {
  margin-top: 15px;
}
.caption p {
  margin-bottom: 10px;
}
ul {
  margin-left: -10px;
  margin-right: -10px;
}
li {
  width: calc(50% - 20px);
  /* margin: 10px 30px; */
  margin: 10px 10px;
  float: left;
  cursor: pointer;
}
li img {
  width: 100% !important ;
  height: 300px !important;
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  li {
    width: calc(33% - 20px);
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  li {
    width: calc(25% - 20px);
  }
}
</style>
