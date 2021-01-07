<template>
  <v-app>
    <v-app-bar app  >
      <div class="d-flex align-center">
        <v-img
          alt="logo"
          class="shrink mr-2"
          contain
          src="./assets/logo_blue_circle-1.svg"
          transition="scale-transition"
          width="40"
        />

        <h1 class="ml-3">Zadatak</h1>
      </div>

      <Navigation />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: "App",

  components: {
    Navigation
  },

  data: () => ({
    //
  })
};
</script>
