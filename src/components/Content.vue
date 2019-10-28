<template>
  <div id="content-container">
    <!-- <div style="height: 800px; background-color: green;">
      <div
        class="container"
        style="height: 800px; margin: 0px; width: 100% !important; max-width: none"
      >
        <div class="row align-items-center">
          <div
            class="col align-self-center col-12 col-md-3"
            style="background-color: red;height: 400px;"
          ><p>One of three columns</p><p>One of three columns</p><p>One of three columns</p></div>
          <div class="col align-self-center col-md-9" style="background-color: blue;height: 400px;">One of three columns</div>
        </div>
      </div>
    </div>-->

    <TitleSection />
    <ShopSection />
    <WorkshopSection />
    <TutorialSection />
    <ContactSection />
  </div>
</template>

<script>
import TitleSection from "./sections/TitleSection.vue";
import ShopSection from "./sections/ShopSection.vue";
import TutorialSection from "./sections/TutorialSection.vue";
import WorkshopSection from "./sections/WorkshopSection.vue";
import ContactSection from "./sections/ContactSection.vue";

export default {
  name: "Content",
  components: {
    TitleSection,
    ShopSection,
    TutorialSection,
    WorkshopSection,
    ContactSection
  }
};
</script>

<style>
.col-container {
  padding-bottom: 50px !important;
  max-width: 1000px !important;
  word-wrap: break-word;
}
.content-section {
  padding: 50px 30px;
}
div[class*="col-"] {
  padding: 0px !important;
}
h1 {
  font-size: 4rem;
  line-height: 0.8;
}
h2 {
  font-weight: bold;
  font-size: 2.5rem;
}
</style>
