import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';

export default defineConfig({
	plugins: [sveltekit()],
	css: {
		postcss: {
			plugins: [tailwindcss],
		},
		modules: {
			generateScopedName: '[hash:base64:8]'
		}
	},
	build: {
		cssCodeSplit: true,
		cssMinify: true
	}
});
