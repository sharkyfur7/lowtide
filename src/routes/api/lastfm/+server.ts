import { json } from '@sveltejs/kit';

import { LASTFM_API_KEY } from '$env/static/private';

const username = 'sharkyblacktip';
const api_url =
	'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' +
	username +
	'&api_key=' +
	LASTFM_API_KEY +
	'&format=json';

function formatAgo(seconds: number) {
	if (seconds < 60) {
		return seconds + ' seconds ago';
	} else if (seconds < 3600) {
		return Math.round(seconds / 60) + ' minutes ago';
	} else if (seconds < 86400) {
		return Math.round(seconds / 60 / 60) + ' hours ago';
	} else {
		return Math.round(seconds / 60 / 60 / 24) + ' days ago';
	}
}

export const GET = async () => {
	const resp = fetch(api_url)
		.then((response) => {
			if (!response.ok) {
				const response = {
					ok: false
				};

				return json(response);
			}
			return response.json();
		})
		.then((data) => {
			const last_track = data['recenttracks']['track'][0];

			const artist_name = last_track['artist']['#text'];
			const track_name = last_track['name'];
			const coverurl = last_track['image'][3]['#text']; // 0 = small, 1 = medium, 2 = large, 3 = extralarge
			let nowplaying;
			let date; // seconds since unix epoch, valid only when !nowplaying

			try {
				nowplaying = last_track['@attr']['nowplaying'];
			} catch (e) {}

			try {
				date = last_track['date']['uts'];
			} catch (e) {}

			if (nowplaying) {
				date = 'right now';
			} else {
				date = formatAgo(Date.now() / 1000 - date);
			}

			const response = {
				ok: true,
				artist: artist_name,
				track: track_name,
				cover_url: coverurl,
				date: date,
				url: last_track['url']
			};

			return json(response);
		})
		.catch((error) => {
			console.error('Error:', error);

			const response = {
				ok: false
			};

			return json(response);
		});

	return resp;
};
