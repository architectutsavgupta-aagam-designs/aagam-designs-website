import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";



export default defineConfig({
  plugins: [
    react(),


    tailwindcss(),


    
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