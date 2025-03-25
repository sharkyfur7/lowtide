export async function load({ params }) {
	const post = await import(`/src/post/${params.slug}.md`);
	const { title, description, date } = post.metadata;
	const Content = post.default;

	return {
		Content,
		title,
		description,
		date
	};
}
