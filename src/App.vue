<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="head-menu">
        <router-link class="head-link" to="/">Home</router-link>
        <router-link class="head-link" to="/new-post">New Post</router-link>
      </div>
    </v-app-bar>

    <v-main>
      <div class="container">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",

  data: () => ({
    //
  }),
  mounted() {
  },
  methods: {
    ...mapActions(["setPosts"]),
  },
};
</script>

<style lang="scss">
.container {
  max-width: 1100px;
  margin: auto;
  padding: 40px 10px;
}
.head-menu {
  width: 100%;
  max-width: 1400px;
  margin: auto;
  display: flex;
  justify-content: space-around;
}
.head-link {
  color: white !important;
  font-size: 20px;
}
</style>
