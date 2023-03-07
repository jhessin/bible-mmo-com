import adapter from '@sveltejs/adapter-auto';
import {mdsvex} from 'mdsvex';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess(),
		mdsvex({
			// extensions: ['.md'],
			// layout: {
			// 	blog: '/src/routes/blog/post.svelte',
			// },
		}),
	],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			'articles/*': 'src/articles/*',
		},
	},
};

export default config;
