import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";
import fs from "fs";
import { transformSync } from "esbuild";
import tailwindcss from "@tailwindcss/vite";

function rawJsPlugin() {
  return {
    name: "vite-plugin-raw-js",
    enforce: "pre" as const,
    load(id: string) {
      if (id.endsWith("?jsx-raw")) {
        const filePath = id.split("?")[0];
        let fileContent = "";
        try {
          fileContent = fs.readFileSync(filePath, "utf-8");
        } catch {
          return `export default ""`;
        }
        
        const result = transformSync(fileContent, {
          loader: "tsx",
          jsx: "preserve",
          target: "esnext",
          format: "esm",
        });
        
        return `export default ${JSON.stringify(result.code)};`;
      }
      return null;
    },
  };
}

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
    rawJsPlugin(),
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      // publicDir에 없는 asset (전부다 포함시킬것)
      workbox: {
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024,
        // globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
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
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
          ui: ["lucide-react", "react-syntax-highlighter"],
        },
      },
    },
  },
});
