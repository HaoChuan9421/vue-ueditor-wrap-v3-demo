import { createApp } from "vue";
import VueUeditorWrap from "vue-ueditor-wrap";
import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(VueUeditorWrap)
  .use(router)
  .mount("#app");
