import type {PageLoad} from './$types';

export const load: PageLoad = async function ({params}) {
	const post = await import(`../../../articles/${params.slug}.svx`);
	const content = post.default;

	return {
		Content: content,
		meta: post.metadata,
	};
};
