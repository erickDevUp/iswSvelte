<script>
  import Layout from './layout.svelte';
 
  import { createEventDispatcher } from 'svelte';
  export let mensaje;
  export let isShow;
  
  const dispatch = createEventDispatcher();

  function handleClickCheck() {
    dispatch('check', { mensaje, isShow });
  }

  function handleClickClose() {
    dispatch('close', { mensaje, isShow });
  }

</script>

<Layout isShow={isShow}>
  <div class={"alert"}>
    <div class="alert__e">
      <span class="ti-alert"></span>
      <p>{mensaje}</p>
    </div>
    <div class="alert__b">
      <button class="ti-check" on:click={handleClickCheck}></button>
      <button class="ti-close" on:click={handleClickClose}></button>
    </div>
  </div>
</Layout>