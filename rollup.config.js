import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import vue from 'rollup-plugin-vue'
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer'

export default {
  input: './src/index.js',
  output: [
    {
      file: './dist/lib-es.js',
      format: 'es',
    },
  ],
  plugins: [
    commonjs(),
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.VUE_ENV': JSON.stringify('browser'),
    }),
    vue(),
    postcss({
      plugins: [
        // 前缀
        autoprefixer(),
      ],
      extract: "assets/css/index.css",
    }),
    copy({
      targets: [
        {
          src: './src/package/theme-chalk/fonts/**',
          dest: 'dist/assets/fonts',
        },
      ],
    }),
  ],
};
