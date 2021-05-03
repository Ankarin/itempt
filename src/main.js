import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";

import axios from "axios";
Vue.config.productionTip = false;
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    store.dispatch("setPosts", res.data).then(() => {
      new Vue({
        store,
        router,
        vuetify,
        render: (h) => h(App),
      }).$mount("#app");
    });
  })
  .catch((err) => {
    console.log(err);
  });
