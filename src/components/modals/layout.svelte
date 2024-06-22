<script>
    export let isShow;
</script>

<div class={`${isShow?"mymodal":"hidden"}`}>
    <slot/>
</div>