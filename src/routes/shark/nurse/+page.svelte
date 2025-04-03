<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Hline from '$lib/components/hline.svelte';
</script>

<svelte:head>
	<title>lowtide dot dev | nurse shark</title>
	<meta
		name="description"
		content="The nurse shark is a nocturnal bottom dweller living inshore. And is, unfortunately, classified as vulnerable by the IUCN."
	/>

	<link rel="canonical" href="https://www.lowtide.dev/shark/nurse" />

	<meta property="og:title" content="lowtide dot dev | nurse shark" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.lowtide.dev/shark/nurse" />
	<meta
		property="og:description"
		content="The nurse shark is a nocturnal bottom dweller living inshore. And is, unfortunately, classified as vulnerable by the IUCN."
	/>
</svelte:head>

<Header></Header>

<main>
	<section class="mb-4 text-center">
		Shark infested waters? What do you mean? They literally live there!
	</section>

	<Hline></Hline>

	<article class="h-max">
		<h1 class="inline">Nurse shark</h1>
		<span class="subtitle">(Ginglymostoma cirratum)</span>
		<p class="text-blue-500"><b>Fun fact:</b> This shark is adorable!</p>

		<img class="" src="/shark/nurse/sitting.jpg" alt="nurse shark looking at some divers" />

		<section>
			<h2>Overview</h2>
			<p>
				The nurse shark is a pretty calm and friendly species of shark. They are timid bottom
				dwellers and have jaws filled with lots of tiny sharp teeth. They can also pump water over
				their gills eliminating the need to move to be able to breate. Be careful! Attacks by this
				species are usually caused by careless divers not respecting the animal.
			</p>

			<p>
				Unfortunately many shark species are threatened and the nurse shark is no exception... The <a
					class="hyperlink"
					href="https://www.iucnredlist.org/species/144141186/3095153"
					title="IUCN Redlist - Atlantic Nurse Shark"
					target="_blank">IUCN</a
				>
				has classified this species as <span class="text-orange-400">vulnerable</span>.
			</p>
		</section>

		<section class="sm:flex">
			<img
				class="sm:m-2 sm:w-1/2"
				src="/shark/nurse/nurse_group.jpg"
				alt="a group of nurse sharks swimming"
			/>

			<div class="flex-2/3">
				<h2>Diet</h2>
				<p>
					The nurse shark's diet consists primarily of small fish 🐟, crustaceans 🦀 and
					occasionally even algae. They are nocturnal, searching for food on the sea floor during
					night. They have the ability to create suction and suck algae off of corals or sift
					through the sediments on the sea floor.
				</p>
			</div>
		</section>

		<section class="sm:flex">
			<div class="sm:w-2/3">
				<h2>Habitat</h2>
				<p>
					These little guys usually stay inshore. The pups stick to coral reefs or seagrass flats
					whereas the older sharks tend to stay at deeper reefs leaving their shelter to feed in
					shallower areas during night. Interestingly they also have something typical of reef
					sharks: site fidelity, a tendency to stick to a particular area. And it is also one of the
					few sharks that exhibits mating site fidelity, returning to the same area to breed.
				</p>
			</div>

			<img
				class="m-auto sm:float-right sm:m-2 sm:w-1/2"
				src="/shark/nurse/nurse_coral.jpg"
				alt="a nurse shark swimming over a coral reef"
			/>
		</section>
	</article>
</main>

<Footer></Footer>
