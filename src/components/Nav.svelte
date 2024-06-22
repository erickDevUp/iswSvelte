<script>
  import {showMenu} from '../store/showMenu'
  let isShow;
  
  showMenu.subscribe(value => {
    isShow = value;
  });
</script>

<header>
    <div>
      <div>
        <img src="/img/logo__color_principal-hd.png" alt="" />
      </div>
      <h1 class="nav-name">Ingienería de Software</h1>
      <span class={`${isShow?"ti-close":"ti-menu-alt"}`} on:click={showMenu.update(value=>!isShow)}></span>
      
    </div>
  </header>