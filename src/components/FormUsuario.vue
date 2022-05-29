<template>
	<div>
        <slot name="header"></slot>
        <form class="form-usuario">
            <div class="form-group">
                <label for="nomeUsuario">Nome do usuário</label>
                <input v-model="form.nome" type="text" class="form-control input-group-lg" id="nomeUsuario" placeholder="Informe">
            </div>
            <div class="form-group">
                <label for="funcaoUsuario">Função do usuário</label>
                <select v-model="form.funcao" class="form-control input-group-lg" id="funcaoUsuario">
                    <option value=''>Escolha a função</option>
                    <template v-for="(funcao, index) in funcoes">
                        <option :value="funcao">{{ funcao }}</option>
                    </template>
                </select>
            </div>
            <button type="button" class="btn btn-dark w-100 btn-lg" @click="salvar">Salvar dados do usuário</button>
        </form>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            funcoes: [
                'Desenvolvedor',
                'Gerente de Projetos',
                'Tech Lead',
                'UI/UX Designer'
            ],
            form: {
                id: null,
                nome: null,
                funcao: ''
            }
        }
    },
    methods: {
        ...mapActions('usuarios', ['criarUsuario', 'buscaUsuario', 'alterarUsuario']),
        salvar() {
            if (!this.form.id) {
                this.criar()
                return
            }
            this.atualizar()
        },
        criar() {
            this.criarUsuario(this.form)
            .then(response => {
                alert('Usuário criado com sucesso \n(será trocado pelo sweet alert)')
            }, error => {
                console.log(error) // falta tratar erros
                alert('Erro ao criar usuário.') // tem de melhorar apresentação
            })
        },
        atualizar() {
            this.alterarUsuario(this.form)
            .then(response => {
                alert('Usuário alterado com sucesso \n(será trocado pelo sweet alert)')
            }, error => {
                console.log(error) // falta tratar erros
                alert('Erro ao criar usuário.') // tem de melhorar apresentação
            })
        },
        getUsuarioParaEdicao(id) {
            this.buscaUsuario(id)
            .then(response => {
                this.form.id = response.data.data.id
                this.form.nome = response.data.data.first_name + ' ' + response.data.data.last_name
            }, error => {
                console.log(error) // falta tratar erros
                alert('Erro ao buscar usuário para edição.') // tem de melhorar apresentação
            })
        }
    },
    mounted() {
        const id = (this.$route.params.id) ? this.$route.params.id : null
        // tratar url sem id
        if (id) {
            this.getUsuarioParaEdicao(id)
        }
    }
}
</script>

<style lang="sass" scoped>
	@import '~styles/estilo';
</style>
