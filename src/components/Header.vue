<template>
	<nav class="nav-menu">
		<ul class="menu">
			<li>
				<router-link :to="{ name: 'listagem-usuarios' }">Listagem de usuários</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'novo-usuario' }">Novo usuário</router-link>
			</li>
			<li v-if="ultimoUsuarioVisualizado">
				<router-link :to="{ name: 'detalhes-usuario', params: { id: ultimoUsuarioVisualizado.id } }">Último visualizado: {{ nomeCompleto }}</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
	...mapState('usuarios', ['ultimoUsuarioVisualizado']),
	nomeCompleto() {
		return `${this.ultimoUsuarioVisualizado.first_name} ${this.ultimoUsuarioVisualizado.last_name}`
	}
  }
}
</script>

<style lang="sass" scoped>
	@import '~styles/estilo';
</style>
