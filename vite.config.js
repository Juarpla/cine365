/* eslint-disable no-undef */
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        account: resolve(__dirname, "src/account/index.html"),
        top: resolve(__dirname, "src/top/index.html"),
        contact: resolve(__dirname, "src/contact/index.html"),
        newsletter: resolve(__dirname, "src/newsletter/success.html"),
      },
    },
  },
});
