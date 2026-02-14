import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        components: resolve(__dirname, 'components/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
      },
    },
  },
});
