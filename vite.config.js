import { defineConfig } from 'vite';
import vituum from 'vituum';

export default defineConfig({
  // base: '/',
  base: '/vite-vituum-v2/',
  plugins: [vituum()],
});
