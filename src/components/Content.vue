<template>
  <div class="content">
    <TitleSection />
    <AboutSection />
    <ShopSection />
    <TutorialSection />
    <div class="content-section parallax" id="workshops">
      <h2>Workshops</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis asperiores iusto accusantium necessitatibus reiciendis dolores itaque, dolorem nam sunt architecto est, maxime iste. Molestiae, ipsa. Deleniti possimus quasi ullam similique.</p>
    </div>
    <div id="contact">
      <h2>Contact</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis asperiores iusto accusantium necessitatibus reiciendis dolores itaque, dolorem nam sunt architecto est, maxime iste. Molestiae, ipsa. Deleniti possimus quasi ullam similique.</p>
    </div>
  </div>
</template>

<script>
import TitleSection from "./TitleSection.vue";
import AboutSection from "./AboutSection.vue";
import ShopSection from "./ShopSection.vue";
import TutorialSection from "./TutorialSection.vue";

export default {
  name: "Content",
  components: {
    TitleSection,
    AboutSection,
    ShopSection,
    TutorialSection
  }
};
</script>

<style>
/deep/ .parallax {
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#workshops {
  background-image: url("../assets/jean-marc-vieregge-cDKqFb-NOZc-unsplash.jpg");
}
</style>
