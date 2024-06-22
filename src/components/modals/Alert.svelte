<script>
  export let mensaje;
  export let isShow;
  import '../../styles/vm.css';
  import Layout from './layout.svelte';

</script>

<Layout isShow={isShow}>
  <div class={"alert"}>
    <div class="alert__e">
      <span class="ti-alert"></span>
      <p>{mensaje}</p>
    </div>
    <div class="alert__b">
      <button class="ti-check"></button>
      <button class="ti-close" on:click></button>
    </div>
  </div>
</Layout>