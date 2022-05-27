'use strict';

import Vue from 'vue'
import Router from 'vue-router'
import ListagemUsuarios from '../pages/ListagemUsuarios.vue'
import NovoUsuario from '../pages/NovoUsuario.vue'
import EditarUsuario from '../pages/EditarUsuario.vue'
import DetalhesUsuario from '../pages/DetalhesUsuario.vue'

Vue.use(Router)

const router = new Router({
	mode: 'hash',
	base: __dirname,
	linkActiveClass: 'active',
	routes: [
		{
			path: '/:pg?',
			component: ListagemUsuarios,
			name: 'listagem-usuarios',
		},
		{
			path: '/novo-usuario',
			component: NovoUsuario,
			name: 'novo-usuario'
		},
		{
			path: '/detalhes-usuario/:id',
			component: DetalhesUsuario,
			name: 'detalhes-usuario'
		},
		{
			path: '/editar-usuario/:id',
			component: NovoUsuario,
			name: 'editar-usuario'
		}
	]
})

export default router
