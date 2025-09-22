// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Dev server configuration
  server: {
    host: "::",   // Accessible on local network (IPv6)
    port: 8080,   // Server port
  },

  // Plugins
  plugins: [
    react(),  // React plugin with SWC compiler
  ],

  // Path alias configuration
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // '@' maps to ./src
    },
  },

  // Optional: build configuration
  build: {
    outDir: "dist",
    sourcemap: mode === "development", // Generate sourcemaps only in dev
  },
}));
