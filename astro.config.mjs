import { defineConfig } from "astro/config";

export default defineConfig({
  server: {
    host: true,
    port: 4321,
  },
  vite: {
    server: {
      // Permite abrir la app desde la URL pública de ngrok
      allowedHosts: [".ngrok-free.app", ".ngrok-free.dev", ".ngrok.io", ".ngrok.app"],
    },
  },
});
