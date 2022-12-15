import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";

import "./assets/index.css";

const app = createApp(App).use(store);

app.use(router);

app.mount("#app");
