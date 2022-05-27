<template>
	<div>
        <div class="row box-usuario-topo box-centro">
            <div class="col-12 col-sm-6 col-md-6">
                <h2>Usuários</h2>
            </div>
            <div class="col-12 col-sm-6 col-md-6">
                <button @click="cadastrar()">CADASTRAR</button>
            </div>
        </div>
        <div v-for="(usuario, index) in usuarios">
            <div class="row box-usuario box-centro">
                <div class="col-4 col-sm-3 col-md-3">
                    <img :src="usuario.avatar" />
                </div>
                <div class="col-4 col-sm-6 col-md-6 box-usuario-text">
                    #{{ usuario.id }} <br>
                    {{ usuario.first_name }} {{ usuario.last_name }} <br>
                    {{ usuario.email }}
                </div>
                <div class="col-4 col-sm-3 col-md-3">
                    <div class="box-icons">
                        <i class="material-icons" @click="editar(usuario.id)">edit</i>
                        <i class="material-icons" @click="excluir(usuario.id, index)">delete</i>
                        <i class="material-icons" @click="visualizar(usuario.id)">remove_red_eye</i>
                    </div>
                </div>
            </div>
        </div>
        <div class="row box-centro box-paginacao">
            <div class="col-12">
                Página: {{ page }}/{{ total_pages }} | Total de usuários:  {{ total }}<br />
                <span class="paginacao" @click="voltar(page)" title="voltar"><<</span> &nbsp;&nbsp; <span class="paginacao" @click="seguir(page,total_pages)" title="seguir">>></span>
            </div>
        </div>
	</div>
</template>

<script type="text/babel">
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            usuarios: [],
            page: null,
            per_page: null,
            total: null,
            total_pages: null
        }
    },
    methods: {
        ...mapActions('usuarios', ['listaDeUsuarios', 'deletarUsuario']),
        cadastrar() {
            this.$router.push({ name: 'novo-usuario' })
        },
        editar(id) {
            this.$router.push({ name: 'editar-usuario', params: { id: id } })
        },
        excluir(id, index) {
            this.deletarUsuario(id).then(response => {
                this.usuarios.splice(index, 1) // simula deleção
            }, error => {
                console.log(error) // falta tratar erros
                alert('Erro ao deletar usuário.') // tem de melhorar apresentação
            })
        },
        visualizar(id) {
            this.$router.push({ name: 'detalhes-usuario', params: { id: id } })
        },
        voltar(pgAtual) {
            const p = pgAtual - 1
            const pg = (p < 1) ? 1 : p
            this.$router.push({ name: 'listagem-usuarios', params: { pg: pg } })
            window.location.reload() // paliativo: tem de ver pq não atualiza, apesar de mudar a rota
        },
        seguir(pgAtual, total) {
            const p = pgAtual + 1
            const pg = (p > total) ? total : p
            this.$router.push({ name: 'listagem-usuarios', params: { pg: pg } })
            window.location.reload() // paliativo: tem de ver pq não atualiza, apesar de mudar a rota
        }
    },
    mounted() {
    const pg = (this.$route.params.pg) ? this.$route.params.pg : 1
    this.listaDeUsuarios(pg)
      .then(response => {
        this.usuarios = response.data.data
        this.page = response.data.page
        this.per_page = response.data.per_page
        this.total = response.data.total
        this.total_pages = response.data.total_pages
      }, error => {
        console.log(error) // falta tratar erros
        alert('Erro ao buscar usuários.') // tem de melhorar apresentação
      })
    }
}
</script>

<style lang="sass" scoped>
	@import '~styles/estilo';
</style>
