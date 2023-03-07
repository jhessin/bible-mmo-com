import type {PageLoad} from './$types';

export const load: PageLoad = async function ({params}) {
	const post = await import(`../${params.slug}.md`);
	const Content = post.default;

	return {
		Content,
		meta: post.metadata,
	};
};
