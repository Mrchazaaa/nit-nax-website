<template>
  <div class="content">
    <TitlePage/>
    <div class="content-section" id="spacer">
      <h2>whitespace</h2>
    </div>
    <div class="content-section parallax" id="shop">
      <h2>Shop</h2>
    </div>
    <div class="content-section" id="tutorials">
      <h2>Tutorials</h2>
    </div>
    <div class="content-section parallax" id="workshops">
      <img src="@/assets/pink.svg" style="opacity: 0.8" />
      <h2>Workshops</h2>
    </div>
    <div id="contact">
      <h2>Contact</h2>
    </div>
  </div>
</template>

<script>
import TitlePage from './TitlePage.vue';

export default {
  name: "Content",
  components: {
    TitlePage,
  },
};
</script>

<style>
.content-section {
  height: 100vh;
}
.parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#shop {
  background-image: url("../assets/kelly-sikkema-8A7qKkvm_ew-unsplash.jpg");
}
#workshops {
  background-image: url("../assets/ursula-castillo-aLfHUE8o5Xc-unsplash.jpg");
}
</style>
