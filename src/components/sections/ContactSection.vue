<template>
  <div class="jarallax d-flex content-section" id="contact">
    <div class="flex-fill"></div>
    <div class="col-12 col-md-10 col-container">
      <h1 class="display-3">About Us</h1>
      <div id="image-container" class="d-none">
        <img class="" src="@/assets/bean.jpeg" />
      </div>
      <p>NitNax is the creative outlet of Tina Saint. A lifelong knitter & seamstress who loves making affordable, comfortable and stylish one-of-a-knind knitwear.
      <br>Feel free to contact us regarding knitting advice, booking a workshop or quotes for custom hand-knitted items.</p>
      <a href="https://twitter.com/nitnax?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @nitnax</a>
    </div>
    <div class="flex-fill"></div>
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
h1 {
  padding-top: 50px;
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