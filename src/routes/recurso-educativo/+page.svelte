<script>
	import '../../styles/in.css';
	import '../../styles/inE.css';
  
	import '../../styles/themify-icons.css';
	import '../../styles/fonts.css';
  import RecursoEducativo from "../../components/RecursoEducativo.svelte"
	import LinkMenu from '../../components/LinkMenu.svelte';
  import Nav from '../../components/Nav.svelte'
</script>
<body>
  <Nav></Nav>

  <main>
    <LinkMenu/>
    <section>
      <div>
        <div class="section__header">
          <h1>Recursos Educativos</h1>
        </div>
      </div>
      <div class="cont">
        <RecursoEducativo/>
        <RecursoEducativo/>
        <RecursoEducativo/>
      </div>
       
    </section>
  </main>
</body>