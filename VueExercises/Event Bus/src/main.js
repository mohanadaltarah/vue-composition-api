import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mitt from "mitt";

const emitter = mitt();
createApp(App).provide("emitter", emitter).use(router).mount("#app");
