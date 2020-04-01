import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
// Convert CJS modules to ES6, so they can be included in a bundle
import commonjs from 'rollup-plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const config = {
    input: 'src/loaders.js',
    output: {
        name: 'loader-bounce',
        file: 'dist/bundle.js',
        sourcemap: true,
        format: 'umd',
        globals: { react: 'React' },
    },
    external: [
        'react',
        'react-dom'
    ],
    plugins: [
        peerDepsExternal(),
        postcss({
            extract: false,
            modules: true,
            use: ['sass'],
        }),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/env', '@babel/preset-react']
        }),
        resolve(),
        commonjs(),
    ],
}

export default config
