<template>
  <!-- <div :id="id" class="gallery">
    <a v-for="(img, index) in imgs" v-bind:key="id+index" :href="img" data-sub-html=".caption">
      <img :src="img" />
        require('@/assets/IMG_3830.jpg')]"/>
      <div class="caption">
        <h4>Caption1</h4>
        <p>Desc1</p>
      </div>
    </a>
  </div>-->

  <div class="gallery-container">
    <ul :id="id" class="gallery">
      <li v-for="(img, index) in imgs" v-bind:key="id+index" :data-src="img" data-sub-html=".caption">
        <img :src="img" />
        <div class="caption">
          <h4>Caption1</h4>
          <p>Desc1</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Gallery",
  data: function() {
    return {
    };
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
<style>
#gallery-container {
  display: flex;
  justify-content: center;
}
.gallery {
  list-style: none;
}
#relative-caption {
  width: 100%;
  max-width: 1200px;
  display: inline-block;
  padding: 0 !important;
  text-align: center;
  margin: 0 auto !important;
}
.caption {
  margin-top: 15px;
}
li {
  width: calc(50% - 60px);
  margin: 30px;
  float: left;
  cursor: pointer;
}
img {
  width: 100%;
}
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  li {
    width: calc(33% - 60px);
  }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  li {
    width: calc(25% - 60px);
  }
}
</style>