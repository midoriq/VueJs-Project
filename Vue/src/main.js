// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import vueResource from "vue-resource";
import Current from "./components/Current";
import Last7 from "./components/Last7";

Vue.use(vueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Current },
    { path: "/Last7", component: Last7 }
  ]
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  template: `
  <div id = 'app'>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Weather App</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarsExample02">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <router-link to = "/" class = "nav-link">Current <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
      <router-link to = "/Last7" class = "nav-link">Last week</router-link>
      </li>
    </ul>
  </div>
</nav>
  <router-view></router-view>
  </div>
  `
}).$mount("#app");
