<template>
  <div class="navigation">
    <v-app-bar app>
      <div class="d-flex align-center">
        <v-img
          alt="logo"
          class="shrink mr-2"
          contain
          src="../assets/logo_blue_circle-1.svg"
          transition="scale-transition"
          width="40"
        />

        <h1 class="ml-3">Zadatak</h1>
      </div>
      <v-spacer />
      <v-tabs right class="d-md-block d-none">
        <v-tab to="/">
          Home
        </v-tab>
        <v-tab to="/contact">
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
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
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
    drawer: false,
  }),

};
</script>
