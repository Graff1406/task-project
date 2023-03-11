import { createApp } from "vue";
import App from "@/app/App.vue";
import router from "@/app/router";
import vuetify from "@/app/vuetify";
import VueTheMask from "vue-the-mask";
const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(VueTheMask);

app.mount("#app");
