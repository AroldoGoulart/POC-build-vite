import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]',
        chunkFileNames: 'chunks/[name].js',
        entryFileNames: 'entry/[name].js',
      },
    },
  },
})

/*
Exemplo sem o HASH: (perde cache-busting)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



*/
