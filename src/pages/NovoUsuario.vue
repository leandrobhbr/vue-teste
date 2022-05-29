<template>
	<div class="box-centro box-novo-usuario">
        <FormUsuario>
            <template v-slot:header>
                <div class="row">
                    <div class="col-6 col-md-6">USUÁRIOS</div>
                    <div class="col-6 col-md-6 text-right">
                        <button type="button" class="btn btn-light btn-lg" @click="$router.go(-1)">Cancelar</button>
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
