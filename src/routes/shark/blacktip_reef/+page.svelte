<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Hline from '$lib/components/hline.svelte';
</script>

<svelte:head>
	<title>lowtide dot dev | blacktip reef shark</title>
	<meta
		name="description"
		content="The blacktip reef shark is a pretty cool shark that is easily identifiable by the black tips
			of it's fins."
	/>

	<link rel="canonical" href="https://www.lowtide.dev/shark/blacktip_reef" />

	<meta property="og:title" content="lowtide dot dev | blacktip reef shark" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.lowtide.dev/shark/blacktip_reef" />
	<meta
		property="og:description"
		content="The blacktip reef shark is a pretty cool shark that is easily identifiable by the black tips
			of it's fins."
	/>
</svelte:head>

<Header></Header>

<main>
	<section class="mb-4 text-center">
		Shark infested waters? What do you mean? They literally live there!
	</section>

	<Hline></Hline>

	<article class="h-max">
		<h1 class="inline">Blacktip reef shark</h1>
		<span class="subtitle">(Carcharhinus melanopterus)</span>
		<p class="text-blue-500"><b>Fun fact:</b> this shark does not meow.</p>

		<img
			class="m-auto sm:float-right sm:m-2"
			width="320px"
			src="/shark/blacktip_reef.jpg"
			alt="blacktip reef shark"
		/>

		<h2>Overview</h2>
		<p>
			The blacktip reef shark is a pretty cool shark that is easily identifiable by the black tips
			of it's fins. They're TINY compared to other sharks, usually not longer than 1.6 meters. And
			their pups are adorable!
		</p>

		<p>
			Unfortunately the <a class="hyperlink" href="https://www.iucnredlist.org/" target="_blank"
				>IUCN</a
			>
			has marked the blacktip reef shark as
			<span class="text-orange-400">vulnerable and declining</span> due to their low reproductive rate
			and overfishing :(
		</p>

		<img
			class="m-auto sm:float-left sm:m-2"
			width="250px"
			src="/shark/blacktip_reef_pup.jpg"
			alt="blacktip reef shark pups"
		/>

		<h2>Diet</h2>
		<p>
			Their diet consists mainly of small fish 🐟. Rarely they eat things like squid, shrimp and
			smaller sharks. Sometimes they'll snack on a sea snake or two! Company of others isn't a
			problem either, groups of blacktip reef sharks have been seen herding fish towards shore for
			easier feeding.
		</p>

		<h2>Habitat</h2>
		<p>
			They live around coral reefs in the Indo-Pacific and tolerate lower salinity. Unlike other
			reef sharks they like being in shallow waters. So sometimes they go to mangroves when the tide
			rises. During low tide they mostly chill at coral reefs. Occasionally they like an area so
			much that they'll stay there for several years.
		</p>
	</article>
</main>

<Footer></Footer>
