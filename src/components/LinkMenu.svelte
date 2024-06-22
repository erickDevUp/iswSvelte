<script>
     import {showMenu} from '../store/showMenu'
  let isShow;
  
  showMenu.subscribe(value => {
    isShow = value;
  });
</script>
<nav class={` link-menu link-menu${isShow?"":"-hidden"}`}>
    <div>
      <a href="inE.html"><span class="ti-home"></span>Principal</a>
      <a href="/estudiante/tarea"><span class="ti-agenda"></span>Tareas</a>
      <a href="/estudiante/recurso-educativo"><span class="ti-desktop"></span>Recursos Educativos</a>
    </div>
  </nav>