<template>
  <div class="content">
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
</style>
