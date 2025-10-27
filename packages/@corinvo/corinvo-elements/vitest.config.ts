import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [react(), vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        '**/*.stories.tsx',
        '**/*.stories.ts',
        '.storybook/',
        'playwright/',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/core': path.resolve(__dirname, './src/core'),
      '@/react': path.resolve(__dirname, './src/react'),
      '@/vue': path.resolve(__dirname, './src/vue'),
    },
  },
});
