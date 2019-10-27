<template>
  <!-- <div class="jumbotron" id="tutorials"> -->
  <div class="d-flex" id="tutorials">
    <div class="flex-fill"></div>
    <div class="col-12 col-md-10 col-container">
      <h1 class="display-3">Tutorials</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quis sit vitae iste totam, sequi cum, atque natus nobis quasi pariatur dignissimos dolorem tempore fugit dolor ducimus quod doloremque alias?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quis sit vitae iste totam, sequi cum, atque natus nobis quasi pariatur dignissimos dolorem tempore fugit dolor ducimus quod doloremque alias?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quis sit vitae iste totam, sequi cum, atque natus nobis quasi pariatur dignissimos dolorem tempore fugit dolor ducimus quod doloremque alias?</p>

      <!-- cast on -->
      <iframe
        width="1905"
        
        src="https://www.youtube.com/embed/rtdd-GJGEpA"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <!-- provisional cast on -->
      <iframe
        width="1905"
        
        src="https://www.youtube.com/embed/rM9GBoYJZxc"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="flex-fill"></div>
  </div>
</template>

<script>
export default {
  name: "TutorialSection",
  components: {
  },
  mounted: () => {}
};
</script>

<style scoped>
h1 {
  padding-top: 50px;
}
#tutorials {
  margin: 0px;
  display: flex;
}
iframe {
  /* height: auto; */
  width: 50%;
  min-width: 0px !important;
  padding: 10px;
}
</style>
