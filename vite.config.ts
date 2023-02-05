/// <reference types="vitest" />
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/srt2txt/",
  plugins: [react(), nodePolyfills()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["tests/setupTests.ts"],
  },
});
