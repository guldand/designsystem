import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'dist',
      assets: 'dist',
      fallback: null,
      precompress: false,
    }),
    paths: {
      base: process.env.GITHUB_ACTIONS ? '/designsystem' : '',
    },
    prerender: {
      handleHttpError: 'warn',
      handleMissingId: 'warn',
    },
  },
};
