<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Navbar</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            Home
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Shop</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Tutorials</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Workshops</a>
        </li>
      </ul>
    </div>
  </nav>
<!-- 
<v-toolbar-title>
          <h1>NitNax</h1>
        </v-toolbar-title>

        <div class="flex-grow-1"></div>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text>Home</v-btn>

          <v-btn text>Shop</v-btn>

          <v-btn text>Tutorials</v-btn>

          <v-btn text>WorkShops</v-btn>

          <v-btn text>Contact</v-btn>
        </v-toolbar-items> -->

</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style>
.v-btn {
  color: white !important;
}
h1 {
  /* margin: 10px 60px !important; */
  font-size: 64px;
}
.v-toolbar {
  /* height: 100px !important; */
  padding: 0 60px;
}
</style>
