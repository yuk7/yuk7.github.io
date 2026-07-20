// Styles
import "@mdi/font/css/materialdesignicons.css";
import { mdi } from "vuetify/iconsets/mdi";
import { aliases } from "vuetify/iconsets/mdi";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          background: "#f3f7ff",
          surface: "#ffffff",
          primary: "#00a3ff",
          secondary: "#30d5c8",
          warning: "#ff7b54",
        },
      },
      dark: {
        dark: true,
        colors: {
          background: "#060b1b",
          surface: "#071026",
          primary: "#00a3ff",
          secondary: "#30d5c8",
          warning: "#ff7b54",
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
