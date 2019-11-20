import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { ssl } from './custom-config';

// https://stenciljs.com/docs/config

export const config: Config = {
  autoprefixCss: true,
  /* copy: [
    {
      dest: 'scripts',
      src: '../webpack/'
    }
  ], */
  buildEs5: true,
  devServer: {
    https: {
      cert: ssl.cert,
      key: ssl.key,
    }
  },
  enableCache: false,
  globalStyle: 'src/global/app.scss',
  globalScript: 'src/global/app.ts',
  hashFileNames: true,
  hashedFileNameLength: 8,
  minifyCss: true,
  minifyJs: true,
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
    }
  ],
  plugins: [
    sass({
      includePaths: [ './src/global', './node_modules' ]
    })
  ]
};
