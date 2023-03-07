<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import MainArticle, {metadata} from 'articles/why.svx';
</script>

<svelte:head>
	<title>BibleMMO: Home</title>
</svelte:head>

<Markdown meta={metadata}>
	<MainArticle />
</Markdown>
