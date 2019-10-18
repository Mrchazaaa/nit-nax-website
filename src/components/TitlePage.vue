<template>
  <div class="content-section container-fluid" id="home">
    <div class="row" style="height: 100%">
      <div class="col-12 col-md-5" style="padding: 0px;">
        <div id="pink-blob">
          <!-- <h1>Winter Sale</h1> -->
          <h1>Winter<br/>Sale</h1>
          <p>Handcrafted & stylish</p>
          <button type="button" class="btn btn-primary btn-lg">Shop</button>
        </div>
      </div>
      <div id="showcase" class="col-7"></div>
    </div>
  </div>
</template>

<script>
console.log("importing fittext");
import "@/jquery.fittext.js";

export default {
  name: "TitlePage",
  mounted: () => {
    $("#pink-blob").css({ left: -$("#pink-blob").width() }, 350);
    $("#pink-blob").animate({ left: "0px" }, 725);

    // $("#pink-blob h1").fitText(0.6);
    $("#pink-blob h1").fitText();
    // $("#pink-blob p").fitText(0.6);
    $("#pink-blob p").fitText();
  }
};
</script>

<style scoped>
@media only screen and (max-height: 600px) {
  .content-section {
    height: 100vh !important;
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
    background-image: url("../assets/vectorpaint.svg") !important;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain !important;
    margin-top: 32px;
    margin-left: 30px;
    margin-right: 30px;
  }
}
#home {
  background-image: url("../assets/victoria-bilsborough-nLNimOqmbpg-unsplash.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 !important;
  text-align: center;
}
h1 {
  font-family: "Kaushan Script", cursive !important;
  color: white;
  width: 100%;
  height: 20%;
  text-align: center; 
}
p {
  color: white;
  width: 80%;
}
button {
  min-width: 120px;
  width: 40%;
}
#pink-blob {
  /* padding-top: 175px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../assets/vectorpaint2.svg");
  opacity: 0.8;
}
.row {
  margin-left: 0px !important;
  margin-right: 0px !important;
  display: flex;
  justify-content: center;
}
#showcase {
  padding: 0;
}
</style>
