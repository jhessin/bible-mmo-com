<script>
	/**
	 * @type {string}
	 */
	export let title;
	/**
	 * @type {Date}
	 */
	export let date;
</script>

<article>
	<h1>{title}</h1>

	<p>Published: {date}</p>

	<slot />
</article>
