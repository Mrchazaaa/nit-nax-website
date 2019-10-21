<template>
  <div class="content">
    <TitleSection />
    <AboutSection />

    <div class="content-section parallax" id="shop" style="padding: 20px;">
      <h2>Shop</h2>
      <div class="jumbotron">
        <h1 class="display-3">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
      </div>
    </div>
    <div class="content-section" id="tutorials">
      <h2>Tutorials</h2>
    </div>
    <div class="content-section parallax" id="workshops">
      <h2>Workshops</h2>
    </div>
    <div id="contact">
      <h2>Contact</h2>
    </div>
  </div>
</template>

<script>
import TitleSection from "./TitleSection.vue";
import AboutSection from "./AboutSection.vue";

export default {
  name: "Content",
  components: {
    TitleSection,
    AboutSection
  }
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
  background-image: url("../assets/jean-marc-vieregge-cDKqFb-NOZc-unsplash.jpg");
}
</style>
