import { defineConfig } from 'rslib';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      output: {
        syntax: ['node 16'],
      },
      dts: {
        bundle: false,
        distPath: './dist-types',
      },
    },
  ],
  source: {
    define: {
      RSLIB_VERSION: JSON.stringify(require('./package.json').version),
    },
    // TODO: We can remove this after https://github.com/web-infra-dev/rsbuild/pull/3225 being released
    entry: {
      index: './src/index.ts',
    },
  },
  output: {
    target: 'node',
    externals: {
      picocolors: '../compiled/picocolors/index.js',
      'fast-glob': '../compiled/fast-glob/index.js',
      commander: '../compiled/commander/index.js',
    },
  },
});
