<template>
  <div class="content-section container-fluid" id="home">
    <div id="pink-spiral">
      <div class="row" style="height: 20%"></div>
      <div class="row">
        <div class="col-4">
          <h1>Winter<br />Sale</h1>
        </div>
        <!-- <div class="col-2">One of three columns</div> -->
      </div>
      <div class="row">
        <div class="col-4">
          <p>Handcrafted & stylish</p>
        </div>
        <!-- <div class="col-2">One of three columns</div> -->
      </div>
      <div class="row">
        <div class="col-4">
          <button type="button" class="btn btn-outline-primary">Shop</button>
        </div>
        <!-- <div class="col-2">One of three columns</div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TitlePage"
};
</script>

<style scoped>
.content-section {
  height: 100vh;
}
#home {
  background-image: url("../assets/kelly-sikkema-8A7qKkvm_ew-unsplash.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h1 {
font-family: "Kaushan Script", cursive !important;
  font-size: 64px;
  color: #5a5a5a;
}
#home button {
  color: #5a5a5a !important;
}
#pink-spiral {
  text-align: center !important;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("../assets/pink.svg");
  opacity: 0.8;
}
.row {
    display: flex;
    justify-content: center;
}
</style>
