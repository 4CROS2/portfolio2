<script>
	export let text = '';
	import { onMount } from 'svelte';
	import { focus, unfocus} from '../../../../lib/scripts/rotateAnimation'

	let element
	


</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div bind:this={element} on:mousemove={(evt)=>focus(evt,element)} on:mouseleave={unfocus(element)}>
	<p>{text}</p>
</div>

<style>
	div {
		background: #f5d4d479;
		transition: 0.1s ease-in-out;
		padding: 15px;
		border-radius: 11px;
		text-transform: capitalize;
		margin-right: 10px;
		font-family: 'Red Hat Text', sans-serif;
		user-select: none;
		display: grid;
		place-content: center;
	}
	div:hover {
		background: #a4c5e7;
		color: #fff;
		scale: 1.05;
		-webkit-box-shadow: 5px 3px 55px 10px rgba(0, 0, 0, 0.12);
		-moz-box-shadow: 5px 3px 55px 10px rgba(0, 0, 0, 0.12);
		box-shadow: 5px 3px 55px 10px rgba(0, 0, 0, 0.12);
	}
	p{
		font-size: 14px;
	}
	div:active {
		scale: 1;
	}
</style>
