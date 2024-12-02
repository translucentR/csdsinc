import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: '404.html',
			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.env.BASE_PATH || ''
		},
		prerender: {
			handleHttpError: ({ path, message }) => {
				if (!path.includes('.') || path.includes('.avif') || path.includes('.jpg') || path.includes('.png') || path.includes('.jpeg') || path.includes('.gif')) {
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
