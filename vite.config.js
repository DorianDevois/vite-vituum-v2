import { defineConfig } from 'vite';
import vituum from 'vituum';
import handlebars from '@vituum/vite-plugin-handlebars';
import { handlebarsHelpers } from './src/js/helpers/handlebars/index.js';
import { globalContext } from './src/data/create-context';

export default defineConfig({
  // base: '/',
  base: '/vite-vituum-v2/',
  plugins: [
    vituum(),
    handlebars({
      data: [],
      // 👇 глобальні дані (доступні всюди в HBS)
      globals: {
        ...globalContext,
      },
      partials: {
        directory: 'src/partials',
        extname: false, // {{> head}} замість {{'path/to/head.hbs'}}
      },
      // 👇 ТУТ ДОДАЄМО HELPERS
      helpers: handlebarsHelpers,
    }),
  ],
});
