import { json } from '@sveltejs/kit';

import { NTFY_KEY } from '$env/static/private';

export async function POST({ request }) {
	const { msg } = await request.json();

	fetch('https://ntfy.sh/' + NTFY_KEY, {
		method: 'POST', // PUT works too
		body: msg
	});

	return json({}, { status: 200 });
}
