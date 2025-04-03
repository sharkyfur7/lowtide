<script>
	let { href, alt, src, children } = $props();
</script>

<div class="shark_btn rounded-md transition hover:scale-105 hover:backdrop-brightness-125">
	<a {href} class="border-0 text-center text-white">
		<img {src} style="height: 80px; image-rendering: pixelated;" {alt} />
		<span>{@render children()}</span>
	</a>
</div>
