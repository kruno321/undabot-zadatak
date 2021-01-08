<template>
  <v-app>
    <Navigation />

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

};
</script>

<style lang="scss">
.v-main {
  padding: 30px !important;
  @media only screen and (max-width: 1024px) {
    padding: 30px 15px !important;
  }
}
.v-main__wrap {
  padding-top: 60px;
}
</style>