<script lang="ts">
	import Markdown from '$lib/components/Markdown.svelte';
	import type {PageData} from './$types';

	export let data: PageData;
	const {posts} = data;
</script>

<h1>Blog</h1>

<ul>
	{#each posts as post}
		<li>
			<Markdown
				meta={post.meta}
				path={post.path}
			/>
		</li>
	{/each}
</ul>
