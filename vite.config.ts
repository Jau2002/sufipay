import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
		open: true,
		port: 3000,
	},
	css: {
		modules: {
			localsConvention: 'dashesOnly',
			generateScopedName: '[name]__[local]___[hash:base64:5]',
			globalModulePaths: [/index.css/],
		},
	},
});
