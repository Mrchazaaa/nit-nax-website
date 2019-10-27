<template>
  <div id="content-container">
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
#content-container /deep/ .col-container {
  padding-bottom: 50px !important; 
  max-width: 1000px !important;

}
#content-container /deep/ .content-section {
  padding: 50px 30px;
}
</style>
