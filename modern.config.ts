import { appTools, defineConfig } from '@modern-js/app-tools';
import { ssgPlugin } from '@modern-js/plugin-ssg';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  server: {
    ssr: process.env.NODE_ENV === 'development',
  },
  output: {
    ssg: {
      routes: [
        '/',
        {
          url: '/item/:id',
          params: [{ id: '1' }, { id: '2' }, { id: '3' }],
        },
      ],
    },
    distPath: {
      html: './',
    },
  },
  html: {
    outputStructure: 'flat',
  },
  plugins: [
    appTools({
      bundler: 'rspack', // Set to 'webpack' to enable webpack
    }),
    ssgPlugin(),
  ],
});
