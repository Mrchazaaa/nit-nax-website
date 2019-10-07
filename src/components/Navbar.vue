<template>
<nav>
  <v-card
    color="primary"
    flat
    tile
  >
    <v-toolbar dense color="primary" class="white--text">
      

      <v-toolbar-title>NitNax</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon color="white">mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="white">mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="white">mdi-dots-vertical</v-icon>
      </v-btn>

      <v-app-bar-nav-icon color="white" @click="drawer = !drawer"></v-app-bar-nav-icon>

    </v-toolbar>
  </v-card>
  <v-navigation-drawer v-model="drawer" app class="indigo">
    <p>test</p>
  </v-navigation-drawer>
</nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false
    }
  }
};
</script>

<style>
</style>
