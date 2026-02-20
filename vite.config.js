import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      'dkfds/dist/css/dkfds.css': resolve('node_modules/dkfds/dist/css/dkfds.css'),
    },
  },
});
