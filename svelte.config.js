import adapter from '@sveltejs/adapter-auto';
import {mdsvex} from 'mdsvex';
import slug from 'rehype-slug';
import toc from 'remark-toc';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		sveltePreprocess(),
		mdsvex({
			remarkPlugins: [toc],
			rehypePlugins: [slug],
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
			'blog/*': 'src/blog/*',
		},
	},
};

export default config;
