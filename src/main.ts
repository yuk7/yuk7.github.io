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

  // Load particles lazily to keep initial bundle smaller and avoid extra mobile overhead.
  if (!window.matchMedia("(max-width: 767px)").matches) {
    const [{ default: Particles }, { loadSlim }] = await Promise.all([
      import("@tsparticles/vue3"),
      import("@tsparticles/slim"),
    ]);

    app.use(Particles, {
      init: async (engine) => {
        await loadSlim(engine);
      },
    });
  }

  app.mount("#app");
}

void bootstrap();
