<template>
	<div class="box-centro box-novo-usuario">
        <div class="row">
            <div class="col-6 col-md-6">USUÁRIOS</div>
            <div class="col-6 col-md-6 text-right">
                <button type="button" class="btn btn-light btn-lg" @click="$router.go(-1)">Cancelar</button>
            </div>
        </div>
        <form>
            <div class="form-group">
                <label for="nomeUsuario">Nome do usuário</label>
                <input v-model="form.nome" type="text" class="form-control" id="nomeUsuario" placeholder="Informe">
            </div>
            <div class="form-group">
                <label for="funcaoUsuario">Função do usuário</label>
                <select v-model="form.funcao" class="form-control" id="funcaoUsuario">
                    <option value=''>Escolha a função</option>
                    <template v-for="(funcao, index) in funcoes">
                        <option :value="funcao">{{ funcao }}</option>
                    </template>
                </select>
            </div>
            <button type="button" class="btn btn-dark w-100" @click="salvar">Salvar dados do usuário</button>
        </form>
        <DataTableUsuarios />
	</div>
</template>

<script>
import { mapActions } from 'vuex'
import DataTableUsuarios from '../components/DataTableUsuarios.vue'

export default {
    components: {
        DataTableUsuarios
    },
    data() {
        return {
            funcoes: [
                'Desenvolvedor',
                'Gerente de Projetos',
                'Tech Lead',
                'UI/UX Designer'
            ],
            form: {
                nome: null,
                funcao: ''
            }
        }
    },
    methods: {
        ...mapActions('usuarios', ['criarUsuario']),
        salvar() {
            this.criarUsuario(this.form)
            .then(response => {
                alert('Usuário criado com sucesso \n(será trocado pelo sweet alert)')
            }, error => {
                console.log(error) // falta tratar erros
                alert('Erro ao criar usuário.') // tem de melhorar apresentação
            })
        }
    }
}
</script>

<style lang="sass" scoped>
	@import '~styles/estilo';
</style>
