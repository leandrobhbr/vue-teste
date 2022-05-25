<template>
	<nav v-once>
		<ul role="menu">
			<li role="presentation">
				<router-link to="/" exact>Listagem de usuários</router-link>
			</li>
			<li role="presentation">
				<router-link to="/novo-usuario">Novo usuário</router-link>
			</li>
		</ul>
	</nav>
</template>

<script type="text/babel">
	import Vue from 'vue'

	Vue.component('app-nav')
</script>

<style lang="sass" scoped>
	@import '~styles/estilo';
</style>
