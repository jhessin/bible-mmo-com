export interface FrontMatter {
	title: string;
	date: string;
	categories: string[];
	slug: string;
	draft: boolean;
	lastmod: string;
}
export const fetchPosts = async () => {
	const allPostFiles = import.meta.glob('/src/blog/*.svx');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const {metadata} = (await resolver()) as {
				metadata: FrontMatter;
			};
			const postPath = path.slice(5, -4);

			return {
				meta: metadata,
				path: postPath,
			};
		}),
	);

	return allPosts.filter((post) => !post.meta.draft);
};

export const fetchArticles = async () => {
	const allPostFiles = import.meta.glob('/src/articles/*.svx');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const {metadata} = (await resolver()) as {
				metadata: FrontMatter;
			};
			const postPath = path.slice(5, -4);

			return {
				meta: metadata,
				path: postPath,
			};
		}),
	);

	return allPosts.filter((post) => !post.meta.draft);
};
