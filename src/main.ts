import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import Notifications from "@kyvg/vue3-notification";

import "./assets/index.css";

const app = createApp(App).use(store).use(Notifications);

app.use(router);

app.mount("#app");
