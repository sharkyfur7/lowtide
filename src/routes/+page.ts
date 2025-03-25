import type { PageLoad } from './blog/$types';

export const load: PageLoad = async ({ fetch }) => {
	const response = await fetch(`/api/lastfm`);
	const lastfm = await response.json();

	return {
		lastfm
	};
};
