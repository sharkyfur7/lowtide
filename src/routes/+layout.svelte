<script lang="ts">
	import '$lib/css/app.css';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	let { children } = $props();
</script>

{@render children()}
