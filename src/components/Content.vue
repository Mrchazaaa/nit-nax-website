<template>
  <div class="content">
    <TitleSection />
    <AboutSection />
    <ShopSection />
    <TutorialSection />
    <WorkshopSection />
    <ContactSection />
  </div>
</template>

<script>
import TitleSection from "./sections/TitleSection.vue";
import AboutSection from "./sections/AboutSection.vue";
import ShopSection from "./sections/ShopSection.vue";
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
</style>
