<script>
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';

	let { data } = $props();
</script>

<Header></Header>

<main class="flex flex-col items-center">
	<section>
		<h1>Welcome</h1>
		<p>
			This is my webbed site. Sveltekit + tailwind + whatever else is probably overkill for such a
			simple site but oh well, silly me :3
		</p>
		<img src="/buttons/silly.gif" alt="silly" />
	</section>

	<section>
		<h1 class="font-mono">> whoami</h1>
		<p>I'm Sharky, a shark on the internet 🐟</p>
		<p>Some mildly interesting things about me:</p>
		<ul class="list-inside list-disc">
			<li>I like sharks and dragons</li>
			{#if data.lastfm.ok}
				<li>
					{#if data.lastfm.date == 'right now'}
						I'm listening to
					{:else}
						I was listening to
					{/if}
					<a class="border-blue-400 text-blue-400" href={data.lastfm.url}>{data.lastfm.track}</a>
					by <span class="text-amber-400">{data.lastfm.artist}</span>
					{data.lastfm.date}
				</li>
			{/if}
			<li>80s/90s/00s music was the best</li>
			<li>CZECH REPUBLIC 🇨🇿</li>
			<li>I'm 18 (old)</li>
		</ul>

		<p>
			Some links:
			<a href="https://github.com/sharkyfur7">Github</a>
			<a href="mailto:sharkyblacktip@protonmail.com">E-Mail</a>
		</p>
	</section>

	<section class="w-[100%]">
		<h1>Sharks are cool</h1>
		<iframe
			style="margin: 0 auto;"
			width="560"
			height="315"
			src="https://www.youtube.com/embed/CbPrRV8b2CI?si=sAtv6yqWckNoShWL"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
			loading="lazy"
		></iframe>
	</section>

	<section>
		<h1>Buttons!</h1>
		<div class="flex flex-wrap gap-1">
			<img loading="lazy" alt="computer" src="/buttons/computer.gif" />

			<a class="border-0" href="https://swiftyshq.neocities.org/">
				<img loading="lazy" alt="swiftyhq" src="/buttons/swiftyhq.png" />
			</a>

			<a class="border-0" href="https://freeplay.floof.company/">
				<img loading="lazy" alt="freeplay" src="/buttons/freeplay.gif" />
			</a>

			<a class="border-0" href="https://dimden.dev/">
				<img loading="lazy" alt="dimden" src="https://dimden.dev/services/images/88x31.gif" />
			</a>

			<a class="border-0" href="https://synth.download">
				<img
					loading="lazy"
					src="https://synth.download/assets/buttons/synth.download.svg"
					alt="Synth.Download!"
				/>
			</a>
		</div>
	</section>
</main>

<Footer></Footer>
