<template>
	<div class="box-centro box-novo-usuario">
        <FormUsuario>
            <template v-slot:header>
                <div class="row">
                    <div class="col-8 col-md-8"><h2>Editar Usuário</h2></div>
                    <div class="col-4 col-md-4 text-right">
                        <button type="button" class="btn btn-light btn-lg" @click="$router.go(-1)">Voltar</button>
                    </div>
                </div>
            </template>
        </FormUsuario>
        <DataTableUsuarios />
	</div>
</template>

<script>
import { mapActions } from 'vuex'
import DataTableUsuarios from '../components/DataTableUsuarios.vue'
import FormUsuario from '../components/FormUsuario.vue'

export default {
    components: {
        DataTableUsuarios,
        FormUsuario
    }
}
</script>

<style lang="sass" scoped>
	@import '~styles/estilo';
</style>
