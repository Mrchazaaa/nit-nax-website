<template>
  <div id="home" class="container">
    <div class="row align-items-center">
      <!-- align-items-center -->
      <div class="col-md-5 col-12 d-flex flex-column" id="pink-blob">
        <h1>
          Winter
          <br />Sale
          <hr />
        </h1>
        <!-- <p>Handcrafted & stylish</p> -->
        <a href="https://www.etsy.com/shop/NitNaxShop">
          <button type="button" class="btn btn-primary btn-lg">
            <span>Shop</span>
          </button>
        </a>
      </div>
      <div id="showcase" class="col-md-7">
        <img src="@/assets/pot.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleSection",
  mounted: () => {
    window.$("#pink-blob").css({ left: -window.$("#pink-blob").width() }, 350);
    window.$("#pink-blob").animate({ left: "0px" }, 725);
    window.jarallax(document.getElementById("home"), {
      speed: 0.5
    });
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "selima";
  src: url("../../assets/selima-font/selima_.otf"); /* IE9 Compat Modes */
}

#home {
  background-image: url("../../assets/victoria-bilsborough-nLNimOqmbpg-unsplash.jpg");
  height: 50vh;
  margin: 0px;
  padding: 0px;
  width: 100% !important;
  max-width: none;

  .row {
    height: 100%;
    width: 100%;
    margin: 0px;
  }

  #pink-blob {
    height: 100%;
    background-image: url("../../assets/pink.svg");
    // background-color: green;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;

    align-items: center;
    justify-content: center;
  }
  #showcase {
    display: inline-block;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    height: 100%;

    img {
      height: 75%;
    }
  }
  h1 {
    font-family: "selima", Fallback, "Kaushan Script" !important;
    text-align: center;
    color: white;
  }
  hr {
    width: 70%;
    border-width: 3px;
    border-color: white;
  }

  button {
    transition: all 0.5s;
    cursor: pointer;
    // height: 200%;
    min-width: 200px !important;
  }

  button span {
    position: relative;
    transition: 0.5s;
  }

  button span:after {
    content: "\00bb";
    position: absolute;
    opacity: 0;
    right: -20px;
    transition: 0.5s;
  }

  button:hover span {
    padding-right: 25px;
  }

  button:hover span:after {
    opacity: 1;
    right: 0;
  }

  
}

// Small devices (landscape phones, 576px and up)
@media only screen and (min-width: 576px) {
}
// Medium devices (tablets, 768px and up)
@media only screen and (min-width: 768px) {
  #home {
    height: 50vh !important;
  }
  #showcase {
    // display: inline-block !important;
    // background-color: red;
    // display: flex;
    // justify-content: center;
  }
  #pink-blob {
    background-image: url("../../assets/pinkOffset.svg") !important;
    background-position: right;
    background-repeat: no-repeat;
    background-size: cover !important;
    padding: 0px;
  }
}
// Large devices (desktops, 992px and up)
@media screen and (min-width: 992px) {
}
// Extra large devices (large desktops, 1200px and up)
@media screen and (min-width: 1200px) {
}
</style>
