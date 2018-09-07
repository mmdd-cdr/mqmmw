// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

/* eslint-disable no-new */

router.beforeEach((to, from, next) => {
  let url = document.location.toString();
  let arrUrl = url.split("/#");
  let start = arrUrl[1].indexOf("/");
  let end =
    arrUrl[1].indexOf("/", start + 1) === -1
      ? arrUrl[1].length
      : arrUrl[1].indexOf("/", start + 1);
  let relUrl = arrUrl[1].substring(start, end);
  if (relUrl.indexOf("?") != -1) {
    relUrl = relUrl.split("?")[0];
  }
  console.log(relUrl, JSON.parse(sessionStorage.tag).name);
  if (
    sessionStorage.tag ? relUrl === JSON.parse(sessionStorage.tag).name : false
  ) {
    const tag = JSON.parse(sessionStorage.tag);
    console.log(tag);
    document.title = tag.title;
    let link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = tag.link.type;
    link.rel = tag.link.rel;
    link.href = tag.link.href;
    let a = document.getElementsByTagName("head")[0].appendChild(link);
    console.log("一样");
    next();
  } else {
    if (to.meta.title) {
      document.title = to.meta.title;
    }
    let link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = "http://www.stackoverflow.com/favicon.ico";
    document.getElementsByTagName("head")[0].appendChild(link);
    let tag = {};
    tag.link = { type: link.type, rel: link.rel, href: link.href };
    tag.title = to.meta.title;
    tag.name = relUrl;
    sessionStorage.setItem("tag", JSON.stringify(tag));
    console.log("不一样");
    next();
  }
});

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
