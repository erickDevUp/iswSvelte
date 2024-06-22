<script>
     import {showMenu} from '../store/showMenu'
  let isShow;
  
  showMenu.subscribe(value => {
    isShow = value;
  });
</script>
<nav class={` link-menu link-menu${isShow?"":"-hidden"}`}>
    <div>
      <a href="/estudiante/orientaciones"><span class="ti-agenda"></span>Orientaciones</a>
      <a href="/estudiante/tareas"><span class="ti-book"></span>Tareas</a>
      <a href="/estudiante/recursos-educativos"><span class="ti-desktop"></span>Recursos Educativos</a>
    </div>
  </nav>