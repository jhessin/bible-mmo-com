<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import {invalidate} from '$app/navigation';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/style.scss';
	import {onMount} from 'svelte';
	import type {LayoutData} from './$types';

	export let data: LayoutData;

	$: ({supabase} = data);

	onMount(() => {
		const {data} = supabase.auth.onAuthStateChange(() => {
			invalidate('supabase:auth');
		});

		return () => data.subscription.unsubscribe();
	});
</script>

<Header />

<main>
	<slot><!-- optional fallback --></slot>
</main>

<Footer />
