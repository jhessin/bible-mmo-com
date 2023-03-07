<script lang="ts">
  import Markdown from '$lib/components/Markdown.svelte';
  import type { PageData } from './$types';

	export let data: PageData;
	const {Content, meta } = data;
</script>

<article>
	<Markdown {meta}>
		<Content />
	</Markdown>
</article>
