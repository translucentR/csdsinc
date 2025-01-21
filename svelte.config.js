import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			out: 'build',
			envPrefix: ''
		}),
		paths: {
			base: process.env.BASE_PATH || ''
		},
		csrf: {
			checkOrigin: true
		}
	}
};

if (process.env.NODE_ENV === 'production') {
	config.kit.csrf = {
		checkOrigin: false
	};
}

export default config;
