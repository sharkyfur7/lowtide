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
		<h1>Other cool stuff</h1>
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

			<a class="border-0" href="https://breq.dev/">
				<img loading="lazy" alt="dimden" src="/buttons/breq.png" />
			</a>

			<a class="border-0" href="https://eightyeightthirty.one/">
				<img loading="lazy" alt="dimden" src="/buttons/eightyeightythirtyone.png" />
			</a>
		</div>

		<div class="flex gap-1">
			<img src="/buttons/silly.gif" alt="silly" />
			<img src="/buttons/monster.gif" alt="monster" />
		</div>
	</section>

	<section class="flex justify-center">
		<map name="noaitxtwidget">
			<area
				href="https://baccyflap.com/noai"
				target="_blank"
				shape="rect"
				coords="28,0,219,30"
				alt="no ai webring"
				title="no ai webring"
			/>
			<area
				href="https://baccyflap.com/noai/?prv&s=shr"
				target="_top"
				shape="rect"
				coords="0,0,27,30"
				alt="previous"
				title="previous"
			/>
			<area
				href="https://baccyflap.com/noai/?rnd"
				target="_top"
				shape="rect"
				coords="221,6,235,25"
				alt="random"
				title="random"
			/>
			<area
				href="https://baccyflap.com/noai/?nxt&s=shr"
				target="_top"
				shape="rect"
				coords="239,0,263,30"
				alt="next"
				title="next"
			/>
		</map>
		<img
			usemap="#noaitxtwidget"
			src="https://baccyflap.com/noai/txtwidget-light.gif"
			alt="a white rectangular box with a dashed outline with the words 'the no ai webring' in the centre, with a parenthetical question mark next to it and two arrows pointing left and right to either side"
		/>
	</section>
</main>

<Footer></Footer>
