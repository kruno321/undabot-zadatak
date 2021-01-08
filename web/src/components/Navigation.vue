<template>
  <div class="navigation">
    <v-app-bar app>
      <router-link class="d-flex align-center logo" to="/" tag="div">
        <v-img
          alt="logo"
          class="shrink mr-2"
          contain
          src="../assets/logo_blue_circle-1.svg"
          transition="scale-transition"
          width="40"
        />

        <h1 class="ml-3">Zadatak</h1>
      </router-link>
      <v-spacer />
      <v-tabs right class="d-md-block d-none">
        <v-tab to="/" class="home-link">
          Home
        </v-tab>
        <v-tab to="/contact" class="contact-link">
          Contact us
        </v-tab>
      </v-tabs>
      <v-app-bar-nav-icon
        class="d-md-none"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4"
          ><router-link to="/" tag="div">
            <v-list-item>
              <v-list-item-title>Home </v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/contact" tag="div">
            <v-list-item>
              <v-list-item-title>Contact us</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: "Navigation",
  data: () => ({
    drawer: false
  })
};
</script>
<style scoped lang="scss">
.logo {
  cursor: pointer;
}
.router-link-exact-active {
  .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: #6200ea !important;
  }
  .v-list-item{
    color: #6200ea !important;
    caret-color: #6200ea !important;
    &:before{
      opacity: 0.12!important;
    }
  }
}
</style>
