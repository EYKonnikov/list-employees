// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          titleprimary: "#2A358C",
          grenprimary: "#00AE5B",
          mainbg: "#ffffff",
          inputbg: "#E0EBEF",
          cancelbtn: "#84909B",
          hinttext: "#B0BCC7",
          cardbg: "#E7F3FF",
        },
      },
    },
  },
});
