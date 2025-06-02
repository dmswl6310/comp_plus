import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      // publicDir에 없는 asset (전부다 포함시킬것)
      // workbox: {
      //   globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      // },
      //오프라인에서도 나오게 precache
      includeAssets: [
        "react.svg",
        "vite.svg",
      ],
      manifest: {
        name: "my PWA App",
        short_name: "vitePWA",
        description: "First vitePWA",
        theme_color: "#FFDCDC",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
