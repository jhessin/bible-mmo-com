<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import {ThemeSupa} from '@supabase/auth-ui-shared';
	import {Auth} from '@supabase/auth-ui-svelte';
	import MainArticle, {metadata} from 'articles/why.svx';
	import type {PageData} from './$types';

	export let data: PageData;
	let login = false;
</script>

<svelte:head>
	<title>BibleMMO: Home</title>
</svelte:head>

{#if !data.session}
	{#if login}
		<button on:click={() => (login = false)}>Hide Login</button>
		<Auth
			supabaseClient={data.supabase}
			view="magic_link"
			redirectTo={`${data.url}/logging-in?redirect=/`}
			showLinks={false}
			appearance={{
				theme: ThemeSupa,
				style: {
					input: 'color: #fff',
				},
			}}
		/>
	{:else}
		<button on:click={() => (login = true)}>Login</button>
	{/if}
{/if}

<Markdown meta={metadata}>
	<MainArticle />
</Markdown>
