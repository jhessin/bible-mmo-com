import {fail, redirect} from '@sveltejs/kit';
import type {Actions, PageServerLoad} from './$types';

export const load = (async ({locals: {supabase, getSession}}) => {
	const session = await getSession();

	if (!session) {
		throw redirect(303, '/');
	}

	const {data: profile} = await supabase
		.from('user_accounts')
		.select(`email, first_name, last_name`)
		.eq('id', session.user.id)
		.single();

	return {session, profile};
}) satisfies PageServerLoad;

export const actions: Actions = {
	update: async ({request, locals: {supabase, getSession}}) => {
		const formData = await request.formData();
		const first_name = formData.get('first_name') as string;
		const last_name = formData.get('last_name') as string;

		const session = await getSession();
		if (!session || !session.user.email) {
			return fail(500, {
				first_name,
				last_name,
			});
		}

		const {error} = await supabase.from('user_accounts').upsert({
			id: session.user.id,
			email: session.user.email,
			first_name,
			last_name,
			updated_at: new Date().toString(),
		});

		if (error) {
			return fail(500, {
				first_name,
				last_name,
			});
		}

		return {
			first_name,
			last_name,
		};
	},
	signout: async ({locals: {supabase, getSession}}) => {
		const session = await getSession();
		if (session) {
			await supabase.auth.signOut();
			throw redirect(303, '/');
		} else {
			throw redirect(303, '/');
		}
	},
};
