import type {PageLoad} from './$types';

export const load: PageLoad = async function ({params}) {
	const post = await import(`../../../blog/${params.slug}.svx`);
	const Content = post.default;

	return {
		Content,
		meta: post.metadata,
	};
};
