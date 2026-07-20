import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { createGtag } from "vue-gtag";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

const pinia = createPinia();

async function bootstrap() {
  const app = createApp(App)
    .use(pinia)
    .use(router)
    .use(createGtag({ tagId: "G-HC4SYJNWCV" }))
    .use(vuetify);

  app.mount("#app");
}

void bootstrap();
