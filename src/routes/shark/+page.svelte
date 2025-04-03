<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import SharkBtn from '$lib/components/shark_btn.svelte';
</script>

<svelte:head>
	<title>lowtide dot dev | sharks</title>
	<meta
		name="description"
		content="Come read about sharks! They are such wonderful and misunderstood creatures."
	/>

	<link rel="canonical" href="https://www.lowtide.dev/shark" />

	<meta property="og:title" content="lowtide dot dev | sharks" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.lowtide.dev/shark" />
	<meta
		property="og:description"
		content="Come read about sharks! They are such wonderful and misunderstood creatures."
	/>
</svelte:head>

<Header></Header>

<main>
	<section>
		<h1>Select a shark to learn more about it!</h1>

		<div class="flex flex-wrap items-center justify-center gap-4 rounded-md bg-slate-900 p-4">
			<SharkBtn
				href="/shark/blacktip_reef"
				src="/shark/pixel/blacktip_reef.png"
				alt="blacktip reef shark">Blacktip reef shark</SharkBtn
			>
			<SharkBtn href="/shark/nurse" src="/shark/pixel/nurse.png" alt="nurse shark"
				>Nurse shark</SharkBtn
			>
		</div>
	</section>
</main>

<Footer></Footer>
