<template>
<div id="add-border">
  <div class="content-section container-fluid jarallax" id="home">
    <div class="col-12 col-lg-5" style="padding: 0px;">
      <div id="pink-blob">
        <h1>
          Winter
          <br />Sale
        </h1>
        <p>Handcrafted & stylish</p>
        <button type="button" class="btn btn-primary btn-lg">Shop</button>
      </div>
    </div>
    <div id="showcase" class="col-7"></div>
  </div>
  </div>
</template>

<script>
export default {
  name: "TitleSection",
  mounted: () => {
    window.$("#pink-blob").css({ left: -window.$("#pink-blob").width() }, 350);
    window.$("#pink-blob").animate({ left: "0px" }, 725);
    window.jarallax(document.getElementsByClassName("jarallax"), {
      speed: 0.5
    });
  }
};
</script>

<style scoped>
@media only screen and (max-height: 600px) {
  .content-section {
    height: calc(100vh - 64px) !important;
  }
}
@media only screen and (min-height: 601px) {
  .content-section {
    height: 600px !important;
  }
}
@media screen and (max-width: 991px) {
  #showcase {
    display: none;
  }
  #pink-blob {
    background-image: url("../../assets/pink.svg") !important;
    background-position: center !important;
    background-repeat: no-repeat;
    background-size: contain !important;
    margin-left: 30px;
    margin-right: 30px;
    height: calc(100% - 60px) !important;
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
#home {
  background-image: url("../../assets/victoria-bilsborough-nLNimOqmbpg-unsplash.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 !important;
  text-align: center;
  box-sizing: border-box;
  margin-left: 0px !important;
  margin-right: 0px !important;
  display: flex;
  justify-content: center;
}
/* ================================================================ */
@font-face {
  font-family: 'selima';
  src: url('../../assets/selima-font/selima_.otf'); /* IE9 Compat Modes */
}
/* ================================================================ */
h1 {
  /* font-family: "Kaushan Script", cursive !important; */
  font-family: 'selima', Fallback, "Kaushan Script";
  color: white;
  text-align: center;
  font-size: 6vmax;
}
p {
  color: white;
  font-size: 2vmax;
}
button {
  min-width: 120px;
}
#pink-blob {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../../assets/pinkOffset.svg");
}
#showcase {
  padding: 0;
}
</style>
