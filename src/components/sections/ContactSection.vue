<template>
  <div class="jumbotron" id="contact">
    <div class="col-3"></div>
    <div class="col-6">
      <div id="image-container">
        <img src="@/assets/bean.jpeg" />
      </div>
      <h1 class="display-3">About Us</h1>
      <p>NitNax is the creative outlet of Tina Saint. A lifelong knitter & seamstress who loves making affordable, comfortable and stylish one-of-a-knind knitwear.</p>
      <p>Originally making custom knitwear for friends and family, NitNax was born to provide anyone with access to beutiful custom knitwear at an affordable price!</p>
      <p>We also sell other homemade</p>
    </div>
    <div class="col-3"></div>
  </div>
</template>

<script>
export default {
  name: "AboutSection"
};
</script>

<style scoped>
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
