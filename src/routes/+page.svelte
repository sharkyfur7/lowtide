<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Hline from '$lib/components/hline.svelte';
	import { onMount } from 'svelte';

	let { data } = $props();
	let msg = $state('');

	let btn: any;
	let inpt: any;

	onMount(() => {
		btn = document.getElementById('send_notify_btn');
		inpt = document.getElementById('send_notify_inpt');
	});

	$effect(() => {
		if (msg.length > 0) {
			btn.style.visibility = 'visible';
		} else {
			btn.style.visibility = 'hidden';
		}
	});

	async function sendNotif() {
		const response = await fetch('/api/msg', {
			method: 'POST',
			body: JSON.stringify({ msg }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		inpt.value = '';
		msg = '';
	}
</script>

<Header></Header>

<main class="flex flex-col items-center">
	<span class="text-center">
		Sharks are really cool creatures. If you'd like to read a bit about them, go to the <a
			href="/shark">sharks page</a
		>.
	</span>

	<Hline></Hline>

	<section>
		<img
			src="/shark/shar.jpg"
			loading="lazy"
			alt="happy shark"
			class="m-auto max-w-[220px] sm:float-right sm:m-1"
		/>

		<h2>whoami</h2>
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
					<a class="hyperlink" href={data.lastfm.url}>{data.lastfm.track}</a>
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
			<a class="hyperlink" href="https://github.com/sharkyfur7">Github</a>
			<a class="hyperlink" href="mailto:sharkyblacktip@protonmail.com">E-Mail</a>
		</p>
	</section>

	<section>
		<span>Your chance to be funny, send me a message:</span>

		<input
			bind:value={msg}
			id="send_notify_inpt"
			class="w-[200px] rounded-sm p-1 outline-1 outline-gray-700 backdrop-brightness-90 focus:outline-blue-500"
			placeholder="funny message"
		/>
		<button
			onclick={sendNotif}
			id="send_notify_btn"
			class="invisible rounded-sm p-1 outline-1 outline-blue-500 backdrop-brightness-110 active:backdrop-brightness-90"
			>send</button
		>
	</section>

	<Hline></Hline>

	<section class="w-[100%]">
		<h2>Sharks are cool</h2>
		<iframe
			style="margin: 0 auto;"
			class="h-[250px] w-full max-w-[560px] sm:h-[315px]"
			src="https://www.youtube.com/embed/CbPrRV8b2CI?si=sAtv6yqWckNoShWL"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
			loading="lazy"
		></iframe>
	</section>

	<Hline></Hline>

	<section class="">
		<div class="mb-2 flex justify-center">
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
		</div>

		<div class="flex flex-wrap justify-center gap-1">
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

			<a class="border-0" href="https://votehusky.org">
				<img
					loading="lazy"
					alt="vote the husky party"
					src="https://votehusky.org/buttons/button2.png"
				/>
			</a>
		</div>

		<div class="mt-2 flex justify-center gap-1">
			<img src="/buttons/silly.gif" alt="silly" />
			<img src="/buttons/monster.gif" alt="monster" />
		</div>
	</section>
</main>

<Footer></Footer>
