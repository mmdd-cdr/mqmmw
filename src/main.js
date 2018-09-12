// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Mock from "mockjs";
import axios from "axios";

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
  let count = 0;
  sessionStorage.tag
    ? JSON.parse(sessionStorage.tag).map(ii => {
        if (ii.name !== relUrl) {
          count++;
        }
      })
    : null;
  if (
    sessionStorage.tag ? count < JSON.parse(sessionStorage.tag).length : false
  ) {
    const tag = JSON.parse(sessionStorage.tag);
    tag.map(ii => {
      if (ii.name === relUrl) {
        document.title = ii.title;
        let link =
          document.querySelector("link[rel*='icon']") ||
          document.createElement("link");
        link.type = ii.link.type;
        link.rel = ii.link.rel;
        link.href = ii.link.href;
        document.getElementsByTagName("head")[0].appendChild(link);
        console.log("一样");
        next();
      }
    });
  } else {
    Mock.mock(/\/test.com/, options => {
      return Mock.mock({
        icon: "http://www.stackoverflow.com/favicon.ico",
        "title|5-10": "@cname"
      });
    });
    axios
      .get("http://test.com/", {
        params: {
          modulesName: relUrl
        }
      })
      .then(function(response) {
        let link =
          document.querySelector("link[rel*='icon']") ||
          document.createElement("link");
        link.type = "image/x-icon";
        link.rel = "shortcut icon";
        link.href = response.data.icon;
        document.getElementsByTagName("head")[0].appendChild(link);
        document.title = to.meta.title ? to.meta.title : response.data.title;
        let tag = sessionStorage.tag ? JSON.parse(sessionStorage.tag) : [];
        let tagItem = {};
        tagItem.link = { type: link.type, rel: link.rel, href: link.href };
        tagItem.title = document.title;
        tagItem.name = relUrl;
        tag.push(tagItem);
        sessionStorage.setItem("tag", JSON.stringify(tag));
      })
      .catch(function(error) {
        console.log(error);
      });
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
