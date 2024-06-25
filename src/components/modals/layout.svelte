<script>
    export let isShow;
</script>

<svelte:head>
    <link rel="stylesheet" href="/styles/vm.css" />
</svelte:head>
<div class={`${isShow?"mymodal":"hidden"}`}>
    <slot/>
</div>
