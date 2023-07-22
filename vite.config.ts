import { defineConfig } from "vite";
import { resolve } from "path";
import viteImagemin from 'vite-plugin-imagemin'

import pages from './pages.config'

const __dirname = resolve()

const pageInputs = {}

pages.forEach(page => pageInputs[page.name] = page.path )

export default defineConfig({
    root: './src',
    build: {
        target: 'es2017',
        outDir: '../build',
        assetsDir: 'assets',
        sourcemap: true,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                ...pageInputs
            },
            output: {
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                
                assetFileNames: ({name}) => {
                if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
                    return 'assets/images/[name]-[hash][extname]';
                }
                if (/\.(woff|woff2|eot)$/.test(name ?? '')){
                    return 'assets/fonts/[name]-[extname]';
                }
                if (/\.css$/.test(name ?? '')) {
                    return 'assets/css/[name]-[hash][extname]';
                }
                // default value
                // ref: https://rollupjs.org/guide/en/#outputassetfilenames
                return 'assets/[name]-[hash][extname]';
                },
            },
        }
    },
    server: {
        port: 3000,
        host: '0.0.0.0',
        hmr: true,
    },
    plugins: [
      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false,
        },
        optipng: {
          optimizationLevel: 7,
        },
        mozjpeg: {
          quality: 20,
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4,
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox',
            },
            {
              name: 'removeEmptyAttrs',
              active: false,
            },
          ],
        },
      }),
    ],
})