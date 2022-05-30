<template>
	<div class="box-centro box-detalhes-usuario">
    <div class="row">
     <div class="col-6 col-md-6"><h2>#{{ usuario.id }}</h2></div>
     <div class="col-6 col-md-6 text-right">
      <button type="button" class="btn btn-light btn-lg" @click="$router.go(-1)">Voltar</button>
     </div>
    </div>
		<div class="row">
      <div class="col-4 col-md-4">
        <img :src="usuario.avatar" class="avatar120" />
      </div>
      <div class="col-4 col-md-4 mt-5">
        <label>Primeiro nome</label>
        <dd>{{ usuario.firstName }}</dd>
      </div>
      <div class="col-4 col-md-4 mt-5">
        <label>Último nome</label>
        <dd>{{ usuario.lastName }}</dd>
      </div>
    </div>

    <label class="mt-3">Endereço de e-mail</label>
    <dd>{{ usuario.email }}</dd>

    <label>Link do avatar</label>
    <dd><a :href="usuario.avatar" target="_blank">{{ usuario.avatar }}</a></dd>

    <label>Link de suporte</label>
    <dd><a :href="usuario.urlSupport" target="_blank">{{ usuario.urlSupport }}</a></dd>

    <label>Descrição do usuário</label>
    <dd>{{ usuario.descUser }}</dd>

	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
     usuario: {
       id: null,
       avatar: null,
       firstName: null,
       lastName: null,
       email: null,
       urlSupport: null,
       descUser: null
     }
    }
  },
  methods: {
    ...mapActions('usuarios', ['buscaUsuario']),
    getUsuario(id) {
        this.buscaUsuario(id)
        .then(response => {
            this.usuario.id = id
            this.usuario.avatar = response.data.data.avatar
            this.usuario.firstName = response.data.data.first_name
            this.usuario.lastName = response.data.data.last_name
            this.usuario.email = response.data.data.email
            this.usuario.urlSupport = response.data.support.url
            this.usuario.descUser = response.data.support.text
        }, error => {
            console.log(error) // falta tratar erros
            alert('Erro ao buscar usuário.') // tem de melhorar apresentação
        })
      }
  },
  created() {
    const id = this.$route.params.id
    this.getUsuario(id)
  }
}
</script>

<style lang="sass" scoped>
	@import '~styles/estilo';
</style>
