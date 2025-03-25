<script>
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';

	export let data;
	const { title, description, Content, date } = data;
	const created_date = new Date(date);
	const modified_date = new Date(document.lastModified);
</script>

<Header></Header>

<main>
	<article>
		<h1 class="mb-2">
			{title} <span class="text-sm opacity-50">{date}</span>
		</h1>

		<Content></Content>
	</article>
</main>

<Footer></Footer>
