<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';

	export let data;
</script>

<Header></Header>

<main>
	<section>
		<ul>
			{#each data.posts as post}
				<li class="mb-4">
					<h2>
						<a href={post.path}>
							{post.meta.title}
						</a>
						<span class="text-xs opacity-50">{post.meta.date}</span>
					</h2>
				</li>
			{/each}
		</ul>
	</section>
</main>

<Footer></Footer>
