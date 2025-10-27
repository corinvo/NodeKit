import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    vue(),
    dts({
      include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
      outDir: 'dist',
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        react: resolve(__dirname, 'src/react/index.ts'),
        vue: resolve(__dirname, 'src/vue/index.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'vue'],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'styles.css';
          return assetInfo.name!;
        },
      },
    },
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
