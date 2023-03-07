<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/style.scss';
</script>

<Header />

<main>
	<slot><!-- optional fallback --></slot>
</main>

<Footer />
