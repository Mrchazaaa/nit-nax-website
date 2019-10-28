<template>
  <div class="jarallax d-flex content-section" id="contact">
    <div class="flex-fill"></div>
    <div class="col-12 col-md-10 col-container">
      <!-- <h2>About Us</h2>
      <div id="image-container" class="d-none">
        <img class src="@/assets/bean.jpeg" />
      </div>
      <p>
        NitNax is the creative outlet of Tina Saint. A lifelong knitter & seamstress who loves making affordable, comfortable and stylish one-of-a-knind knitwear.
        <br />Feel free to contact us regarding knitting advice, booking a workshop or quotes for custom hand-knitted items.
      </p> -->

      <div class="container">
        <div class="row">
          <img class="col-4" src="@/assets/twitter.svg" />
          <div class="col-4 cont">
            <p>Feel free to contact us at:</p>
            <a href="mailto:nitnax.business@gmail.com">nitnax.business@gmail.com</a>
          </div>
          <img class="col-4" src="@/assets/etsy.svg" />
        </div>
      </div>
      <div id="image-container" class="d-none">
        <img class src="@/assets/bean.jpeg" />
      </div>
      <p>
        NitNax is the creative outlet of Tina Saint. A lifelong knitter & seamstress who loves making affordable, comfortable and stylish one-of-a-knind knitwear.
        Feel free to contact us regarding knitting advice, booking a workshop or quotes for custom hand-knitted items.
      </p>
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

<style lang="scss">
#contact {
  display: flex;
  margin: 0px;
  background-image: url("../../assets/kelly-sikkema-8A7qKkvm_ew-unsplash.jpg");
  text-align: center;

  h2,
  p {
    color: white;
  }
  h1 {
    padding-top: 50px;
  }
  img {
    height: 10vh;
  }
  #image-container {
    float: right;
    display: flex;
    align-items: center;
    height: 100%;
  }
  .cont {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
      font-size: 0.75rem;
      margin-bottom: 0px;
      float: left;
      width: 100%;
      text-align: center;
    }
    a {
      text-align: center;
      width: 100%;
      padding-left: 0px;
      padding-right: 0px;
      font-size: 0.75rem;
    }
  }
}
</style>