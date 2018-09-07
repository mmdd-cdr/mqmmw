import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Router Modules */
import componentsRouter from "./modules/oldDriver";

export default new Router({
  routes: [componentsRouter]
});
