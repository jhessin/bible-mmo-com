import {
	PUBLIC_SUPABASE_ANON_KEY,
	PUBLIC_SUPABASE_URL,
} from '$env/static/public';
import {createClient, type Session} from '@supabase/supabase-js';
import type {Database} from '../../../types/supabase';

export const supabase = createClient<Database>(
	PUBLIC_SUPABASE_URL,
	PUBLIC_SUPABASE_ANON_KEY,
);

export async function getSession(): Promise<Session | null> {
	const {
		data: {session},
	} = await supabase.auth.getSession();
	return session;
}

export const signUp = supabase.auth.signUp;

export const magicLink = supabase.auth.signInWithOtp;
