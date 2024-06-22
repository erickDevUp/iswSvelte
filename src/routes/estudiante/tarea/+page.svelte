<script>

	import Tarea from "../../../components/Tarea.svelte";
	import AddTask from "../../../components/modals/AddTask.svelte";

    let isShowAddTask = false;
</script>
<section>
	<div>
		<div class="section__header">
			<h1>Tareas</h1>
			<div class="header__buttom">
				<button on:click={() => isShowAddTask = true}><span class="ti-plus"></span></button>
				
			</div>
		</div>
	</div>
	<div class="cont">
        <Tarea />
        <Tarea />
        <Tarea />
        <Tarea />
	</div>
    <AddTask on:click={() => isShowAddTask = false} isShow={isShowAddTask}/>
</section>
