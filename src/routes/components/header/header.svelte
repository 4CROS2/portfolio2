<script>
	import Options from "./components/options.svelte";

    
</script>

<header>
    <Options text='contact'/>   
    <Options text='about me'/>   
    <Options text='skills'/>   
</header>

<style>
    header{
        display: flex;
        flex-direction: row;
        justify-content: right;
        position: sticky;
        height: 4vh;
        padding: 10px;
    }
</style>