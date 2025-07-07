import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcssPlugin from "@tailwindcss/vite";
import path from "path";
// import rawPlugin from "vite-plugin-raw";

const tailwindcss = tailwindcssPlugin as () => Plugin[];

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@data": path.resolve(__dirname, "src/data"),
      "@types": path.resolve(__dirname, "src/types"),
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    // rawPlugin({
    //   fileRegex: /\.(txt|tsx|md)$/,
    // }),
    VitePWA({
      registerType: "autoUpdate",
      // publicDir에 없는 asset (전부다 포함시킬것)
      // workbox: {
      //   globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      // },
      //오프라인에서도 나오게 precache
      includeAssets: ["react.svg", "vite.svg"],
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
