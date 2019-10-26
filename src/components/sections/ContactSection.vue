<template>
  <div class="jarallax" id="contact">
    <div class="col-0 col-md-1"></div>
    <div class="col-12 col-md-10">
      <h1 class="display-3">About Us</h1>
      <div id="image-container" class="d-none">
        <img class="" src="@/assets/bean.jpeg" />
      </div>
      <p>NitNax is the creative outlet of Tina Saint. A lifelong knitter & seamstress who loves making affordable, comfortable and stylish one-of-a-knind knitwear.</p>
      <p>Originally making custom knitwear for friends and family, NitNax was born to provide anyone with access to beutiful custom knitwear at an affordable price!</p>
      <p>We also sell other homemade</p>
    </div>
    <div class="col-0 col-md-1"></div>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
  mounted: function() {
    window.jarallax(document.getElementsByClassName("jarallax"), {
      speed: 0.1
    });
  }
};
</script>

<style scoped>
@include media-breakpoint-up(md) { #image-container {display: none} }
#contact {
  display: flex;
  margin: 0px;
  background-image: url('../../assets/kelly-sikkema-8A7qKkvm_ew-unsplash.jpg');
}
h1, p {
  color: white;
}
img {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  object-fit: cover;
}
#image-container {
  float: right;
  display: flex;
  align-items: center;
  height: 100%;
}
</style>
