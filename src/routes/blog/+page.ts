import type {FrontMatter} from '$lib/utils';
import type {PageLoad} from './$types';

export const load: PageLoad = async ({fetch}) => {
	const posts = (await fetch('/api/posts').then((res) => res.json())) as {
		path: string;
		meta: FrontMatter;
	}[];

	return {
		posts,
	};
};
