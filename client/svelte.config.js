import preprocess from 'svelte-preprocess'
import vercel from '@sveltejs/adapter-vercel'
import inject from '@rollup/plugin-inject'
import nodePolyfills from 'rollup-plugin-polyfill-node'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

import { resolve } from 'path'

/** @type {import('@sveltejs/kit').Config} */
export default {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		// this thing is buggy as shit https://github.com/sveltejs/svelte-preprocess/issues/470
		postcss: {
			plugins: []
		}
	}),

	kit: {
		adapter: vercel(),
		vite: {
			resolve: {
				alias: {
					$config: resolve('src/config'),
					$env: resolve('src/env'),
					$api: resolve('src/lib/api'),
					$components: resolve('src/lib/components'),
					$icons: resolve('src/lib/icons'),
					$utils: resolve('src/lib/utils'),
					$stores: resolve('src/lib/stores')
				}
			},
			exclude: [
				'@apollo/client/core',
				'@apollo/client',
				'@twilio/conversations',
				'web3',
				'0xproject',
				'opensea-js',
				'wyvern-schemas'
			],
			build: {
				rollupOptions: {
					plugins: [
						inject({
							Buffer: ['buffer', 'Buffer'],
							process: ['process', 'process']
						}),
						nodePolyfills({
							include: ['../node_modules/**/*.js', 'node_modules/**/*.js']
						}),
						nodeResolve({
							preferBuiltins: false,
							moduleDirectories: ['../node_modules', 'node_modules']
						}),
						commonjs({
							// Exclusive Strategy (difficult)
							// include: ['../node_modules/**', 'node_modules/**'],
							// exclude: ['../node_modules/hash.js/**', '../node_modules/color-convert/**'],
							// Inclusive Strategy
							include: ['../node_modules/@walletconnect/web3-provider/**'],
							transformMixedEsModules: true
						})
					]
				}
			}
		}
	}
}
