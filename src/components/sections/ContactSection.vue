<template>
  <div class="jumbotron" id="contact">
    <div class="col-1 col-lg-3"></div>
    <div class="col-10 col-lg-6">
      <h1 class="display-3">About Us</h1>
      <div id="image-container" class="d-none">
        <img class="" src="@/assets/bean.jpeg" />
      </div>
      <p>NitNax is the creative outlet of Tina Saint. A lifelong knitter & seamstress who loves making affordable, comfortable and stylish one-of-a-knind knitwear.</p>
      <p>Originally making custom knitwear for friends and family, NitNax was born to provide anyone with access to beutiful custom knitwear at an affordable price!</p>
      <p>We also sell other homemade</p>
    </div>
    <div class="col-1 col-lg-3"></div>
  </div>
</template>

<script>
export default {
  name: "AboutSection"
};
</script>

<style scoped>
@include media-breakpoint-up(md) { #image-container {display: none} }
#contact {
  display: flex;
  margin: 0px;
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
