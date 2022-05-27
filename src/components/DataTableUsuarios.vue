<template>
<div>
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
                <i class="material-icons" @click="visualizar(usuario)">remove_red_eye</i>
            </div>
        </div>
    </div>
</div>
<div class="row box-centro box-paginacao">
    <div class="col-12">
    Página: {{ page }}/{{ totalPages }} | Total de usuários:  {{ total }}<br />
    <span :class="estiloPaginacaoVoltar" @click="voltar(page)" title="voltar"><<</span> &nbsp;&nbsp; <span :class="estiloPaginacaoSeguir" @click="seguir(page,totalPages)" title="seguir">>></span>
    </div>
</div>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            usuarios: [],
            page: null,
            perPage: null,
            total: null,
            totalPages: null,
            paginaAcessada: null
        }
    },
    computed: {
        estiloPaginacaoVoltar() {
            if (this.page > 1) return 'paginacao-ativa paginacao'
            return 'paginacao-inativa paginacao'
        },
        estiloPaginacaoSeguir() {
            if (this.page < this.totalPages) return 'paginacao-ativa paginacao'
            return 'paginacao-inativa paginacao'
        }
    },
    methods: {
        ...mapActions('usuarios', ['listaDeUsuarios', 'deletarUsuario', 'setUltimoUsuarioVisualizado']),
        editar(id) {
            this.$router.push({ name: 'editar-usuario', params: { id: id } })
        },
        excluir(id, index) {
            if (window.confirm('Deseja Excluir usuário? \n(será trocado pelo sweet alert)') !== true) return // tentei instalar sweet alert mas deu ruim, depois vejo com tempo
            this.deletarUsuario(id).then(response => {
                this.usuarios.splice(index, 1) // simula deleção
                alert('Usuário excluido com sucesso \n(será trocado pelo sweet alert)')
            }, error => {
                console.log(error) // falta tratar erros
                alert('Erro ao deletar usuário.') // tem de melhorar apresentação
            })
        },
        visualizar(usuario) {
            this.setUltimoUsuarioVisualizado(usuario)
            this.$router.push({ name: 'detalhes-usuario', params: { usuario: usuario } })
        },
        voltar(pgAtual) {
            const p = pgAtual - 1
            const pg = (p < 1) ? 1 : p
            this.getUsuarios(pg)
            this.$router.push({ params: { pg: pg } })
        },
        seguir(pgAtual, total) {
            const p = pgAtual + 1
            const pg = (p > total) ? total : p
            this.getUsuarios(pg)
            this.$router.push({ params: { pg: pg } })
        },
        getUsuarios(pg) {
            this.listaDeUsuarios(pg)
            .then(response => {
                this.usuarios = response.data.data
                this.page = response.data.page
                this.perPage = response.data.per_page
                this.total = response.data.total
                this.totalPages = response.data.total_pages
                this.paginaAcessada = pg
            }, error => {
                console.log(error) // falta tratar erros
                alert('Erro ao buscar usuários.') // tem de melhorar apresentação
            })
        }
    },
    mounted() {
    const pg = (this.$route.params.pg) ? this.$route.params.pg : 1
    this.getUsuarios(pg)
    }
}
</script>

<style lang="sass" scoped>
	@import '~styles/estilo';
</style>
