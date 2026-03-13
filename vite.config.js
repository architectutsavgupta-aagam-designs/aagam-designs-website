import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    imagetools({
      defaultDirectives: new URLSearchParams([
        // When NO query params are given, serve the image as-is
      ]),
    }),
  ],
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
  assetsInclude: [
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.png",
    "**/*.webp",
    "**/*.avif",
  ],
});