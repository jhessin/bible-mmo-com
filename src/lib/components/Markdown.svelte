<script lang="ts">
	import type {FrontMatter} from '$lib/utils';

	export let meta: FrontMatter;
	export let path = '';

	const {title, date, lastmod} = meta;
	const dateOptions: Intl.DateTimeFormatOptions = {
		weekday: 'short',
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	};
</script>

<header>
	{#if path}
		<h2><a href={path}>{title}</a></h2>
	{:else}
		<h1>{title}</h1>
	{/if}
	{#if new Date(lastmod) > new Date(date)}
		<p>
			Updated: {new Date(lastmod).toLocaleDateString(undefined, dateOptions)}
		</p>
	{:else}
		<p>Created: {new Date(date).toLocaleDateString(undefined, dateOptions)}</p>
	{/if}
</header>

<article>
	<slot><!-- optional fallback --></slot>
</article>
