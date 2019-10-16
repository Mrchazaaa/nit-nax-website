<template>
  <nav>
    <v-card color="primary" flat tile>
      <v-toolbar :height="100" dense color="primary" class="white--text d-flex justify-content-center">

        <v-toolbar-title><h1>NitNax</h1></v-toolbar-title>

        <div class="flex-grow-1"></div>

        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn text>Home</v-btn>

          <v-btn text>Shop</v-btn>

          <v-btn text>Tutorials</v-btn>

          <v-btn text>WorkShops</v-btn>

          <v-btn text>Contact</v-btn>
        </v-toolbar-items>

        <!-- <v-app-bar-nav-icon class="hidden-md-and-up" color="white" @click="drawer = !drawer"></v-app-bar-nav-icon> -->

      </v-toolbar>
    </v-card>
    <!-- <v-navigation-drawer v-model="drawer" app class="indigo">
      <p>test</p>
    </v-navigation-drawer> -->
  </nav>
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
.v-toolbar{
  /* height: 100px !important; */
  padding: 0 60px;
}
</style>
