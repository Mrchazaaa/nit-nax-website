<template>
  <div class="content">
    <TitleSection />
    <!-- <div id="spacer"></div> -->
    <ShopSection />
    <AboutSection />
    <TutorialSection />
    <WorkshopSection />
    <ContactSection />
  </div>
</template>

<script>
import TitleSection from "./sections/TitleSection.vue";
import ShopSection from "./sections/ShopSection.vue";
import AboutSection from "./sections/AboutSection.vue";
import TutorialSection from "./sections/TutorialSection.vue";
import WorkshopSection from "./sections/WorkshopSection.vue";
import ContactSection from "./sections/ContactSection.vue";

export default {
  name: "Content",
  components: {
    TitleSection,
    AboutSection,
    ShopSection,
    TutorialSection,
    WorkshopSection,
    ContactSection
  }
};
</script>

<style>
#spacer {
  height:500px;
  /* background-color: #3E4E50; */
}
</style>
