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
			path: '/',
			component: ListagemUsuarios,
			name: 'listagem-usuarios',
			children: [
				{
					path: 'detalhes-usuario/:id',
					component: DetalhesUsuario,
					props: true,
					name: 'detalhes-usuario'
				},
				{
					path: 'editar-usuario/:id',
					component: EditarUsuario,
					props: true,
					name: 'editar-usuario'
				}
			]
		},
		{
			path: '/novo-usuario',
			component: NovoUsuario,
			name: 'novo-usuario'
		}
	]
})

export default router
