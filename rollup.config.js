import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

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
  ],
};
