<template>
	<div>
		<h2>Editar Usuário</h2>
		{{ usuario }}
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            usuario: null
        }
    },
    methods: {
        ...mapActions('usuarios', ['buscaUsuario']),
        getUsuarioParaEdicao(id) {
            this.buscaUsuario(id)
            .then(response => {
                this.usuario = response.data.data
            }, error => {
                console.log(error) // falta tratar erros
                alert('Erro ao buscar usuário para edição.') // tem de melhorar apresentação
            })
        }
    },
    mounted() {
	const id = (this.$route.params.id) ? this.$route.params.id : 1
	// tratar url sem id
    this.getUsuarioParaEdicao(id)
    }
}
</script>

<style lang="sass" scoped>
	@import '~styles/estilo';
</style>
