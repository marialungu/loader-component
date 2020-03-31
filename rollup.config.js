import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
// Convert CJS modules to ES6, so they can be included in a bundle
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import postcssModules from 'postcss-modules';

const cssExportMap = {};

const config = {
    input: 'src/loaders.js',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    external: [
        'react',
        'react-proptypes'
    ],
    plugins: [
        resolve(),
        postcss({
            plugins: [
                postcssModules({
                    getJSON (id, exportTokens) {
                        cssExportMap[id] = exportTokens;
                    }
                })
            ],
            getExportNamed: false,
            getExport (id) {
                return cssExportMap[id];
            },
            extract: 'dist/styles.css',
        }),
        babel({
            exclude: 'node_modules/**',
            presets: ['@babel/env', '@babel/preset-react']
        }),
        commonjs()
    ],
}

export default config
