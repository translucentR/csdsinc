import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		cors: {
			origin: ['http://localhost:5173'],
		},
		host: 'localhost'
	},
	envPrefix: ['VITE_', 'ORIGIN']
});
