<template>
	<div>
        <div class="row box-usuario-topo box-centro">
            <div class="col-12 col-sm-6 col-md-6">
                <h2>Usuários</h2>
            </div>
            <div class="col-12 col-sm-6 col-md-6 text-right">
                <button @click="cadastrar()" type="button" class="btn btn-dark btn-lg">Novo Usuário</button>
            </div>
        </div>
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
        }
    },
    methods: {
        cadastrar() {
            this.$router.push({ name: 'novo-usuario' })
        }
    }
}
</script>

<style lang="sass" scoped>
	@import '~styles/estilo';
</style>
