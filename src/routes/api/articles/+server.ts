import {fetchArticles} from '$lib/utils';
import {json} from '@sveltejs/kit';

export const GET = async () => {
	const allPosts = await fetchArticles();

	const sortedPosts = allPosts.sort((a, b) => {
		return new Date(b.meta.date).valueOf() - new Date(a.meta.date).valueOf();
	});

	return json(sortedPosts);
};
