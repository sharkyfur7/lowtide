export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/post/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postSlug = path.slice(10, -3);

			return {
				meta: metadata,
				path: '/posts/' + postSlug
			};
		})
	);

	return allPosts;
};
