// src/hooks.server.ts
import {getSession, supabase} from '$lib/server/utils';
import type {Handle} from '@sveltejs/kit';

export const handle: Handle = async ({event, resolve}) => {
	event.locals.supabase = supabase;
	/**
	 * A convenience helper so we can just call await getSession() instead const { data: { session } } = await supabase.auth.getSession()
	 */
	event.locals.getSession = getSession;

	return resolve(event, {
		/**
		 * There´s an issue with `filterSerializedResponseHeaders` not working when using `sequence`
		 *
		 * https://github.com/sveltejs/kit/issues/8061
		 */
		filterSerializedResponseHeaders(name) {
			return name === 'content-range';
		},
	});
};
